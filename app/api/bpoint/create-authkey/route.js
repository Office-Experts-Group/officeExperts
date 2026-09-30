// app/api/bpoint/create-authkey/route.js
// Processes a card payment through the Bpoint v3 transaction API and sends
// the customer and internal confirmation emails.
//
// SURCHARGE REMOVAL: the server now only ever charges the invoice amount.
// Surcharge values are no longer read, calculated or sent to Bpoint.

import { NextResponse } from "next/server";
// Bpoint credentials and live/test mode, validated from environment variables
import {
  getPaymentConfig,
  validateBpointConfig,
} from "../../../../utils/paymentConfig";
// Sendgrid email helpers for the customer receipt and accounts notification
import {
  sendPaymentConfirmationEmail,
  sendInternalPaymentNotification,
} from "../../../../utils/emailService";

const BPOINT_API_URL = "https://www.bpoint.com.au/webapi/v3/txns/";

/**
 * Works out the amount to charge, in cents.
 *
 * Browsers still holding the previous version of the payment page may send
 * { amount: invoice + surcharge, baseAmount: invoice }. Preferring
 * baseAmount when present guarantees no surcharge is charged, even from a
 * stale cached bundle. The current page sends { amount } only.
 */
function getChargeAmount(requestBody) {
  return parseInt(requestBody.baseAmount ?? requestBody.amount);
}

/**
 * Sends the customer receipt and internal notification emails.
 * Failures are recorded rather than thrown — the payment has already
 * succeeded by this point and must still be reported as successful.
 */
async function sendConfirmationEmails(emailData) {
  const emailStatus = {
    customerEmail: false,
    internalEmail: false,
    customerEmailId: null,
    errors: [],
  };

  try {
    const customerResult = await sendPaymentConfirmationEmail(emailData);
    if (customerResult.success) {
      emailStatus.customerEmail = true;
      emailStatus.customerEmailId = customerResult.messageId;
    } else {
      console.error("❌ Failed to send customer email:", customerResult.error);
      emailStatus.errors.push(`Customer email: ${customerResult.error}`);
    }
  } catch (emailError) {
    console.error("❌ Error sending customer email:", emailError);
    emailStatus.errors.push(`Customer email exception: ${emailError.message}`);
  }

  try {
    const internalResult = await sendInternalPaymentNotification(emailData);
    if (internalResult.success) {
      emailStatus.internalEmail = true;
    } else {
      console.error("❌ Failed to send internal email:", internalResult.error);
      emailStatus.errors.push(`Internal email: ${internalResult.error}`);
    }
  } catch (emailError) {
    console.error("❌ Error sending internal email:", emailError);
    emailStatus.errors.push(`Internal email exception: ${emailError.message}`);
  }

  console.log("📧 Email Status Summary:", {
    customerEmailSent: emailStatus.customerEmail,
    internalEmailSent: emailStatus.internalEmail,
    errors: emailStatus.errors,
  });

  return emailStatus;
}

