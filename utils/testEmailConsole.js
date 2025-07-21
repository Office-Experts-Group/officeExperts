// utils/testEmailConsole.js - CONSOLE EMAIL TESTING SCRIPT
import {
  sendPaymentConfirmationEmail,
  sendInternalPaymentNotification,
  generatePaymentConfirmationEmail,
} from "./emailService.js";

/**
 * Test email functionality from console
 * Usage: node utils/testEmailConsole.js
 */

// Test data templates
const EMAIL_TEST_DATA = {
  basic: {
    invoiceNumber: "INV-2024-001",
    customerName: "Sarah Johnson",
    customerEmail: "your-email@example.com", // 👈 CHANGE THIS TO YOUR EMAIL
    totalAmount: 25000, // $250.00 in cents
    baseAmount: 23500, // $235.00 in cents
    surchargeAmount: 1500, // $15.00 in cents (Visa surcharge)
    cardType: "VISA",
    authCode: "AUTH789456",
    paymentDate: Date.now().toString(),
    transactionId: "TXN-202401-123",
  },

  amex: {
    invoiceNumber: "INV-2024-002",
    customerName: "Michael Chen",
    customerEmail: "your-email@example.com", // 👈 CHANGE THIS TO YOUR EMAIL
    totalAmount: 50000, // $500.00 in cents
    baseAmount: 48825, // $488.25 in cents
    surchargeAmount: 1175, // $11.75 in cents (Amex surcharge)
    cardType: "AMEX",
    authCode: "AMEX123789",
    paymentDate: Date.now().toString(),
    transactionId: "TXN-202401-456",
  },

  noSurcharge: {
    invoiceNumber: "INV-2024-003",
    customerName: "Emma Wilson",
    customerEmail: "your-email@example.com", // 👈 CHANGE THIS TO YOUR EMAIL
    totalAmount: 15000, // $150.00 in cents
    baseAmount: 15000, // $150.00 in cents (no surcharge)
    surchargeAmount: 0,
    cardType: "MASTERCARD",
    authCode: "MC456123",
    paymentDate: Date.now().toString(),
    transactionId: "TXN-202401-789",
  },
};

/**
 * Test customer confirmation email
 */
export async function testCustomerEmail(testType = "basic") {
  console.log(`🧪 Testing customer confirmation email (${testType})...`);

  try {
    const testData = EMAIL_TEST_DATA[testType];
    if (!testData) {
      throw new Error(
        `Test type '${testType}' not found. Available: ${Object.keys(
          EMAIL_TEST_DATA
        ).join(", ")}`
      );
    }

    console.log("📧 Test data:", testData);

    const result = await sendPaymentConfirmationEmail(testData);

    if (result.success) {
      console.log("✅ Customer email sent successfully!");
      console.log("📬 Message ID:", result.messageId);
      console.log(`📨 Sent to: ${testData.customerEmail}`);
    } else {
      console.log("❌ Customer email failed:", result.error);
    }

    return result;
  } catch (error) {
    console.error("💥 Test failed:", error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Test internal notification email
 */
export async function testInternalEmail(testType = "basic") {
  console.log(`🧪 Testing internal notification email (${testType})...`);

  try {
    const testData = EMAIL_TEST_DATA[testType];
    if (!testData) {
      throw new Error(
        `Test type '${testType}' not found. Available: ${Object.keys(
          EMAIL_TEST_DATA
        ).join(", ")}`
      );
    }

    const result = await sendInternalPaymentNotification(testData);

    if (result.success) {
      console.log("✅ Internal email sent successfully!");
      console.log("📨 Sent to: consult@officeexperts.com.au");
    } else {
      console.log("❌ Internal email failed:", result.error);
    }

    return result;
  } catch (error) {
    console.error("💥 Test failed:", error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Test both emails
 */
export async function testBothEmails(testType = "basic") {
  console.log(`🧪 Testing both emails (${testType})...`);

  const customerResult = await testCustomerEmail(testType);
  const internalResult = await testInternalEmail(testType);

  console.log("\n📊 SUMMARY:");
  console.log(`Customer email: ${customerResult.success ? "✅" : "❌"}`);
  console.log(`Internal email: ${internalResult.success ? "✅" : "❌"}`);

  return {
    customer: customerResult,
    internal: internalResult,
  };
}

/**
 * Generate email HTML without sending (for preview)
 */
export function previewEmail(testType = "basic") {
  console.log(`🔍 Generating email preview (${testType})...`);

  try {
    const testData = EMAIL_TEST_DATA[testType];
    if (!testData) {
      throw new Error(
        `Test type '${testType}' not found. Available: ${Object.keys(
          EMAIL_TEST_DATA
        ).join(", ")}`
      );
    }

    const emailContent = generatePaymentConfirmationEmail(testData);

    console.log("📧 Email subject:", emailContent.subject);
    console.log("📨 Email to:", emailContent.to);
    console.log("📝 HTML length:", emailContent.html.length, "characters");
    console.log("📄 Text length:", emailContent.text.length, "characters");

    // Save HTML to file for browser preview
    if (typeof require !== "undefined") {
      const fs = require("fs");
      const filename = `email-preview-${testType}-${Date.now()}.html`;
      fs.writeFileSync(filename, emailContent.html);
      console.log(`💾 HTML saved to: ${filename}`);
      console.log("🌐 Open this file in your browser to preview the email");
    }

    return emailContent;
  } catch (error) {
    console.error("💥 Preview failed:", error.message);
    return null;
  }
}

/**
 * Quick test function for different scenarios
 */
export async function quickTest() {
  console.log("🚀 Running quick email tests...\n");

  // Test basic payment
  await testCustomerEmail("basic");

  console.log("\n" + "=".repeat(50) + "\n");

  // Test Amex with higher surcharge
  await testCustomerEmail("amex");

  console.log("\n" + "=".repeat(50) + "\n");

  // Test payment without surcharge
  await testCustomerEmail("noSurcharge");
}

// If running directly with Node.js
if (typeof require !== "undefined" && require.main === module) {
  console.log("🧪 Email Testing Console");
  console.log("=".repeat(50));
  console.log("Available functions:");
  console.log("- testCustomerEmail(testType)");
  console.log("- testInternalEmail(testType)");
  console.log("- testBothEmails(testType)");
  console.log("- previewEmail(testType)");
  console.log("- quickTest()");
  console.log("\nTest types: basic, amex, noSurcharge");
  console.log("=".repeat(50));
  console.log("\n⚠️  Remember to set SENDGRID_API_KEY in your environment");
  console.log("⚠️  Update customerEmail in EMAIL_TEST_DATA to your email\n");

  // Run quick test if no arguments
  if (process.argv.length === 2) {
    quickTest().catch(console.error);
  }
}
