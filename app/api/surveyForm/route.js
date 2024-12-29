import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, referralSource, otherReferralDetails } = body;

    if (!name || !email || !referralSource) {
      console.log("Missing fields:", { name, email, referralSource });
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const referralDetails =
      referralSource === "other"
        ? `Other: ${otherReferralDetails}`
        : referralSource;

    const clientTextMessage = `
     You have received a survey from ${name} (${email}).
     Referral Details: ${referralDetails}

     *This is an automated message from officeexperts.com.au
   `;

    await sgMail.send({
      from: "consult@officeexperts.com.au",
      to: "joshua@officeexperts.com.au",
      subject: "New Survey Form Submission",
      text: clientTextMessage,
      replyTo: email,
    });

    return Response.json(
      { message: "Survey submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