export async function POST(request) {
  console.log(
    "🚀 Bpoint payment request received at:",
    new Date().toISOString(),
  );

  try {
    // Fail fast if credentials are missing or malformed
    try {
      validateBpointConfig();
    } catch (configError) {
      console.error("❌ CONFIGURATION ERROR:", configError.message);
      return NextResponse.json(
        {
          error:
            "Payment system configuration error. Please contact support immediately.",
          code: "CONFIG_ERROR",
          timestamp: new Date().toISOString(),
        },
        { status: 500 },
      );
    }

    const requestBody = await request.json();
    console.log(
      "📥 Processing payment for invoice:",
      requestBody.invoiceNumber,
    );

    const {
      invoiceNumber,
      customerName,
      customerEmail,
      cardNumber,
      expiryDate,
      cvn,
      cardHolderName,
      cardType,
    } = requestBody;

    const { config, isProduction } = getPaymentConfig();

    if (!cardNumber || !expiryDate || !cvn) {
      return NextResponse.json(
        {
          error:
            "Missing card details. Please provide all required information.",
          code: "VALIDATION_ERROR",
        },
        { status: 400 },
      );
    }

    // Invoice amount only — no surcharge
    const amount = getChargeAmount(requestBody);

    if (isNaN(amount) || amount <= 0) {
      console.log("❌ Invalid amount:", requestBody.amount);
      return NextResponse.json(
        { error: "Invalid payment amount", code: "INVALID_AMOUNT" },
        { status: 400 },
      );
    }

    const firstName = customerName.split(" ")[0] || customerName;
    const lastName = customerName.split(" ").slice(1).join(" ") || "";

    const isTestMode = !isProduction;

    // Bpoint transaction request. Crn fields are free-text references that
    // appear in the Bpoint back office for reconciliation.
    const requestData = {
      TxnReq: {
        Action: "payment",
        Amount: amount,
        Currency: "AUD",
        MerchantReference: `Inv ${invoiceNumber}`,
        Crn1: invoiceNumber.replace(/[^a-zA-Z0-9]/g, ""),
        Crn2: cardType || "",
        EmailAddress: customerEmail,
        TestMode: isTestMode,
        Type: "internet",
        SubType: "single",

        CardDetails: {
          CardHolderName: cardHolderName || customerName,
          CardNumber: cardNumber,
          Cvn: cvn,
          ExpiryDate: expiryDate,
        },

        Customer: {
          ContactDetails: {
            EmailAddress: customerEmail,
          },
          PersonalDetails: {
            FirstName: firstName,
            LastName: lastName,
          },
        },
      },
    };

    // Bpoint Basic auth format: "username|merchantNumber:password"
    const authString = `${config.username}|${config.merchantNumber}:${config.password}`;
    const credentials = Buffer.from(authString).toString("base64");

    const bpointResponse = await fetch(BPOINT_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(requestData),
    });

    const responseText = await bpointResponse.text();

    if (!bpointResponse.ok) {
      console.error("❌ HTTP Error from Bpoint:", {
        status: bpointResponse.status,
        statusText: bpointResponse.statusText,
        response: responseText.substring(0, 1000),
      });

      return NextResponse.json(
        {
          error:
            "Payment gateway is currently unavailable. Please try again in a few minutes or contact support.",
          code: "GATEWAY_UNAVAILABLE",
          httpStatus: bpointResponse.status,
          timestamp: new Date().toISOString(),
        },
        { status: 503 },
      );
    }

    let bpointResult;
    try {
      bpointResult = JSON.parse(responseText);
    } catch (parseError) {
      console.error("❌ Failed to parse Bpoint response:", parseError);
      console.error("Raw response:", responseText);

      return NextResponse.json(
        {
          error:
            "Payment gateway returned invalid response. Please try again or contact support.",
          code: "INVALID_RESPONSE",
          timestamp: new Date().toISOString(),
        },
        { status: 502 },
      );
    }

    // APIResponse covers the request itself (auth, format); TxnResp covers
    // the bank's decision on the card
    if (bpointResult.APIResponse?.ResponseCode !== 0) {
      console.error("❌ Bpoint API Error:", bpointResult.APIResponse);
      return NextResponse.json(
        {
          error: "Payment gateway error. Please try again or contact support.",
          code: "API_ERROR",
          apiResponse: bpointResult.APIResponse,
          timestamp: new Date().toISOString(),
        },
        { status: 502 },
      );
    }

    const transaction = bpointResult.TxnResp;
    if (!transaction) {
      console.error("❌ No transaction data in response:", bpointResult);
      return NextResponse.json(
        {
          error:
            "Payment processing error. Please try again or contact support.",
          code: "NO_TRANSACTION_DATA",
          timestamp: new Date().toISOString(),
        },
        { status: 502 },
      );
    }

    // Approved
    if (transaction.ResponseCode === "0") {
      console.log("✅ PAYMENT SUCCESSFUL!");

      let emailStatus = {
        customerEmail: false,
        internalEmail: false,
        customerEmailId: null,
        errors: [],
      };

      // Emails only go out in production unless explicitly enabled for testing
      const shouldSendEmails =
        isProduction || process.env.SEND_EMAILS_IN_TEST === "true";

      if (shouldSendEmails) {
        emailStatus = await sendConfirmationEmails({
          invoiceNumber,
          customerName,
          customerEmail,
          totalAmount: amount,
          cardType,
          // Bpoint returns PascalCase keys
          authCode: transaction.AuthoriseId,
          paymentDate: Date.now().toString(),
          transactionId: transaction.TxnNumber,
        });
      } else {
        console.log("📧 Email sending disabled in test mode");
        emailStatus.errors.push("Email sending disabled in test environment");
      }

      return NextResponse.json({
        success: true,
        transaction: {
          txnNumber: transaction.TxnNumber,
          amount: transaction.Amount,
          responseCode: transaction.ResponseCode,
          authoriseId: transaction.AuthoriseId,
          receiptNumber: transaction.ReceiptNumber,
          processedAmount: transaction.ProcessedAmount,
          merchantReference: transaction.MerchantReference,
          transactionDate: new Date().toISOString(),
          cardType: cardType,
          maskedCardNumber: `****-****-****-${cardNumber.slice(-4)}`,
          isTestMode,
        },
        emailStatus,
      });
    }

    // Declined
    const declineInfo = getDeclineInfo(
      transaction.ResponseCode,
      transaction.ResponseText,
      isTestMode,
      transaction,
    );

    return NextResponse.json(
      {
        success: false,
        error: declineInfo.userMessage,
        responseCode: transaction.ResponseCode,
        responseText: transaction.ResponseText,
        txnNumber: transaction.TxnNumber,
        canRetry: declineInfo.canRetry,
        suggestedAction: declineInfo.suggestedAction,
        isTestMode,
        timestamp: new Date().toISOString(),
      },
      { status: 400 },
    );
  } catch (error) {
    console.error("💥 CRITICAL ERROR in payment processing:", error);
    console.error("Stack trace:", error.stack);

    return NextResponse.json(
      {
        error:
          "Payment system error. Please contact support immediately with this timestamp.",
        code: "SYSTEM_ERROR",
        timestamp: new Date().toISOString(),
        errorDetails: error.message,
      },
      { status: 500 },
    );
  }
}

