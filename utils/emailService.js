// utils/emailService.js
// Payment emails sent by app/api/bpoint/create-authkey/route.js after an
// approved Bpoint transaction:
//   - sendPaymentConfirmationEmail: receipt to the customer
//   - sendInternalPaymentNotification: notice to the accounts team
//
// SURCHARGE REMOVAL: the invoice amount / surcharge breakdown and the
// surcharge note have been removed. Emails show a single "Amount Paid".

// Sendgrid mail client (already a project dependency)
import sgMail from "@sendgrid/mail";
// Shared HTML and plain-text email signature
import { getEmailSignature } from "./emailSignature.js";
// Card scheme code -> friendly name, e.g. "AMEX" -> "American Express"
import { getCardDisplayName } from "./cardTypeUtils.js";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SENDER_EMAIL = "consult@officeexperts.com.au";
const ACCOUNTS_EMAIL = "accounts@officeexperts.com.au";
const TIME_ZONE = "Australia/Brisbane";

/**
 * Converts cents to a "$0.00" string.
 */
function formatCents(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

/**
 * Formats a millisecond timestamp in Brisbane time,
 * e.g. "30 September 2026 at 10:51 am".
 */
function formatPaymentDate(timestamp) {
  return new Date(parseInt(timestamp) || Date.now()).toLocaleString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: TIME_ZONE,
  });
}

/**
 * Builds the customer receipt email (subject, HTML and plain text).
 */
