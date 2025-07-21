// app/api/test/email/route.js - TEST EMAIL ENDPOINT
import { NextResponse } from "next/server";
import {
  sendPaymentConfirmationEmail,
  sendInternalPaymentNotification,
} from "../../../../utils/emailService";

export async function POST(request) {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const body = await request.json();
    const { testKey, customSender, ...emailData } = body;

    if (!isDev && testKey !== process.env.EMAIL_TEST_KEY) {
      return NextResponse.json(
        {
          error:
            "Unauthorized. This endpoint is only available in development.",
        },
        { status: 403 }
      );
    }

    // Default test data
    const defaultTestData = {
      invoiceNumber: "INV-TEST-001",
      customerName: "John Smith",
      customerEmail: "dan@officeexperts.com.au",
      totalAmount: 15000,
      baseAmount: 14500,
      surchargeAmount: 500,
      cardType: "VISA",
      authCode: "TEST123456",
      paymentDate: Date.now().toString(),
      transactionId: "TXN-TEST-789",
    };

    const testEmailData = { ...defaultTestData, ...emailData };

    console.log(
      "🧪 Sending test emails with custom sender:",
      customSender || "accounts@officeexperts.com.au"
    );

    // Use custom sender if provided
    const fromEmail = customSender || "accounts@officeexperts.com.au";

    // Import SendGrid
    const sgMail = await import("@sendgrid/mail").then((m) => m.default);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Generate email content using your existing function
    const { generatePaymentConfirmationEmail } = await import(
      "../../../../utils/emailService"
    );
    const emailContent = generatePaymentConfirmationEmail(testEmailData);

    // Send with custom sender
    const msg = {
      to: testEmailData.customerEmail,
      from: {
        email: fromEmail,
        name: "Office Experts Group",
      },
      subject: emailContent.subject + " [TEST]",
      html: emailContent.html,
      text: emailContent.text,
      trackingSettings: {
        clickTracking: { enable: false },
        openTracking: { enable: false },
      },
    };

    const customerEmailResult = await sgMail.send(msg);

    return NextResponse.json({
      success: true,
      results: {
        customerEmail: {
          success: true,
          messageId: customerEmailResult[0].headers["x-message-id"],
        },
      },
      testData: testEmailData,
      senderUsed: fromEmail,
    });
  } catch (error) {
    console.error("Test email error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        details: {
          code: error.code,
          statusCode: error.response?.status,
        },
      },
      { status: 500 }
    );
  }
}

// GET method for simple browser testing
export async function GET(request) {
  const isDev = process.env.NODE_ENV === "development";

  if (!isDev) {
    return NextResponse.json(
      { error: "This endpoint is only available in development." },
      { status: 403 }
    );
  }

  const url = new URL(request.url);
  const email = url.searchParams.get("email") || "test@example.com";

  // Simple test data for GET request
  const testData = {
    invoiceNumber: "INV-GET-TEST",
    customerName: "Test Customer",
    customerEmail: email,
    totalAmount: 10000, // $100.00
    baseAmount: 9500, // $95.00
    surchargeAmount: 500, // $5.00
    cardType: "MASTERCARD",
    authCode: "GET123",
    paymentDate: Date.now().toString(),
    transactionId: "GET-TXN-456",
  };

  try {
    const result = await sendPaymentConfirmationEmail(testData);

    return NextResponse.json({
      success: true,
      message: `Test email sent to ${email}`,
      result: result,
      testData: testData,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
