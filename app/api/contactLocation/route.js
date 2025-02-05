import sgMail from "@sendgrid/mail";
import { getEmailSignature } from "../../../utils/emailSignature";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      message,
      honeypot,
      location,
      service, // New field for Microsoft service
      operatingSystem, // New field for operating system selection
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check honeypot
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

    const { htmlSignature, textSignature } = getEmailSignature();

    // Updated messages to include location and service information
    const clientTextMessage = `
      You have received a new message from ${name} (${email}) from ${
      location || "Unknown location"
    }.
      Phone: ${phone || "Not provided"}
      Service Requested: ${service || "Not specified"}
      Operating System: ${operatingSystem || "Not specified"}
      Message: ${message}

      This form was filled out on the website: https://officeexperts.com.au @ ${currentTimeAEST} AEST
    `;

    const customerTextMessage = `
      Hi ${name},

      Thanks for contacting us.
      
      One of our team members will be in touch shortly.

      ${textSignature}
    `;

    const clientHtmlMessage = `
      <p>You have received a new message from <strong>${name}</strong> (${email}) from ${
      location || "Unknown location"
    }.</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
      <p><strong>Operating System:</strong> ${
        operatingSystem || "Not specified"
      }</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      
      <em>This form was filled out on the website: https://officeexperts.com.au @ ${currentTimeAEST} AEST</em>
    `;

    const customerHtmlMessage = `
      <p>Hi ${name},</p>
      <p>Thanks for contacting us.</p>
      <p>One of our team members will be in touch shortly.</p>
      ${htmlSignature}
    `;

    try {
      // Send to primary business email
      await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: "joshua@officeexperts.com.au",
        subject: `New Contact Form Submission from ${location || "Website"}`,
        text: clientTextMessage,
        html: clientHtmlMessage,
        replyTo: email,
      });

      // Send confirmation to customer
      await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: email,
        subject: "Thank you for your message!",
        text: customerTextMessage,
        html: customerHtmlMessage,
      });

      return Response.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("SendGrid error:", emailError);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
