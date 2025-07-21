// utils/paymentConfig.js - NEW FILE
const paymentConfig = {
  // Existing Simplify (keep as-is)
  simplify: {
    publicKey: process.env.SIMPLIFY_PUBLIC_KEY,
    baseUrl: "https://www.simplify.com/commerce",
  },

  // New Bpoint config - SERVER SIDE ONLY
  bpoint: {
    username: process.env.BPOINT_USERNAME,
    password: process.env.BPOINT_PASSWORD,
    merchantNumber: process.env.BPOINT_MERCHANT_NUMBER,
    merchantShortName: process.env.BPOINT_MERCHANT_SHORT_NAME,
    baseUrl:
      process.env.BPOINT_BASE_URL || "https://www.bpoint.com.au/webapi/v2",
  },
};

// CLIENT-SIDE: Simple method selection
export const getPaymentMethod = () => {
  // For now, force Bpoint in development
  if (typeof window !== "undefined") {
    // Client-side: use a simple check
    return "bpoint"; // Force Bpoint for testing
  }

  // Server-side: full environment check
  const isDev = process.env.NODE_ENV === "development";
  const isBpointBranch =
    process.env.VERCEL_GIT_COMMIT_REF === "bpoint-integration";
  const bpointEnabled = process.env.BPOINT_ENABLED === "true";
  const isProduction = process.env.VERCEL_ENV === "production";

  const useBpoint = (isDev || isBpointBranch || bpointEnabled) && !isProduction;

  return useBpoint ? "bpoint" : "simplify";
};

// SERVER-SIDE ONLY: Get config with credentials
export const getPaymentConfig = (method = null) => {
  const selectedMethod = method || getPaymentMethod();
  return {
    method: selectedMethod,
    config: paymentConfig[selectedMethod],
  };
};
