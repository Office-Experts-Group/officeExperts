// app/api/bpoint-confirmation/route.js
// Sends the internal (accounts) and customer payment confirmation emails.
//
// SURCHARGE REMOVAL: base amount / card surcharge lines have been removed
// from both emails. The amount shown is the amount paid.
//

// Sendgrid mail client (the only email package in the stack)
import sgMail from "@sendgrid/mail";
// Shared HTML and plain-text signature used on customer-facing emails
import { getEmailSignature } from "../../../utils/emailSignature";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Formats a cents value as e.g. "$123.45 AUD".
 */
function formatCurrency(amountInCents, currency) {
  return `$${(amountInCents / 100).toFixed(2)} ${currency}`;
}

/**
 * Formats a timestamp in Sydney time (AEST/AEDT) for the emails.
 */
function formatSydneyTime(timestamp) {
  return new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date(timestamp || Date.now()));
}

/**
 * Builds the internal notification for the accounts team.
 */
function buildInternalEmail(details) {
  const {
    totalAmount,
    invoiceNumber,
    customerName,
    customerEmail,
    transactionId,
    authCode,
    cardType,
    paymentTime,
  } = details;

  const text = `
PAYMENT CONFIRMATION - Invoice ${invoiceNumber}

Payment Details:
- Amount: ${totalAmount}
- Invoice Number: ${invoiceNumber}
- Customer: ${customerName}
- Customer Email: ${customerEmail || "Not provided"}
- Transaction ID: ${transactionId || "Not provided"}
- Authorisation Code: ${authCode || "Not provided"}
- Card Type: ${cardType || "Not specified"}
- Payment Date: ${paymentTime} AEST

This payment was processed through Bpoint gateway.
  `;

  const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2c5aa0; border-bottom: 2px solid #2c5aa0; padding-bottom: 10px;">
    🎉 Payment Confirmation - Invoice ${invoiceNumber}
  </h2>

  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #28a745; margin-top: 0;">✅ Payment Successfully Processed</h3>

    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Amount:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-size: 18px; color: #28a745; font-weight: bold;">${totalAmount}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Invoice Number:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${invoiceNumber}</td>
      </tr>
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Customer:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${customerName}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Customer Email:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${customerEmail || "Not provided"}</td>
      </tr>
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Transaction ID:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${transactionId || "Not provided"}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Authorisation Code:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${authCode || "Not provided"}</td>
      </tr>
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Card Type:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${cardType || "Not specified"}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Payment Date:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${paymentTime} AEST</td>
      </tr>
    </table>
  </div>

  <div style="background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 4px; padding: 15px; margin: 20px 0;">
    <strong>💳 Payment Gateway:</strong> Bpoint (Commonwealth Bank)<br>
    <strong>🌐 Website:</strong> https://www.officeexperts.com.au
  </div>

  <p style="color: #6c757d; font-size: 14px; margin-top: 30px;">
    This is an automated notification from the Office Experts payment system.
  </p>
</div>
  `;

  return { text, html };
}

/**
 * Builds the customer confirmation email.
 */
function buildCustomerEmail(details, signature) {
  const {
    totalAmount,
    invoiceNumber,
    customerName,
    transactionId,
    paymentTime,
  } = details;

  const text = `
Hi ${customerName},

Thank you for your payment! We have successfully processed your payment for invoice ${invoiceNumber}.

Payment Details:
- Amount: ${totalAmount}
- Invoice Number: ${invoiceNumber}
- Payment Date: ${paymentTime} AEST
- Transaction ID: ${transactionId || "Processing"}

Your payment has been received and your invoice has been marked as paid. You will receive a receipt via email shortly.

If you have any questions about this payment, please don't hesitate to contact us.

${signature.textSignature}
  `;

  const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2c5aa0; border-bottom: 2px solid #2c5aa0; padding-bottom: 10px;">
    Payment Confirmation
  </h2>

  <p>Hi <strong>${customerName}</strong>,</p>

  <p>Thank you for your payment! We have successfully processed your payment for invoice <strong>${invoiceNumber}</strong>.</p>

  <div style="background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #155724; margin-top: 0;">✅ Payment Confirmed</h3>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Amount Paid:</td>
        <td style="padding: 8px 0; text-align: right; font-size: 18px; color: #155724; font-weight: bold;">${totalAmount}</td>
      </tr>
      <tr style="border-top: 1px solid #c3e6cb;">
        <td style="padding: 8px 0; font-weight: bold;">Invoice Number:</td>
        <td style="padding: 8px 0; text-align: right;">${invoiceNumber}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Payment Date:</td>
        <td style="padding: 8px 0; text-align: right;">${paymentTime} AEST</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Transaction ID:</td>
        <td style="padding: 8px 0; text-align: right;">${transactionId || "Processing"}</td>
      </tr>
    </table>
  </div>

  <p>Your payment has been received and your invoice has been marked as paid. You will receive a receipt via email shortly.</p>

  <p>If you have any questions about this payment, please don't hesitate to contact us.</p>

  ${signature.htmlSignature}
</div>
  `;

  return { text, html };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      amount,
      customerName,
      customerEmail,
      invoiceNumber,
      transactionId,
      authCode,
      cardType,
      paymentDate,
      currency = "AUD",
    } = body;

    if (!amount || !customerName || !invoiceNumber) {
      return Response.json(
        { error: "Missing required payment details" },
        { status: 400 },
      );
    }

    const details = {
      totalAmount: formatCurrency(amount, currency),
      invoiceNumber,
      customerName,
      customerEmail,
      transactionId,
      authCode,
      cardType,
      paymentTime: formatSydneyTime(paymentDate),
    };

    const emailResults = {
      internalEmail: false,
      customerEmail: false,
      internalEmailId: null,
      customerEmailId: null,
      errors: [],
    };

    // Internal notification to accounts (cc main contact for visibility)
    try {
      const internal = buildInternalEmail(details);
      const internalResult = await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: "accounts@officeexperts.com.au",
        cc: "consult@officeexperts.com.au",
        subject: `💰 Payment Received - Invoice ${invoiceNumber} - ${details.totalAmount}`,
        text: internal.text,
        html: internal.html,
      });

      emailResults.internalEmail = true;
      emailResults.internalEmailId =
        internalResult[0]?.headers?.["x-message-id"] || "sent";
    } catch (emailError) {
      console.error("Failed to send internal email:", emailError);
      emailResults.errors.push(`Internal email failed: ${emailError.message}`);
    }

    // Customer confirmation, only when an address was supplied
    if (customerEmail) {
      try {
        const customer = buildCustomerEmail(details, getEmailSignature());
        const customerResult = await sgMail.send({
          from: "consult@officeexperts.com.au",
          to: customerEmail,
          subject: `Payment Confirmation - Invoice ${invoiceNumber}`,
          text: customer.text,
          html: customer.html,
        });

        emailResults.customerEmail = true;
        emailResults.customerEmailId =
          customerResult[0]?.headers?.["x-message-id"] || "sent";
      } catch (emailError) {
        console.error("Failed to send customer email:", emailError);
        emailResults.errors.push(
          `Customer email failed: ${emailError.message}`,
        );
      }
    }

    return Response.json(
      {
        message: "Payment confirmation processed",
        emailStatus: {
          ...emailResults,
          totalEmails:
            (emailResults.internalEmail ? 1 : 0) +
            (emailResults.customerEmail ? 1 : 0),
        },
        paymentDetails: {
          amount: details.totalAmount,
          invoiceNumber,
          customerName,
          processedAt: details.paymentTime,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Payment confirmation error:", error);
    return Response.json(
      {
        error: "Failed to process payment confirmation",
        emailStatus: {
          internalEmail: false,
          customerEmail: false,
          errors: [`Server error: ${error.message}`],
        },
      },
      { status: 500 },
    );
  }
}