/**
 * Maps a Bpoint decline to a customer message.
 * Bpoint concatenates Response Code + Bank Response Code (e.g. 2 + 05 = "205"),
 * so the combined code is tried first, then the raw response code.
 */
function getDeclineInfo(responseCode, responseText, isTestMode, transaction) {
  let lookupCode = responseCode;
  if (
    transaction?.BankResponseCode &&
    transaction.BankResponseCode !== responseCode
  ) {
    lookupCode = responseCode + transaction.BankResponseCode;
    console.log(
      `🔍 Concatenated response code: ${responseCode} + ${transaction.BankResponseCode} = ${lookupCode}`,
    );
  }

  const declineReasons = {
    // Individual response codes
    2: {
      userMessage: isTestMode
        ? "This appears to be a real card in test mode. Please use Bpoint test card numbers: 5123456789012346 (MasterCard), 4987654321098769 (Visa), or 345678901234564 (Amex)."
        : "Transaction error occurred. Please check your card details and try again.",
      canRetry: true,
      suggestedAction: isTestMode
        ? "Use test card numbers for test mode"
        : "Verify card details and try again",
    },
    14: {
      userMessage:
        "Invalid card number. Please check your card number and try again.",
      canRetry: true,
      suggestedAction: "Verify card number",
    },

    // Concatenated response codes (Response Code + Bank Response Code)
    214: {
      userMessage:
        "Invalid card number. Please check your card number and try again.",
      canRetry: true,
      suggestedAction: "Verify card number is correct",
    },
    112: {
      userMessage:
        "Invalid transaction. Please check your details and try again.",
      canRetry: true,
      suggestedAction: "Verify all card details",
    },
    205: {
      userMessage:
        "Your card was declined by your bank. Please contact your bank or try a different card.",
      canRetry: true,
      suggestedAction: "Try a different card or contact your bank",
    },
    251: {
      userMessage:
        "Insufficient funds. Please check your account balance or try a different card.",
      canRetry: true,
      suggestedAction: "Check account balance or use different card",
    },
    454: {
      userMessage:
        "Your card has expired. Please check the expiry date or use a different card.",
      canRetry: true,
      suggestedAction: "Check expiry date or use different card",
    },
    261: {
      userMessage:
        "Transaction amount exceeds your card limit. Please contact your bank or try a smaller amount.",
      canRetry: true,
      suggestedAction: "Contact bank or reduce amount",
    },
    178: {
      userMessage: "Your card is blocked. Please contact your bank.",
      canRetry: false,
      suggestedAction: "Contact your bank immediately",
    },
    282: {
      userMessage:
        "Security code validation failed. Please check your CVV and try again.",
      canRetry: true,
      suggestedAction: "Check CVV/CVC code",
    },
    291: {
      userMessage:
        "Bank system temporarily unavailable. Please try again in a few minutes.",
      canRetry: true,
      suggestedAction: "Try again in a few minutes",
    },
    296: {
      userMessage:
        "System error occurred. Please try again or contact support.",
      canRetry: true,
      suggestedAction: "Retry or contact support",
    },

    // Common bank codes
    "05": {
      userMessage:
        "Your card was declined by your bank. Please contact your bank or try a different card.",
      canRetry: true,
      suggestedAction: "Try a different card or contact your bank",
    },
    51: {
      userMessage:
        "Insufficient funds. Please check your account balance or try a different card.",
      canRetry: true,
      suggestedAction: "Check account balance or use different card",
    },
    54: {
      userMessage:
        "Your card has expired. Please check the expiry date or use a different card.",
      canRetry: true,
      suggestedAction: "Check expiry date or use different card",
    },
    61: {
      userMessage:
        "Transaction amount exceeds your card limit. Please contact your bank or try a smaller amount.",
      canRetry: true,
      suggestedAction: "Contact bank or reduce amount",
    },
    78: {
      userMessage: "Your card is blocked. Please contact your bank.",
      canRetry: false,
      suggestedAction: "Contact your bank immediately",
    },
    82: {
      userMessage:
        "Security code validation failed. Please check your CVV and try again.",
      canRetry: true,
      suggestedAction: "Check CVV/CVC code",
    },
    91: {
      userMessage:
        "Bank system temporarily unavailable. Please try again in a few minutes.",
      canRetry: true,
      suggestedAction: "Try again in a few minutes",
    },
    96: {
      userMessage:
        "System error occurred. Please try again or contact support.",
      canRetry: true,
      suggestedAction: "Retry or contact support",
    },
  };

  const info = declineReasons[lookupCode] || declineReasons[responseCode];
  if (info) return info;

  // Fall back to Bpoint's own text if it's meaningful
  if (responseText && responseText !== "Unknown") {
    return {
      userMessage: `${responseText}. Please check your card details and try again.`,
      canRetry: true,
      suggestedAction: "Verify card details and try again",
    };
  }

  return {
    userMessage: `Payment declined (Code: ${responseCode}). Please contact your bank or try a different card.`,
    canRetry: true,
    suggestedAction: "Contact bank or try different card",
  };
}
