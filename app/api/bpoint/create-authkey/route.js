// app/api/bpoint/create-authkey/route.js - ENHANCED VERSION
import { NextResponse } from "next/server";
import { getPaymentConfig } from "../../../../utils/paymentConfig";

export async function POST(request) {
  try {
    const requestBody = await request.json();
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

    const { config } = getPaymentConfig("bpoint");

    if (
      !config.username ||
      !config.password ||
      !config.merchantShortName ||
      !config.merchantNumber
    ) {
      console.error("Missing Bpoint configuration");
      return NextResponse.json(
        {
          error: "Payment gateway configuration error",
          code: "CONFIG_ERROR",
        },
        { status: 500 }
      );
    }

    // Validate required fields
    if (!cardNumber || !expiryDate || !cvn) {
      return NextResponse.json(
        {
          error:
            "Missing card details. Please provide all required information.",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      );
    }

    // Validate amounts
    const amount = parseInt(totalAmount);
    const baseAmt = parseInt(baseAmount) || amount;
    const surchargeAmt = parseInt(surchargeAmount) || 0;

    if (isNaN(amount) || amount <= 0) {
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

    // FOR PRODUCTION TESTING, USE:
    const isTestMode = false; // Always use live mode for real invoices

    if (isTestMode) {
      console.log("🧪 RUNNING IN TEST MODE - No real charges will be made");
    } else {
      console.log("💰 RUNNING IN LIVE MODE - Real charges will be processed");
    }

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
        TestMode: isTestMode, // This will now be false
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

    const authString = `${config.username}|${config.merchantNumber}:${config.password}`;
    const credentials = Buffer.from(authString).toString("base64");
    const apiUrl = "https://www.bpoint.com.au/webapi/v3/txns/";

    console.log(
      "Sending payment request to Bpoint for invoice:",
      invoiceNumber
    );

    console.log("🔍 DEBUGGING BPOINT REQUEST:", {
      isTestMode,
      amount,
      baseAmount,
      surchargeAmt,
      invoiceNumber,
      apiUrl,
      testModeInRequest: requestData.TxnReq.TestMode,
      merchantNumber: config.merchantNumber,
      environment: process.env.NODE_ENV,
      expectedResponseCode: isTestMode
        ? `Last 2 digits of amount ${amount} = ${String(amount).slice(
            -2
          )} = Response Code ${String(amount).slice(-2)}`
        : "Based on bank",
      note: "For success, total amount should end in 00 (like 10000). Current amount includes surcharge.",
    });

    const bpointResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(requestData),
    });

    const responseText = await bpointResponse.text();

    console.log("🔍 FULL BPOINT RESPONSE:", {
      status: bpointResponse.status,
      statusText: bpointResponse.statusText,
      headers: Object.fromEntries(bpointResponse.headers.entries()),
      responseText: responseText.substring(0, 500), // First 500 chars
    });

    if (!bpointResponse.ok) {
      console.error("Bpoint API error:", bpointResponse.status, responseText);
      return NextResponse.json(
        {
          error: "Payment processing failed. Please try again.",
          code: "API_ERROR",
          httpStatus: bpointResponse.status,
        },
        { status: 500 }
      );
    }

    let bpointResult;
    try {
      bpointResult = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse Bpoint response:", parseError);
      return NextResponse.json(
        {
          error: "Payment gateway error. Please try again.",
          code: "PARSE_ERROR",
        },
        { status: 500 }
      );
    }

    // Check for API response errors
    if (bpointResult.APIResponse?.ResponseCode !== 0) {
      console.error("Bpoint API Response Error:", bpointResult.APIResponse);
      return NextResponse.json(
        {
          error:
            "Payment gateway error. Please contact support if this persists.",
          code: "GATEWAY_ERROR",
          apiResponse: bpointResult.APIResponse,
        },
        { status: 500 }
      );
    }

    const transaction = bpointResult.TxnResp;
    if (!transaction) {
      console.error("No transaction in response:", bpointResult);
      return NextResponse.json(
        {
          error: "Payment processing error. Please try again.",
          code: "NO_TRANSACTION",
        },
        { status: 500 }
      );
    }

    // Log transaction for debugging
    console.log("Transaction processed:", {
      txnNumber: transaction.TxnNumber,
      responseCode: transaction.ResponseCode,
      amount: transaction.Amount,
      invoiceNumber,
    });

    // Log transaction details for debugging
    console.log("Transaction Details:", {
      responseCode: transaction.ResponseCode,
      responseText: transaction.ResponseText,
      isTestMode: process.env.NODE_ENV !== "production",
      cardNumber: cardNumber.slice(-4),
    });

    // Check if payment was successful - Bpoint uses "0" for success, not "00"
    if (transaction.ResponseCode === "0") {
      // Success response with enhanced data
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
          surchargeAmount: surchargeAmt,
          baseAmount: baseAmt,
        },
        redirectUrl: null, // We'll handle redirect in the frontend
      });
    } else {
      // Enhanced decline handling with test mode detection
      const declineInfo = getDeclineInfo(
        transaction.ResponseCode,
        transaction.ResponseText
      );
      let userMessage = declineInfo.userMessage;

      // Special handling for test mode
      if (isTestMode) {
        if (
          transaction.ResponseCode === "2" ||
          transaction.ResponseCode === "01"
        ) {
          userMessage =
            "This appears to be a real card in test mode. Please use Bpoint test card numbers: 5123456789012346 (MasterCard), 4987654321098769 (Visa), or 345678901234564 (Amex).";
        }
      }

      console.log("Payment declined:", {
        responseCode: transaction.ResponseCode,
        responseText: transaction.ResponseText,
        bankResponseCode: transaction.BankResponseCode,
        txnNumber: transaction.TxnNumber,
        invoiceNumber,
        isTestMode,
        userMessage,
      });

      return NextResponse.json(
        {
          success: false,
          error: declineInfo.userMessage,
          responseCode: transaction.ResponseCode,
          responseText: transaction.ResponseText,
          txnNumber: transaction.TxnNumber,
          canRetry: declineInfo.canRetry,
          suggestedAction: declineInfo.suggestedAction,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Payment processing error:", error);
    return NextResponse.json(
      {
        error:
          "Payment processing failed. Please try again or contact support.",
        code: "SYSTEM_ERROR",
      },
      { status: 500 }
    );
  }
}

// Helper function for detailed decline information
function getDeclineInfo(responseCode, responseText) {
  const declineReasons = {
    // Decline reasons specific to test mode
    2: {
      userMessage:
        "Real cards are not processed in test mode. Please use Bpoint test card numbers.",
      canRetry: true,
      suggestedAction:
        "Use test card: 5123456789012346 (MasterCard) or 4987654321098769 (Visa)",
    },
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
    14: {
      userMessage:
        "Invalid card number. Please check your card number and try again.",
      canRetry: true,
      suggestedAction: "Verify card number",
    },
    55: {
      userMessage: "Incorrect PIN. Please try again with the correct PIN.",
      canRetry: true,
      suggestedAction: "Enter correct PIN",
    },

    // Limits and Restrictions
    61: {
      userMessage:
        "Transaction amount exceeds your card limit. Please contact your bank or try a smaller amount.",
      canRetry: true,
      suggestedAction: "Contact bank or reduce amount",
    },
    62: {
      userMessage:
        "Your card is restricted. Please contact your bank or try a different card.",
      canRetry: true,
      suggestedAction: "Contact bank or use different card",
    },
    65: {
      userMessage:
        "Daily activity limit exceeded. Please contact your bank or try again tomorrow.",
      canRetry: false,
      suggestedAction: "Try again later or contact bank",
    },

    // Technical Issues
    91: {
      userMessage:
        "Bank system temporarily unavailable. Please try again in a few minutes.",
      canRetry: true,
      suggestedAction: "Try again in a few minutes",
    },
    96: {
      userMessage:
        "System error occurred. Please try again or contact support if the problem persists.",
      canRetry: true,
      suggestedAction: "Retry or contact support",
    },

    // Security Issues
    82: {
      userMessage:
        "Security code validation failed. Please check your CVV and try again.",
      canRetry: true,
      suggestedAction: "Check CVV/CVC code",
    },
    84: {
      userMessage:
        "Invalid security code. Please check your CVV and try again.",
      canRetry: true,
      suggestedAction: "Verify CVV/CVC code",
    },

    // Card Issues
    57: {
      userMessage:
        "This transaction is not permitted for your card type. Please try a different card.",
      canRetry: true,
      suggestedAction: "Use different card",
    },
    58: {
      userMessage:
        "Transaction not permitted by your bank. Please contact your bank or try a different card.",
      canRetry: true,
      suggestedAction: "Contact bank or use different card",
    },
    78: {
      userMessage: "Your card is blocked. Please contact your bank.",
      canRetry: false,
      suggestedAction: "Contact your bank immediately",
    },
  };

  const defaultDecline = {
    userMessage: `Payment declined (Code: ${responseCode}). Please contact your bank or try a different card.`,
    canRetry: true,
    suggestedAction: "Contact bank or try different card",
  };

  return declineReasons[responseCode] || defaultDecline;
}
