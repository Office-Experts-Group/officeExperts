// app/api/bpoint/create-authkey/route.js - UPDATED WITH EMAIL INTEGRATION
import { NextResponse } from "next/server";
import {
  getPaymentConfig,
  validateBpointConfig,
} from "../../../../utils/paymentConfig";
import {
  sendPaymentConfirmationEmail,
  sendInternalPaymentNotification,
} from "../../../../utils/emailService";

export async function POST(request) {
  console.log(
    "🚀 Bpoint payment request received at:",
    new Date().toISOString()
  );

  try {
    // CRITICAL: Validate configuration first
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
        { status: 500 }
      );
    }

    const requestBody = await request.json();
    console.log(
      "📥 Processing payment for invoice:",
      requestBody.invoiceNumber
    );

    const {
      amount: totalAmount,
      baseAmount,
      surchargeAmount,
      invoiceNumber,
      customerName,
      customerEmail,
      cardNumber,
      expiryDate,
      cvn,
      cardHolderName,
      cardType,
    } = requestBody;

    // Get validated configuration with production mode check
    const { config, isProduction } = getPaymentConfig();

    // Validate request data
    if (!cardNumber || !expiryDate || !cvn) {
      console.log("❌ Validation failed: Missing card details");
      return NextResponse.json(
        {
          error:
            "Missing card details. Please provide all required information.",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    // Process amounts
    const amount = parseInt(totalAmount);
    const baseAmt = parseInt(baseAmount) || amount;
    const surchargeAmt = parseInt(surchargeAmount) || 0;

    if (isNaN(amount) || amount <= 0) {
      console.log("❌ Invalid amount:", totalAmount);
      return NextResponse.json(
        {
          error: "Invalid payment amount",
          code: "INVALID_AMOUNT",
        },
        { status: 400 }
      );
    }

    const firstName = customerName.split(" ")[0] || customerName;
    const lastName = customerName.split(" ").slice(1).join(" ") || "";

    // USE PRODUCTION MODE FROM CONFIG
    const isTestMode = !isProduction;

    // Prepare transaction request
    const requestData = {
      TxnReq: {
        Action: "payment",
        Amount: amount,
        Currency: "AUD",
        MerchantReference: `Inv ${invoiceNumber}`,
        Crn1: invoiceNumber.replace(/[^a-zA-Z0-9]/g, ""),
        Crn2: cardType || "",
        Crn3: `Surcharge:${surchargeAmt}`,
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

    // Build authentication
    const authString = `${config.username}|${config.merchantNumber}:${config.password}`;
    const credentials = Buffer.from(authString).toString("base64");
    const apiUrl = "https://www.bpoint.com.au/webapi/v3/txns/";

    // // Critical logging for production debugging
    // if (isTestMode) {
    //   console.log("🧪 TEST MODE - Using test processing");
    //   console.log(
    //     "💡 For success in test mode, use amount ending in 00 (like 10000 = $100.00)"
    //   );
    //   console.log(
    //     "💡 Current amount:",
    //     amount,
    //     "Last 2 digits:",
    //     String(amount).slice(-2)
    //   );
    //   console.log("💡 Expected response code:", String(amount).slice(-2));
    // } else {
    //   console.log("💰 LIVE MODE - Processing real payment");
    //   console.log("⚠️  REAL MONEY WILL BE CHARGED");
    // }

    // Make API call to Bpoint
    const bpointResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(requestData),
    });

    const responseText = await bpointResponse.text();

    // Detailed response logging
    // console.log("📨 Bpoint response:", {
    //   status: bpointResponse.status,
    //   statusText: bpointResponse.statusText,
    //   ok: bpointResponse.ok,
    //   contentLength: responseText.length,
    //   headers: Object.fromEntries(bpointResponse.headers.entries()),
    // });

    if (!bpointResponse.ok) {
      console.error("❌ HTTP Error from Bpoint:", {
        status: bpointResponse.status,
        statusText: bpointResponse.statusText,
        response: responseText.substring(0, 1000), // Log first 1000 chars
      });

      return NextResponse.json(
        {
          error:
            "Payment gateway is currently unavailable. Please try again in a few minutes or contact support.",
          code: "GATEWAY_UNAVAILABLE",
          httpStatus: bpointResponse.status,
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }

    // Parse and validate response
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
        { status: 502 }
      );
    }

    // Check API-level response
    if (bpointResult.APIResponse?.ResponseCode !== 0) {
      console.error("❌ Bpoint API Error:", bpointResult.APIResponse);
      return NextResponse.json(
        {
          error: "Payment gateway error. Please try again or contact support.",
          code: "API_ERROR",
          apiResponse: bpointResult.APIResponse,
          timestamp: new Date().toISOString(),
        },
        { status: 502 }
      );
    }

    // Extract transaction
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
        { status: 502 }
      );
    }

    // Handle successful payment
    if (transaction.ResponseCode === "0") {
      console.log("✅ PAYMENT SUCCESSFUL!");


      // 🔥 NEW: Send confirmation emails
      let emailStatus = {
        customerEmail: false,
        internalEmail: false,
        customerEmailId: null,
        internalEmailId: null,
        errors: [],
      };

      // Only send emails in production or if explicitly enabled
      const shouldSendEmails =
        isProduction || process.env.SEND_EMAILS_IN_TEST === "true";

      if (shouldSendEmails) {
        console.log("📧 Sending confirmation emails...");

        // Prepare email data
        const emailData = {
          invoiceNumber,
          customerName,
          customerEmail,
          totalAmount: amount,
          baseAmount: baseAmt,
          surchargeAmount: surchargeAmt,
          cardType,
          authCode: transaction.authoriseId,
          paymentDate: Date.now().toString(),
          transactionId: transaction.TxnNumber,
        };

        // Send customer confirmation email
        try {
          console.log(
            "📧 Sending customer confirmation email to:",
            customerEmail
          );
          const customerEmailResult = await sendPaymentConfirmationEmail(
            emailData
          );

          if (customerEmailResult.success) {
            console.log(
              "✅ Customer email sent successfully:",
              customerEmailResult.messageId
            );
            emailStatus.customerEmail = true;
            emailStatus.customerEmailId = customerEmailResult.messageId;
          } else {
            console.error(
              "❌ Failed to send customer email:",
              customerEmailResult.error
            );
            emailStatus.errors.push(
              `Customer email: ${customerEmailResult.error}`
            );
          }
        } catch (emailError) {
          console.error("❌ Error sending customer email:", emailError);
          emailStatus.errors.push(
            `Customer email exception: ${emailError.message}`
          );
        }

        // Send internal notification email
        try {
          console.log("📧 Sending internal notification email...");
          const internalEmailResult = await sendInternalPaymentNotification(
            emailData
          );

          if (internalEmailResult.success) {
            console.log("✅ Internal email sent successfully");
            emailStatus.internalEmail = true;
          } else {
            console.error(
              "❌ Failed to send internal email:",
              internalEmailResult.error
            );
            emailStatus.errors.push(
              `Internal email: ${internalEmailResult.error}`
            );
          }
        } catch (emailError) {
          console.error("❌ Error sending internal email:", emailError);
          emailStatus.errors.push(
            `Internal email exception: ${emailError.message}`
          );
        }

        // Log email status summary
        console.log("📧 Email Status Summary:", {
          customerEmailSent: emailStatus.customerEmail,
          internalEmailSent: emailStatus.internalEmail,
          errors: emailStatus.errors,
          totalErrors: emailStatus.errors.length,
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
          authoriseId: transaction.authoriseId,
          receiptNumber: transaction.ReceiptNumber,
          processedAmount: transaction.ProcessedAmount,
          merchantReference: transaction.MerchantReference,
          transactionDate: new Date().toISOString(),
          cardType: cardType,
          maskedCardNumber: `****-****-****-${cardNumber.slice(-4)}`,
          surchargeAmount: surchargeAmt,
          baseAmount: baseAmt,
          isTestMode, // Include this for debugging
        },
        // 🔥 NEW: Include email status in response
        emailStatus: {
          customerEmail: emailStatus.customerEmail,
          internalEmail: emailStatus.internalEmail,
          customerEmailId: emailStatus.customerEmailId,
          errors: emailStatus.errors,
        },
      });
    } else {

      const declineInfo = getDeclineInfo(
        transaction.ResponseCode,
        transaction.ResponseText,
        isTestMode,
        transaction
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
          isTestMode, // Include this for debugging
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }
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
      { status: 500 }
    );
  }
}

