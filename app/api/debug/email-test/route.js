// app/api/debug/email-test/route.js - EMAIL DEBUG ENDPOINT
import { NextResponse } from "next/server";
import { decodeUrlParams } from "../../../../utils/paymentUtils";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const encodedParams = searchParams.get("q");

  if (!encodedParams) {
    return NextResponse.json({
      error: "No 'q' parameter provided",
      example: "/api/debug/email-test?q=YOUR_ENCODED_PARAMS",
    });
  }

  try {
    // Decode the same way your payment form does
    const decodedParams = decodeUrlParams(encodedParams);

    return NextResponse.json({
      status: "debug",
      timestamp: new Date().toISOString(),
      encoded: encodedParams,
      decoded: decodedParams,
      emailExtracted: decodedParams?.E || "NO EMAIL FOUND",
      allParams: {
        amount: decodedParams?.A,
        invoice: decodedParams?.I,
        customer: decodedParams?.C,
        email: decodedParams?.E,
        surcharge: decodedParams?.S,
      },
      // Check if we have email configuration
      emailConfig: {
        hasSendGrid: !!process.env.SENDGRID_API_KEY,
        sendGridKeyLength: process.env.SENDGRID_API_KEY?.length || 0,
        fromEmail: process.env.EMAIL_FROM || "NOT SET",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to decode parameters",
        details: error.message,
        encoded: encodedParams,
      },
      { status: 400 }
    );
  }
}
