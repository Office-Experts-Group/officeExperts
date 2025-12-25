import sgMail from "@sendgrid/mail";
import { getEmailSignature } from "../../../utils/emailSignature";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

// Dangerous file extensions to block
const BLOCKED_EXTENSIONS = [
  // Executables
  'exe', 'com', 'bat', 'cmd', 'scr', 'pif', 'msi', 'app',
  
  // Scripts
  'vbs', 'js', 'jse', 'ws', 'wsf', 'wsh', 'ps1', 'sh', 'csh',
  
  // System files
  'dll', 'sys', 'drv',
  
  // Shortcuts
  'lnk', 'scf',
  
  // Java
  'jar', 'class',
  
  // Web files (HIGH RISK for phishing)
  'html', 'htm', 'xhtml', 'hta', 'mht', 'mhtml',
  
  // Modern web/app development files
  'jsx', 'tsx', 'ts',
  
  // Other programming language source files
  'py', 'rb', 'php', 'asp', 'aspx', 'jsp',
  'c', 'cpp', 'h', 'swift', 'go', 'rs',
  
  // Configuration/build files that could contain malicious code
  'json', 'yaml', 'yml', 'toml', 'xml',
];

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Helper function to get file extension
const getFileExtension = (filename) => {
  if (!filename || typeof filename !== 'string') return '';
  const parts = filename.split('.');
  return parts.length > 1 ? parts.pop().toLowerCase() : '';
};

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
      // Check file extension against blocklist
      const extension = getFileExtension(file.name);
      
      if (BLOCKED_EXTENSIONS.includes(extension)) {
        return Response.json(
          { error: "This file type is not allowed for security reasons" },
          { status: 400 }
        );
      }

      // Check file size
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