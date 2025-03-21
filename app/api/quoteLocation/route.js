import sgMail from "@sendgrid/mail";
import { getEmailSignature } from "../../../utils/emailSignature";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const VALID_FILE_TYPES = [
  // Documents
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.oasis.opendocument.text",
  "application/rtf",
  "text/plain",
  "text/csv",
  "text/html",
  "text/markdown",

  // Images
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/svg+xml",
  "image/tiff",

  // Archives (if needed)
  "application/zip",
  "application/x-rar-compressed",

  // Spreadsheets
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.oasis.opendocument.spreadsheet",
];

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      file,
      name,
      email,
      phone,
      message,
      operatingSystem,
      softwareVersions,
      website,
      honeypot,
      location,
      service,
      company,
    } = body;

    // Validate required fields
    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (honeypot) {
      return Response.json(
        { error: "Bot submission detected" },
        { status: 400 }
      );
    }

    // Format current time in AEST
    const timeFormatter = new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Sydney",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    const currentTimeAEST = timeFormatter.format(new Date());

    // File validation
    let attachments = [];
    if (file) {
      if (!VALID_FILE_TYPES.includes(file.type)) {
        return Response.json({ error: "Invalid file type" }, { status: 400 });
      }

      if (Buffer.byteLength(file.content, "base64") > MAX_FILE_SIZE) {
        return Response.json(
          { error: "File size exceeds limit" },
          { status: 400 }
        );
      }

      attachments = [
        {
          content: file.content,
          filename: file.name,
          type: file.type,
        },
      ];
    }

    const { htmlSignature, textSignature } = getEmailSignature();

    const clientTextMessage = `
      You have received a new quote request from ${name} (${email}) from ${
      location || "Unknown location"
    }.
      Phone: ${phone || "Not provided"}
      Company: ${company || "Not provided"}
      Service Requested: ${service || "Not specified"}
      Operating System: ${operatingSystem || "Not provided"}
      Software Versions: ${softwareVersions || "Not provided"}
      Website: ${website || "Not provided"}
      Message: ${message || "Not provided"}

      This email was sent at ${currentTimeAEST} from officeexperts.com.au
    `;

    const customerTextMessage = `
      Hi ${name},

      Thanks for contacting us.
      
      One of our team members will be in touch shortly.

      ${textSignature}
    `;

    const clientHtmlMessage = `
      <p>You have received a new quote request from <strong>${name}</strong> (${email}) from ${
      location || "Unknown location"
    }.</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Operating System:</strong> ${
        operatingSystem || "Not provided"
      }</p>
      <p><strong>Software Versions:</strong> ${
        softwareVersions || "Not provided"
      }</p>
      <p><strong>Website:</strong> ${website || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "Not provided"}</p>
      <em>This email was sent at ${currentTimeAEST} from officeexperts.com.au</em>
    `;

    const customerHtmlMessage = `
      <p>Hi ${name},</p>
      <p>Thanks for contacting us.</p>
      <p>One of our team members will be in touch shortly.</p>
      ${htmlSignature}
    `;

    try {
      // Send to general business email
      await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: "consult@officeexperts.com.au",
        subject: `New Quote Request from ${location || "Website"}`,
        text: clientTextMessage,
        html: clientHtmlMessage,
        ...(attachments.length > 0 && { attachments }),
        replyTo: email,
      });

      // Send to customer
      await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: email,
        subject: "Thank you for your quote request!",
        text: customerTextMessage,
        html: customerHtmlMessage,
      });

      return Response.json(
        { message: "Quote request submitted successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error(
        "SendGrid error:",
        emailError?.response?.body || emailError
      );
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
