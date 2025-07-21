// utils/emailService.js
import { getEmailSignature } from "./emailSignature.js";

/**
 * Generate professional payment confirmation email
 */
export function generatePaymentConfirmationEmail({
  invoiceNumber,
  customerName,
  customerEmail,
  totalAmount,
  baseAmount,
  surchargeAmount,
  cardType,
  authCode,
  paymentDate,
  transactionId,
}) {
  const { htmlSignature, textSignature } = getEmailSignature();

  // Format amounts
  const formattedTotal = `$${(totalAmount / 100).toFixed(2)}`;
  const formattedBase = baseAmount
    ? `$${(baseAmount / 100).toFixed(2)}`
    : formattedTotal;
  const formattedSurcharge =
    surchargeAmount && surchargeAmount > 0
      ? `$${(surchargeAmount / 100).toFixed(2)}`
      : null;

  // Format date
  const formattedDate = new Date(parseInt(paymentDate)).toLocaleString(
    "en-AU",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Australia/Brisbane",
    }
  );

  // Format card type
  const cardDisplayName = getCardDisplayName(cardType);

  const htmlEmail = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Confirmation - Invoice ${invoiceNumber}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .email-container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #046999 0%, #0586c7 100%);
            color: white;
            padding: 30px 40px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 300;
        }
        .header .subtitle {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px;
        }
        .success-badge {
            display: inline-flex;
            align-items: center;
            background-color: #d4edda;
            color: #155724;
            padding: 12px 20px;
            border-radius: 25px;
            border: 1px solid #c3e6cb;
            margin-bottom: 30px;
            font-weight: 500;
        }
        .success-icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            fill: #28a745;
        }
        .invoice-details {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 30px;
            margin: 30px 0;
            border-left: 4px solid #046999;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #e9ecef;
        }
        .detail-row:last-child {
            border-bottom: none;
        }
        .detail-label {
            font-weight: 600;
            color: #495057;
            flex: 1;
        }
        .detail-value {
            font-weight: 500;
            color: #212529;
            text-align: right;
            flex: 1;
        }
        .total-row {
            background-color: #e3f2fd;
            margin: 0 -30px;
            padding: 20px 30px;
            border-radius: 0 0 8px 8px;
            font-size: 18px;
            font-weight: bold;
            color: #046999;
        }
        .important-info {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
        }
        .important-info h3 {
            margin: 0 0 15px 0;
            color: #856404;
            font-size: 16px;
        }
        .important-info ul {
            margin: 0;
            padding-left: 20px;
        }
        .important-info li {
            margin-bottom: 8px;
            color: #856404;
        }
        .contact-section {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
        }
        .contact-section h3 {
            margin: 0 0 15px 0;
            color: #046999;
        }
        .contact-details {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-top: 15px;
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .contact-item a {
            color: #046999;
            text-decoration: none;
            font-weight: 500;
        }
        .contact-item a:hover {
            text-decoration: underline;
        }
        .signature-section {
            border-top: 1px solid #e9ecef;
            padding-top: 30px;
            margin-top: 40px;
        }
        .footer {
            background-color: #f8f9fa;
            padding: 30px 40px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
        }
        .security-badges {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        .security-badge {
            background-color: #e8f5e8;
            color: #2d5a2d;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            border: 1px solid #c3e6cb;
        }
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            .header, .content, .footer {
                padding: 20px;
            }
            .contact-details {
                flex-direction: column;
                gap: 15px;
            }
            .detail-row {
                flex-direction: column;
                align-items: flex-start;
                gap: 5px;
            }
            .detail-value {
                text-align: left;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">        
        <div class="content">
            
            <p>Dear ${customerName},</p>
            
            <p>We are pleased to confirm that your payment has been successfully processed. Below are the details of your transaction:</p>
            
            <div class="invoice-details">
                <div class="detail-row">
                    <span class="detail-label">Invoice Number:</span>
                    <span class="detail-value"><strong>${invoiceNumber}</strong></span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Customer Name:</span>
                    <span class="detail-value">${customerName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Payment Date:</span>
                    <span class="detail-value">${formattedDate}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Payment Method:</span>
                    <span class="detail-value">${cardDisplayName}</span>
                </div>
                ${
                  authCode
                    ? `
                <div class="detail-row">
                    <span class="detail-label">Authorization Code:</span>
                    <span class="detail-value">${authCode}</span>
                </div>
                `
                    : ""
                }
                ${
                  transactionId
                    ? `
                <div class="detail-row">
                    <span class="detail-label">Transaction ID:</span>
                    <span class="detail-value">${transactionId}</span>
                </div>
                `
                    : ""
                }
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                    <div class="detail-row">
                        <span class="detail-label">Invoice Amount:</span>
                        <span class="detail-value">${formattedBase}</span>
                    </div>
                    ${
                      formattedSurcharge
                        ? `
                    <div class="detail-row">
                        <span class="detail-label">Credit Card Surcharge:</span>
                        <span class="detail-value">${formattedSurcharge}</span>
                    </div>
                    `
                        : ""
                    }
                </div>
                
                <div class="total-row detail-row">
                    <span class="detail-label">Total Amount Paid:</span>
                    <span class="detail-value">${formattedTotal}</span>
                </div>
            </div>
            
            <div class="important-info">
                <h3>📋 Important Information</h3>
                <ul>
                    <li>Please retain this email as your payment receipt</li>
                    <li>Your payment will appear on your statement as "Office Experts Group"</li>
                    <li>Services will commence as per our agreed schedule</li>
                    ${
                      formattedSurcharge
                        ? "<li>The surcharge applied helps cover credit card processing fees</li>"
                        : ""
                    }
                    <li>No further action is required from you at this time</li>
                </ul>
            </div>
            
            <p>Thank you for choosing Office Experts Group for your Microsoft Office consulting needs. We look forward to delivering exceptional results for your project.</p>
            
            <div class="contact-section">
                <h3>📞 Need Assistance?</h3>
                <p>If you have any questions about your payment or project, please don't hesitate to contact us:</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <span>📧</span>
                        <a href="mailto:consult@officeexperts.com.au">consult@officeexperts.com.au</a>
                    </div>
                    <div class="contact-item">
                        <span>📞</span>
                        <a href="tel:1300102810">1300 10 28 10</a>
                    </div>
                    <div class="contact-item">
                        <span>🌐</span>
                        <a href="https://www.officeexperts.com.au">www.officeexperts.com.au</a>
                    </div>
                </div>
            </div>
            
            <div class="signature-section">
                ${htmlSignature}
            </div>
        </div>
        
        <div class="footer">
            <div class="security-badges">
                <span class="security-badge">🔒 SSL Encrypted</span>
                <span class="security-badge">🏛️ Commonwealth Bank Secured</span>
                <span class="security-badge">✅ PCI Compliant</span>
            </div>
            <p style="margin-top: 20px;">
                Office Experts Group Pty Ltd<br>
                Your Microsoft Office Design, Development and Consulting Experts<br>
                This email was sent to ${customerEmail}
            </p>
        </div>
    </div>
</body>
</html>
`;

  const textEmail = `
PAYMENT CONFIRMATION - INVOICE ${invoiceNumber}

Dear ${customerName},

We are pleased to confirm that your payment has been successfully processed.

TRANSACTION DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoice Number:      ${invoiceNumber}
Customer Name:       ${customerName}
Payment Date:        ${formattedDate}
Payment Method:      ${cardDisplayName}
${authCode ? `Authorization Code:   ${authCode}` : ""}
${transactionId ? `Transaction ID:      ${transactionId}` : ""}

PAYMENT BREAKDOWN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Invoice Amount:      ${formattedBase}
${formattedSurcharge ? `Credit Card Surcharge: ${formattedSurcharge}` : ""}
Total Amount Paid:   ${formattedTotal}

IMPORTANT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Please retain this email as your payment receipt
• Your payment will appear on your statement as "Office Experts Group"
• Services will commence as per our agreed schedule
${
  formattedSurcharge
    ? "• The surcharge applied helps cover credit card processing fees"
    : ""
}
• No further action is required from you at this time

Thank you for choosing Office Experts Group for your Microsoft Office consulting needs. We look forward to delivering exceptional results for your project.

NEED ASSISTANCE?
If you have any questions about your payment or project:
📧 Email: consult@officeexperts.com.au
📞 Phone: 1300 10 28 10
🌐 Web: www.officeexperts.com.au

${textSignature}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Office Experts Group Pty Ltd
Your Microsoft Office Design, Development and Consulting Experts
This email was sent to ${customerEmail}
`;

  return {
    subject: `Payment Confirmation - Invoice ${invoiceNumber} - Office Experts Group`,
    html: htmlEmail,
    text: textEmail,
    to: customerEmail,
    from: "consult@officeexperts.com.au",
    replyTo: "consult@officeexperts.com.au",
  };
}

/**
 * Get card display name for email
 */
function getCardDisplayName(cardType) {
  const displayNames = {
    VISA: "Visa",
    MASTERCARD: "Mastercard",
    MASTERCARD_2_SERIES: "Mastercard",
    AMEX: "American Express",
    AMERICAN_EXPRESS: "American Express",
    DINERS: "Diners Club",
    JCB: "JCB",
    UNKNOWN: "Credit Card",
  };
  return displayNames[cardType] || "Credit Card";
}

/**
 * Send payment confirmation email using SendGrid
 */
export async function sendPaymentConfirmationEmail(paymentDetails) {
  try {
    const emailContent = generatePaymentConfirmationEmail(paymentDetails);

    // Import SendGrid dynamically to avoid issues if not installed
    const sgMail = await import("@sendgrid/mail").then((m) => m.default);

    // Set API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Email configuration
    const msg = {
      to: emailContent.to,
      from: {
        email: emailContent.from,
        name: "Office Experts Group",
      },
      replyTo: {
        email: emailContent.replyTo,
        name: "Office Experts Group",
      },
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
      // Add tracking
      trackingSettings: {
        clickTracking: {
          enable: false,
        },
        openTracking: {
          enable: true,
          substitutionTag: "%open_tracking_pixel%",
        },
      },
      // Add categories for analytics
      categories: ["payment-confirmation", "bpoint-transaction"],
    };

    // Send email
    const response = await sgMail.send(msg);

    console.log("Payment confirmation email sent successfully:", {
      invoiceNumber: paymentDetails.invoiceNumber,
      customerEmail: paymentDetails.customerEmail,
      messageId: response[0].headers["x-message-id"],
    });

    return {
      success: true,
      messageId: response[0].headers["x-message-id"],
    };
  } catch (error) {
    console.error("Failed to send payment confirmation email:", error);

    return {
      success: false,
      error: error.message,
      code: error.code,
    };
  }
}

/**
 * Send email notification to internal team
 */
export async function sendInternalPaymentNotification(paymentDetails) {
  try {
    const { invoiceNumber, customerName, totalAmount, customerEmail } =
      paymentDetails;
    const formattedAmount = `$${(totalAmount / 100).toFixed(2)}`;

    const sgMail = await import("@sendgrid/mail").then((m) => m.default);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: "consult@officeexperts.com.au",
      from: {
        email: "system@officeexperts.com.au",
        name: "Office Experts Payment System",
      },
      subject: `Payment Received - ${invoiceNumber} - ${formattedAmount}`,
      text: `
Payment notification:

Invoice: ${invoiceNumber}
Customer: ${customerName} (${customerEmail})
Amount: ${formattedAmount}
Time: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })}

Please update the invoice status in your accounting system.
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px;">
    <h2 style="color: #046999;">Payment Received</h2>
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 8px; font-weight: bold;">Invoice:</td>
            <td style="padding: 8px;">${invoiceNumber}</td>
        </tr>
        <tr>
            <td style="padding: 8px; font-weight: bold;">Customer:</td>
            <td style="padding: 8px;">${customerName}</td>
        </tr>
        <tr>
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${customerEmail}</td>
        </tr>
        <tr>
            <td style="padding: 8px; font-weight: bold;">Amount:</td>
            <td style="padding: 8px; font-size: 18px; font-weight: bold; color: #046999;">${formattedAmount}</td>
        </tr>
        <tr>
            <td style="padding: 8px; font-weight: bold;">Time:</td>
            <td style="padding: 8px;">${new Date().toLocaleString("en-AU", {
              timeZone: "Australia/Brisbane",
            })}</td>
        </tr>
    </table>
    <p style="margin-top: 20px;">Please update the invoice status in your accounting system.</p>
</div>
      `,
      categories: ["internal-notification", "payment-received"],
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (error) {
    console.error("Failed to send internal payment notification:", error);
    return { success: false, error: error.message };
  }
}
