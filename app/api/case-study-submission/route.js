// app/api/case-study-submission/route.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      clientName,
      projectName,
      details,
      problemsSolved,
      technologiesUsed,
      author,
      attachment, // optional: { filename, type, content } — content is base64
    } = body;

    if (
      !projectName ||
      !details ||
      !problemsSolved ||
      !technologiesUsed ||
      !author
    ) {
      console.log("Missing fields:", {
        projectName,
        details,
        problemsSolved,
        technologiesUsed,
        author,
      });
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const caseStudyTextMessage = `
     New case study submission from ${author}.

Client Name: ${clientName}

     Project Name: ${projectName}

     Details:
     ${details}

     Problems Solved:
     ${problemsSolved}

     Technologies Used: ${technologiesUsed}

     *This is an automated message from officeexperts.com.au
   `;

    const message = {
      from: "consult@officeexperts.com.au",
      to: ["dan@officeexperts.com.au", "scott@officeexperts.com.au"],
      subject: `New Case Study Submission: ${projectName}`,
      text: caseStudyTextMessage,
    };

    // Attachment is optional — only add it if one was sent through.
    // Size is checked again here as a backstop, since client-side
    // validation can be bypassed.
    if (attachment && attachment.content) {
      const sizeInBytes = attachment.content.length * 0.75; // base64 → bytes
      const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // 10MB

      if (sizeInBytes > MAX_ATTACHMENT_BYTES) {
        return Response.json(
          { error: "Attachment is too large" },
          { status: 400 },
        );
      }

      message.attachments = [
        {
          content: attachment.content,
          filename: attachment.filename,
          type: attachment.type,
          disposition: "attachment",
        },
      ];
    }

    await sgMail.send(message);

    return Response.json(
      { message: "Case study submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
