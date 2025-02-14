import sgMail from "@sendgrid/mail";
import { getEmailSignature } from "../../../utils/emailSignature";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message, honeypot } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check honeypot (hidden field) to detect bot submissions
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

    // Get the email signature
    const { htmlSignature, textSignature } = getEmailSignature();

    // Compose plain text messages
    const clientTextMessage = `
      You have received a new message from ${name} (${email}).
      Phone: ${phone || "Not provided"}.
      Message: ${message}

      This form was filled out on the website: https://www.officeexperts.com.au @ ${currentTimeAEST} AEST
    `;

    const customerTextMessage = `
      Hi ${name},

      Thanks for contacting us.
        
      One of our team members will be in touch shortly.

      ${textSignature}
    `;

    // Compose HTML messages
    const clientHtmlMessage = `
      <p>You have received a new message from <strong>${name}</strong> (${email}).</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      
      <em>This form was filled out on the website: https://www.officeexperts.com.au @ ${currentTimeAEST} AEST</em>
    `;

    const customerHtmlMessage = `
      <p>Hi ${name},</p>
      <p>Thanks for contacting us.</p>
      <p>One of our team members will be in touch shortly.</p>
      ${htmlSignature}
    `;

    // Send emails
    try {
      await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: "consult@officeexperts.com.au",
        subject: "New Contact Form Submission",
        text: clientTextMessage,
        html: clientHtmlMessage,
        replyTo: email, // Add reply-to header
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