// Enhanced decline handling with proper code concatenation and test mode awareness
function getDeclineInfo(responseCode, responseText, isTestMode, transaction) {
  // Handle concatenated response codes (Response Code + Bank Response Code)
  let lookupCode = responseCode;
  if (
    transaction?.BankResponseCode &&
    transaction.BankResponseCode !== responseCode
  ) {
    lookupCode = responseCode + transaction.BankResponseCode;
    console.log(
      `🔍 Concatenated response code: ${responseCode} + ${transaction.BankResponseCode} = ${lookupCode}`
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

    // Common single digit codes
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

  // Try concatenated code first, then individual codes
  let info = declineReasons[lookupCode] || declineReasons[responseCode];

  if (info) {
    console.log(
      `✅ Found decline info for code ${lookupCode || responseCode}:`,
      info.userMessage
    );
    return info;
  }

  // Use response text if available and meaningful
  if (responseText && responseText !== "Unknown" && responseText !== "") {
    console.log(`📝 Using response text: ${responseText}`);
    return {
      userMessage: `${responseText}. Please check your card details and try again.`,
      canRetry: true,
      suggestedAction: "Verify card details and try again",
    };
  }

  // Final fallback
  console.log(
    `❓ Unknown response code ${responseCode}, using default message`
  );
  return {
    userMessage: `Payment declined (Code: ${responseCode}). Please contact your bank or try a different card.`,
    canRetry: true,
    suggestedAction: "Contact bank or try different card",
  };
}
