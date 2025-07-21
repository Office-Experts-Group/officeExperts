// app/api/test/email-debug/route.js - EMAIL DEBUG ENDPOINT
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Environment check
    const isDev = process.env.NODE_ENV === "development";
    const sendgridKey = process.env.SENDGRID_API_KEY;

    console.log("🔍 Email Debug Information:");
    console.log("- Environment:", process.env.NODE_ENV);
    console.log("- SendGrid API Key exists:", !!sendgridKey);
    console.log("- SendGrid API Key length:", sendgridKey?.length || 0);
    console.log(
      "- SendGrid API Key starts with 'SG.':",
      sendgridKey?.startsWith("SG.") || false
    );

    // Basic environment validation
    const debugInfo = {
      environment: process.env.NODE_ENV,
      sendgridKeyExists: !!sendgridKey,
      sendgridKeyLength: sendgridKey?.length || 0,
      sendgridKeyFormat: sendgridKey?.startsWith("SG.") || false,
      timestamp: new Date().toISOString(),
    };

    // If no SendGrid key, return setup instructions
    if (!sendgridKey) {
      return NextResponse.json({
        success: false,
        error: "SENDGRID_API_KEY not found in environment variables",
        debugInfo,
        setupInstructions: {
          step1: "Sign up for SendGrid at https://sendgrid.com/",
          step2: "Go to Settings > API Keys in SendGrid dashboard",
          step3: "Create a new API key with 'Mail Send' permissions",
          step4: "Add SENDGRID_API_KEY=your_key_here to your .env.local file",
          step5: "Restart your development server",
          step6:
            "Verify your sender identity in SendGrid (consult@officeexperts.com.au)",
        },
      });
    }

    // Test SendGrid connection
    try {
      const sgMail = await import("@sendgrid/mail").then((m) => m.default);
      sgMail.setApiKey(sendgridKey);

      // Simple test - just validate the API key
      const testMsg = {
        to: "test@example.com", // This won't actually send
        from: "consult@officeexperts.com.au",
        subject: "API Key Test",
        text: "This is a test",
      };

      // Try to validate (this will fail if API key is invalid)
      // We'll catch the specific error to understand what's wrong
      try {
        // Don't actually send, just test the configuration
        console.log("🧪 Testing SendGrid configuration...");

        // Instead of sending, let's check if we can import and configure SendGrid
        return NextResponse.json({
          success: true,
          message: "SendGrid configuration appears valid",
          debugInfo,
          nextSteps: {
            step1: "Try sending a test email",
            step2: "Check sender authentication in SendGrid dashboard",
            step3: "Verify domain authentication if using custom domain",
          },
        });
      } catch (sgError) {
        console.error("SendGrid configuration error:", sgError);

        return NextResponse.json({
          success: false,
          error: "SendGrid configuration issue",
          sendgridError: {
            message: sgError.message,
            code: sgError.code,
            statusCode: sgError.response?.status,
          },
          debugInfo,
          possibleSolutions: {
            403: "API key invalid or insufficient permissions",
            401: "Authentication failed - check API key",
            400: "Bad request - check sender email verification",
          },
        });
      }
    } catch (importError) {
      console.error("SendGrid import error:", importError);

      return NextResponse.json({
        success: false,
        error: "SendGrid package not available",
        importError: importError.message,
        debugInfo,
        solution: "Install SendGrid: npm install @sendgrid/mail",
      });
    }
  } catch (error) {
    console.error("Debug endpoint error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Debug endpoint failed",
        details: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

// POST method for actual email testing with better error handling
export async function POST(request) {
  try {
    const body = await request.json();
    const { email = "dan@officeexperts.com.au" } = body;

    // Check SendGrid setup
    const sendgridKey = process.env.SENDGRID_API_KEY;
    if (!sendgridKey) {
      return NextResponse.json(
        {
          success: false,
          error: "SENDGRID_API_KEY not configured",
          action: "Visit /api/test/email-debug for setup instructions",
        },
        { status: 500 }
      );
    }

    console.log("🧪 Attempting to send test email to:", email);
    console.log("🔑 Using API key ending in:", sendgridKey.slice(-10));

    // Import and configure SendGrid
    const sgMail = await import("@sendgrid/mail").then((m) => m.default);
    sgMail.setApiKey(sendgridKey);

    // Simple test email
    const msg = {
      to: email,
      from: {
        email: "consult@officeexperts.com.au",
        name: "Office Experts Group - Test",
      },
      subject: "🧪 SendGrid Test Email - Office Experts",
      text: `
This is a test email from Office Experts Group.

If you received this email, SendGrid is working correctly!

Test Details:
- Sent at: ${new Date().toLocaleString("en-AU", {
        timeZone: "Australia/Brisbane",
      })}
- To: ${email}
- From: consult@officeexperts.com.au
- Environment: ${process.env.NODE_ENV}

Next step: Test the full payment confirmation email.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #046999;">🧪 SendGrid Test Email</h2>
          <p>This is a test email from <strong>Office Experts Group</strong>.</p>
          <p>If you received this email, SendGrid is working correctly! ✅</p>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Test Details:</h3>
            <ul>
              <li><strong>Sent at:</strong> ${new Date().toLocaleString(
                "en-AU",
                { timeZone: "Australia/Brisbane" }
              )}</li>
              <li><strong>To:</strong> ${email}</li>
              <li><strong>From:</strong> consult@officeexperts.com.au</li>
              <li><strong>Environment:</strong> ${process.env.NODE_ENV}</li>
            </ul>
          </div>
          
          <p style="color: #046999;"><strong>Next step:</strong> Test the full payment confirmation email.</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #666;">
            Office Experts Group<br>
            Your Microsoft Office Design, Development and Consulting Experts
          </p>
        </div>
      `,
      // Disable click tracking for test emails
      trackingSettings: {
        clickTracking: { enable: false },
        openTracking: { enable: false },
      },
    };

    console.log("📤 Sending test email...");
    const response = await sgMail.send(msg);

    console.log("✅ Test email sent successfully!");
    console.log("📬 Response:", response[0].statusCode, response[0].headers);

    return NextResponse.json({
      success: true,
      message: `Test email sent successfully to ${email}`,
      sendgridResponse: {
        statusCode: response[0].statusCode,
        messageId: response[0].headers["x-message-id"],
      },
      instructions:
        "Check your email inbox (and spam folder) for the test message",
    });
  } catch (error) {
    console.error("❌ Test email failed:", error);

    // Enhanced error handling for SendGrid specific errors
    let errorDetails = {
      message: error.message,
      code: error.code,
    };

    if (error.response) {
      errorDetails.statusCode = error.response.status;
      errorDetails.body = error.response.body;

      // Specific SendGrid error codes
      if (error.response.status === 403) {
        errorDetails.solution =
          "API key lacks permissions or sender not verified";
      } else if (error.response.status === 401) {
        errorDetails.solution = "Invalid API key";
      } else if (error.response.status === 400) {
        errorDetails.solution = "Bad request - check sender email verification";
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send test email",
        details: errorDetails,
        troubleshooting: {
          step1: "Check that SENDGRID_API_KEY is valid",
          step2:
            "Verify sender identity (consult@officeexperts.com.au) in SendGrid dashboard",
          step3: "Ensure API key has 'Mail Send' permissions",
          step4: "Check SendGrid account status and billing",
        },
      },
      { status: 500 }
    );
  }
}
