// app/api/bpoint/create-authkey/route.js
import { NextResponse } from "next/server";
import { getPaymentConfig } from "../../../../utils/paymentConfig";

export async function POST(request) {
  try {
    const { amount, invoiceNumber, customerName, customerEmail } =
      await request.json();

    console.log("=== BPOINT API CALL START ===");
    console.log("Request data:", {
      amount,
      invoiceNumber,
      customerName,
      customerEmail,
    });

    const { config } = getPaymentConfig("bpoint");
    console.log("Config loaded:", {
      hasUsername: !!config.username,
      hasPassword: !!config.password,
      hasShortName: !!config.merchantShortName,
      baseUrl: config.baseUrl,
    });

    // Check if we have Bpoint credentials
    if (!config.username || !config.password || !config.merchantShortName) {
      console.error("Missing Bpoint credentials:", config);
      return NextResponse.json(
        {
          error:
            "Payment configuration incomplete. Please check Bpoint credentials.",
        },
        { status: 500 }
      );
    }

    // Update base URL to v3
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://www.officeexperts.com.au"
        : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const redirectUrl = `${baseUrl}/ccp`;

    // Use correct TxnReq format for v3 API (matching working Postman)
    const authKeyData = {
      TxnReq: {
        Action: "payment",
        Amount: parseInt(amount),
        Currency: "AUD",
        MerchantReference: `Inv ${invoiceNumber}`,
        Crn1: invoiceNumber.replace(/[^a-zA-Z0-9]/g, ""), // Remove special characters
        EmailAddress: customerEmail,
        SubType: "single", // Required field
        CardDetails: {
          CardNumber: "5123456789012346", // Test card
          ExpiryDate: "1225",
          Cvn: "123",
          CardHolderName: customerName,
        },
        TestMode: true,
        Type: "internet",
      },
    };

    console.log("Sending to Bpoint v3:", {
      url: `${config.baseUrl}/txns/`,
      method: "POST",
      headers: {
        Authorization: "Basic [CREDENTIALS]",
        "Content-Type": "application/json",
      },
      dataKeys: Object.keys(authKeyData),
      txnReqKeys: Object.keys(authKeyData.TxnReq),
    });

    // Use correct authentication format: username|merchantnumber:password
    const credentials = Buffer.from(
      `${config.username}|${config.merchantNumber}:${config.password}`
    ).toString("base64");

    const bpointResponse = await fetch(`${config.baseUrl}/txns/`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authKeyData),
    });

    console.log("Bpoint response status:", bpointResponse.status);
    console.log(
      "Bpoint response headers:",
      Object.fromEntries(bpointResponse.headers.entries())
    );

    const responseText = await bpointResponse.text();
    console.log("Bpoint raw response:", responseText);

    if (!bpointResponse.ok) {
      console.error(
        "Bpoint API HTTP Error:",
        bpointResponse.status,
        responseText
      );
      return NextResponse.json(
        {
          error: `Bpoint API returned ${bpointResponse.status}: ${responseText}`,
        },
        { status: 500 }
      );
    }

    const bpointResult = JSON.parse(responseText);
    console.log("Bpoint parsed result:", bpointResult);

    if (bpointResult.APIResponse?.ResponseCode !== "0") {
      console.error("Bpoint Error:", bpointResult.APIResponse);
      return NextResponse.json(
        {
          error: `Bpoint: ${
            bpointResult.APIResponse?.ResponseText || "Unknown error"
          }`,
        },
        { status: 500 }
      );
    }

    console.log("=== BPOINT API CALL SUCCESS ===");
    // For 2-party integration, we get transaction result directly
    return NextResponse.json({
      success: true,
      transaction: bpointResult.TxnResp,
      message: "Payment processed successfully",
    });
  } catch (error) {
    console.error("=== BPOINT API CALL FAILED ===");
    console.error("Error details:", error);
    console.error("Error stack:", error.stack);
    return NextResponse.json(
      { error: "Failed to create payment session" },
      { status: 500 }
    );
  }
}
