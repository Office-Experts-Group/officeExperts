// app/api/health-check/route.js - NEW FILE FOR DEPLOYMENT VALIDATION
import { NextResponse } from "next/server";
import { validateBpointConfig } from "../../../utils/paymentConfig";

export async function GET() {
  const timestamp = new Date().toISOString();

  try {
    // Validate Bpoint configuration
    validateBpointConfig();

    const environment = {
      timestamp,
      environment: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV,
      isProduction:
        process.env.NODE_ENV === "production" &&
        process.env.VERCEL_ENV === "production",
    };

    const configStatus = {
      hasUsername: !!process.env.BPOINT_USERNAME,
      hasPassword: !!process.env.BPOINT_PASSWORD,
      hasMerchantNumber: !!process.env.BPOINT_MERCHANT_NUMBER,
      hasMerchantShortName: !!process.env.BPOINT_MERCHANT_SHORT_NAME,
    };

    console.log("✅ Health check passed:", { environment, configStatus });

    return NextResponse.json({
      status: "healthy",
      paymentSystem: "bpoint",
      environment,
      configuration: configStatus,
      message: "Payment system is ready",
    });
  } catch (error) {
    console.error("❌ Health check failed:", error.message);

    return NextResponse.json(
      {
        status: "unhealthy",
        error: error.message,
        timestamp,
        paymentSystem: "bpoint",
        message: "Payment system configuration error",
      },
      { status: 500 }
    );
  }
}
