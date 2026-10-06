// app/api/case-study-submission/route.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Matches the limits in CaseStudyForm.jsx. Checked again here as a backstop,
// since client-side validation can be bypassed.
const MAX_ATTACHMENTS = 3;
const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024; // 10MB per file
const MAX_TOTAL_ATTACHMENT_BYTES = 20 * 1024 * 1024; // 20MB across all files
const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

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
      attachments, // optional: array of { filename, type, content } — content is base64
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

    // Attachments are optional. Anything that isn't an array is treated
    // as "no attachments" rather than an error.
    const files = Array.isArray(attachments)
      ? attachments.filter((file) => file && file.content)
      : [];

    if (files.length > MAX_ATTACHMENTS) {
      return Response.json(
        { error: `A maximum of ${MAX_ATTACHMENTS} attachments is allowed` },
        { status: 400 },
      );
    }

    let totalBytes = 0;
    for (const file of files) {
      if (!file.filename || !ACCEPTED_FILE_TYPES.includes(file.type)) {
        return Response.json(
          { error: "Unsupported attachment type" },
          { status: 400 },
        );
      }

      const sizeInBytes = file.content.length * 0.75; // base64 → bytes
      if (sizeInBytes > MAX_ATTACHMENT_BYTES) {
        return Response.json(
          { error: "Attachment is too large" },
          { status: 400 },
        );
      }

      totalBytes += sizeInBytes;
    }

    if (totalBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
      return Response.json(
        { error: "Attachments are too large combined" },
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

     Attachments: ${files.length}

     *This is an automated message from officeexperts.com.au
   `;

    const message = {
      from: "consult@officeexperts.com.au",
      to: ["dan@officeexperts.com.au", "scott@officeexperts.com.au"],
      subject: `New Case Study Submission: ${projectName}`,
      text: caseStudyTextMessage,
    };

    // Only add attachments if any were sent through.
    if (files.length > 0) {
      message.attachments = files.map((file) => ({
        content: file.content,
        filename: file.filename,
        type: file.type,
        disposition: "attachment",
      }));
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
