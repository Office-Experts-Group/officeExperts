// import sgMail from "@sendgrid/mail";
// import { getEmailSignature } from "@/utils/emailSignature";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, message, honeypot } = body;

//     // Check honeypot (hidden field) to detect bot submissions
//     if (honeypot) {
//       return new Response("Bot submission detected", { status: 400 });
//     }

//     // Get the email signature
//     const { htmlSignature, textSignature } = getEmailSignature();

//     // Compose plain text messages
//     const clientTextMessage = `
//       You have received a new message from ${name} (${email}).
//       Phone: ${phone || "Not provided"}.
//       Message: ${message}

//       ${textSignature}
//     `;

//     const customerTextMessage = `
//       Hi ${name},

//       Thank you for reaching out. We've received your message:

//       ${message}

//       We'll get back to you soon!

//       ${textSignature}
//     `;

//     // Compose HTML messages
//     const clientHtmlMessage = `
//       <p>You have received a new message from <strong>${name}</strong> (${email}).</p>
//       <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
//       <p><strong>Message:</strong></p>
//       <p>${message}</p>
//       ${htmlSignature}
//     `;

//     const customerHtmlMessage = `
//       <p>Hi ${name},</p>
//       <p>Thank you for reaching out. We've received your message:</p>
//       <p>${message}</p>
//       <p>We'll get back to you soon!</p>
//       ${htmlSignature}
//     `;

//     // Send email to the consult@officeexperts.com.au
//     await sgMail.send({
//       from: email,
//       to: "consult@officeexperts.com.au",
//       subject: "New Contact Form Submission",
//       text: clientTextMessage,
//       html: clientHtmlMessage,
//     });

//     // Send email to the joshua@officeexperts.com.au
//     await sgMail.send({
//       from: email,
//       to: "joshua@officeexperts.com.au",
//       subject: "New Contact Form Submission",
//       text: clientTextMessage,
//       html: clientHtmlMessage,
//     });

//     // Send confirmation email to the customer
//     await sgMail.send({
//       from: "consult@officeexperts.com.au",
//       to: email,
//       subject: "Thank you for your message!",
//       text: customerTextMessage,
//       html: customerHtmlMessage,
//     });

//     return new Response("Email sent successfully", { status: 200 });
//   } catch (error) {
//     return new Response("Error sending email", { status: 500 });
//   }
// }

export async function POST(request) {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Test mode - contact form submission successful",
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
