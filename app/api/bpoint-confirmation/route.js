// app/api/bpoint-confirmation/route.js
import sgMail from "@sendgrid/mail";
import { getEmailSignature } from "../../../utils/emailSignature";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      amount,
      baseAmount,
      surchargeAmount,
      customerName,
      customerEmail,
      invoiceNumber,
      transactionId,
      authCode,
      cardType,
      paymentDate,
      currency = "AUD",
    } = body;

    // Validate required fields
    if (!amount || !customerName || !invoiceNumber) {
      return Response.json(
        { error: "Missing required payment details" },
        { status: 400 }
      );
    }

    // Format current time in AEST
    const timeFormatter = new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Sydney",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const currentTimeAEST = timeFormatter.format(
      new Date(paymentDate || Date.now())
    );

    // Format amounts for display
    const formatCurrency = (amountInCents) => {
      return `$${(amountInCents / 100).toFixed(2)} ${currency}`;
    };

    const totalAmount = formatCurrency(amount);
    const baseAmountFormatted = formatCurrency(baseAmount || amount);
    const surchargeFormatted = surchargeAmount
      ? formatCurrency(surchargeAmount)
      : null;

    // Get the email signature
    const { htmlSignature, textSignature } = getEmailSignature();

    // Create internal notification email for accounts team
    const internalTextMessage = `
PAYMENT CONFIRMATION - Invoice ${invoiceNumber}

Payment Details:
- Amount: ${totalAmount}
${surchargeAmount ? `- Base Amount: ${baseAmountFormatted}` : ""}
${surchargeAmount ? `- Card Surcharge: ${surchargeFormatted}` : ""}
- Invoice Number: ${invoiceNumber}
- Customer: ${customerName}
- Customer Email: ${customerEmail || "Not provided"}
- Transaction ID: ${transactionId || "Not provided"}
- Authorization Code: ${authCode || "Not provided"}
- Card Type: ${cardType || "Not specified"}
- Payment Date: ${currentTimeAEST} AEST

This payment was processed through Bpoint gateway.
    `;

    const internalHtmlMessage = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2c5aa0; border-bottom: 2px solid #2c5aa0; padding-bottom: 10px;">
    🎉 Payment Confirmation - Invoice ${invoiceNumber}
  </h2>
  
  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #28a745; margin-top: 0;">✅ Payment Successfully Processed</h3>
    
    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Total Amount:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-size: 18px; color: #28a745; font-weight: bold;">${totalAmount}</td>
      </tr>
      ${
        surchargeAmount
          ? `
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Base Amount:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${baseAmountFormatted}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Card Surcharge:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${surchargeFormatted}</td>
      </tr>
      `
          : ""
      }
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Invoice Number:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${invoiceNumber}</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Customer:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${customerName}</td>
      </tr>
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Customer Email:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${
          customerEmail || "Not provided"
        }</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Transaction ID:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${
          transactionId || "Not provided"
        }</td>
      </tr>
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Authorization Code:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${
          authCode || "Not provided"
        }</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Card Type:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${
          cardType || "Not specified"
        }</td>
      </tr>
      <tr style="background-color: #e9ecef;">
        <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Payment Date:</td>
        <td style="padding: 12px; border: 1px solid #dee2e6;">${currentTimeAEST} AEST</td>
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

    // Create customer confirmation email (optional - only if customerEmail provided)
    let customerTextMessage, customerHtmlMessage;

    if (customerEmail) {
      customerTextMessage = `
Hi ${customerName},

Thank you for your payment! We have successfully processed your payment for invoice ${invoiceNumber}.

Payment Details:
- Amount: ${totalAmount}
- Invoice Number: ${invoiceNumber}
- Payment Date: ${currentTimeAEST} AEST
- Transaction ID: ${transactionId || "Processing"}

Your payment has been received and your invoice has been marked as paid. You will receive a receipt via email shortly.

If you have any questions about this payment, please don't hesitate to contact us.

${textSignature}
      `;

      customerHtmlMessage = `
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
        <td style="padding: 8px 0; text-align: right;">${currentTimeAEST} AEST</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Transaction ID:</td>
        <td style="padding: 8px 0; text-align: right;">${
          transactionId || "Processing"
        }</td>
      </tr>
    </table>
  </div>
  
  <p>Your payment has been received and your invoice has been marked as paid. You will receive a receipt via email shortly.</p>
  
  <p>If you have any questions about this payment, please don't hesitate to contact us.</p>
  
  ${htmlSignature}
</div>
      `;
    }

    // Track email sending results
    const emailResults = {
      internalEmail: false,
      customerEmail: false,
      internalEmailId: null,
      customerEmailId: null,
      errors: [],
    };

    // Send internal notification to accounts team
    try {
      const internalResult = await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: "accounts@officeexperts.com.au",
        cc: "consult@officeexperts.com.au", // Copy main contact email for visibility
        subject: `💰 Payment Received - Invoice ${invoiceNumber} - ${totalAmount}`,
        text: internalTextMessage,
        html: internalHtmlMessage,
      });

      emailResults.internalEmail = true;
      emailResults.internalEmailId =
        internalResult[0]?.headers?.["x-message-id"] || "sent";
    } catch (emailError) {
      console.error("Failed to send internal email:", emailError);
      emailResults.errors.push(`Internal email failed: ${emailError.message}`);
    }

    // Send customer confirmation email (if email provided)
    if (customerEmail && customerTextMessage && customerHtmlMessage) {
      try {
        const customerResult = await sgMail.send({
          from: "consult@officeexperts.com.au",
          to: customerEmail,
          subject: `Payment Confirmation - Invoice ${invoiceNumber}`,
          text: customerTextMessage,
          html: customerHtmlMessage,
        });

        emailResults.customerEmail = true;
        emailResults.customerEmailId =
          customerResult[0]?.headers?.["x-message-id"] || "sent";
      } catch (emailError) {
        console.error("Failed to send customer email:", emailError);
        emailResults.errors.push(
          `Customer email failed: ${emailError.message}`
        );
      }
    }

    // Return success response with email status
    return Response.json(
      {
        message: "Payment confirmation processed",
        emailStatus: {
          internalEmail: emailResults.internalEmail,
          customerEmail: emailResults.customerEmail,
          internalEmailId: emailResults.internalEmailId,
          customerEmailId: emailResults.customerEmailId,
          totalEmails:
            (emailResults.internalEmail ? 1 : 0) +
            (emailResults.customerEmail ? 1 : 0),
          errors: emailResults.errors,
        },
        paymentDetails: {
          amount: totalAmount,
          invoiceNumber,
          customerName,
          processedAt: currentTimeAEST,
        },
      },
      { status: 200 }
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
      { status: 500 }
    );
  }
}