export function generatePaymentConfirmationEmail({
  invoiceNumber,
  customerName,
  customerEmail,
  totalAmount,
  cardType,
  authCode,
  paymentDate,
  transactionId,
}) {
  const { htmlSignature, textSignature } = getEmailSignature();

  const formattedTotal = formatCents(totalAmount);
  const formattedDate = formatPaymentDate(paymentDate);
  const cardDisplayName = getCardDisplayName(cardType);

  // Optional rows only render when the value exists
  const authCodeRow = authCode
    ? `
                <div class="detail-row">
                    <span class="detail-label">Authorisation Code:</span>
                    <span class="detail-value">${authCode}</span>
                </div>`
    : "";

  const transactionRow = transactionId
    ? `
                <div class="detail-row">
                    <span class="detail-label">Transaction ID:</span>
                    <span class="detail-value">${transactionId}</span>
                </div>`
    : "";

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
        .content {
            padding: 40px;
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
            margin: 20px -30px 0;
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
            .content, .footer {
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
                </div>${authCodeRow}${transactionRow}

                <div class="total-row detail-row">
                    <span class="detail-label">Amount Paid:</span>
                    <span class="detail-value">${formattedTotal}</span>
                </div>
            </div>

            <div class="important-info">
                <h3>📋 Important Information</h3>
                <ul>
                    <li>Please retain this email as your payment receipt</li>
                    <li>Your payment will appear on your statement as "Office Experts Group"</li>
                    <li>Services will commence as per our agreed schedule</li>
                    <li>No further action is required from you at this time</li>
                </ul>
            </div>

            <p>Thank you for choosing Office Experts Group. We look forward to delivering exceptional results for your project.</p>

            <div class="contact-section">
                <h3>📞 Need Assistance?</h3>
                <p>If you have any questions about your payment or project, please don't hesitate to contact us:</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <span>📧</span>
                        <a href="mailto:${ACCOUNTS_EMAIL}">${ACCOUNTS_EMAIL}</a>
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

  // Optional lines are filtered out so no blank gaps are left
  const detailLines = [
    `Invoice Number:      ${invoiceNumber}`,
    `Customer Name:       ${customerName}`,
    `Payment Date:        ${formattedDate}`,
    `Payment Method:      ${cardDisplayName}`,
    authCode && `Authorisation Code:  ${authCode}`,
    transactionId && `Transaction ID:      ${transactionId}`,
    `Amount Paid:         ${formattedTotal}`,
  ]
    .filter(Boolean)
    .join("\n");

  const textEmail = `
PAYMENT CONFIRMATION - INVOICE ${invoiceNumber}

Dear ${customerName},

We are pleased to confirm that your payment has been successfully processed.

TRANSACTION DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${detailLines}

IMPORTANT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Please retain this email as your payment receipt
• Your payment will appear on your statement as "Office Experts Group"
• Services will commence as per our agreed schedule
• No further action is required from you at this time

Thank you for choosing Office Experts Group for your Microsoft Office consulting needs. We look forward to delivering exceptional results for your project.

NEED ASSISTANCE?
If you have any questions about your payment or project:
📧 Email: ${ACCOUNTS_EMAIL}
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
  };
}

/**
 * Sends the receipt email to the customer.
 * Returns { success, messageId } or { success: false, error } — never throws,
 * as the payment has already been taken by the time this runs.
 */
export async function sendPaymentConfirmationEmail(paymentDetails) {
  try {
    const emailContent = generatePaymentConfirmationEmail(paymentDetails);

    const response = await sgMail.send({
      to: emailContent.to,
      from: { email: SENDER_EMAIL, name: "Office Experts Group" },
      replyTo: { email: SENDER_EMAIL, name: "Office Experts Group" },
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
      trackingSettings: {
        clickTracking: { enable: false },
        openTracking: {
          enable: true,
          substitutionTag: "%open_tracking_pixel%",
        },
      },
      // Sendgrid categories for filtering in the Sendgrid dashboard
      categories: ["payment-confirmation", "bpoint-transaction"],
    });

    const messageId = response[0]?.headers?.["x-message-id"];

    console.log("Payment confirmation email sent successfully:", {
      invoiceNumber: paymentDetails.invoiceNumber,
      customerEmail: paymentDetails.customerEmail,
      messageId,
    });

    return { success: true, messageId };
  } catch (error) {
    console.error("Failed to send payment confirmation email:", error);
    return { success: false, error: error.message, code: error.code };
  }
}

/**
 * Sends a payment notice to the accounts team.
 *
 * Sent from our own verified sender address, with reply-to set to the
 * customer. (Sendgrid rejects mail "from" an unverified address, so using
 * the customer's email as the sender would fail.)
 */
export async function sendInternalPaymentNotification(paymentDetails) {
  try {
    const {
      invoiceNumber,
      customerName,
      customerEmail,
      totalAmount,
      transactionId,
      authCode,
    } = paymentDetails;

    const formattedAmount = formatCents(totalAmount);
    const formattedTime = formatPaymentDate(paymentDetails.paymentDate);

    await sgMail.send({
      to: ACCOUNTS_EMAIL,
      from: { email: SENDER_EMAIL, name: "Office Experts Payment System" },
      replyTo: customerEmail
        ? { email: customerEmail, name: customerName }
        : undefined,
      subject: `Payment Received - ${invoiceNumber} - ${formattedAmount}`,
      text: `
Payment notification:

Invoice: ${invoiceNumber}
Customer: ${customerName} (${customerEmail})
Amount: ${formattedAmount}
Transaction ID: ${transactionId || "Not provided"}
Authorisation Code: ${authCode || "Not provided"}
Time: ${formattedTime}

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
            <td style="padding: 8px; font-weight: bold;">Transaction ID:</td>
            <td style="padding: 8px;">${transactionId || "Not provided"}</td>
        </tr>
        <tr>
            <td style="padding: 8px; font-weight: bold;">Authorisation Code:</td>
            <td style="padding: 8px;">${authCode || "Not provided"}</td>
        </tr>
        <tr>
            <td style="padding: 8px; font-weight: bold;">Time:</td>
            <td style="padding: 8px;">${formattedTime}</td>
        </tr>
    </table>
    <p style="margin-top: 20px;">Please update the invoice status in your accounting system.</p>
</div>
      `,
      categories: ["internal-notification", "payment-received"],
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send internal payment notification:", error);
    return { success: false, error: error.message };
  }
}
