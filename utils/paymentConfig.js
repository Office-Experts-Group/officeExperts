// // utils/paymentConfig.js - NEW FILE
// const paymentConfig = {
//   // Existing Simplify (keep as-is)
//   simplify: {
//     publicKey: process.env.SIMPLIFY_PUBLIC_KEY,
//     baseUrl: "https://www.simplify.com/commerce",
//   },

//   // New Bpoint config - SERVER SIDE ONLY
//   bpoint: {
//     username: process.env.BPOINT_USERNAME,
//     password: process.env.BPOINT_PASSWORD,
//     merchantNumber: process.env.BPOINT_MERCHANT_NUMBER,
//     merchantShortName: process.env.BPOINT_MERCHANT_SHORT_NAME,
//     baseUrl:
//       process.env.BPOINT_BASE_URL || "https://www.bpoint.com.au/webapi/v2",
//   },
// };

// // CLIENT-SIDE: Simple method selection
// export const getPaymentMethod = () => {
//   // For now, force Bpoint in development
//   if (typeof window !== "undefined") {
//     // Client-side: use a simple check
//     return "bpoint"; // Force Bpoint for testing
//   }

//   // Server-side: full environment check
//   const isDev = process.env.NODE_ENV === "development";
//   const isBpointBranch =
//     process.env.VERCEL_GIT_COMMIT_REF === "bpoint-integration";
//   const bpointEnabled = process.env.BPOINT_ENABLED === "true";
//   const isProduction = process.env.VERCEL_ENV === "production";

//   const useBpoint = (isDev || isBpointBranch || bpointEnabled) && !isProduction;

//   return useBpoint ? "bpoint" : "simplify";
// };

// // SERVER-SIDE ONLY: Get config with credentials
// export const getPaymentConfig = (method = null) => {
//   const selectedMethod = method || getPaymentMethod();
//   return {
//     method: selectedMethod,
//     config: paymentConfig[selectedMethod],
//   };
// };

// utils/paymentConfig.js - FORCE PRODUCTION MODE FOR TESTING
const paymentConfig = {
  bpoint: {
    username: process.env.BPOINT_USERNAME,
    password: process.env.BPOINT_PASSWORD,
    merchantNumber: process.env.BPOINT_MERCHANT_NUMBER,
    merchantShortName: process.env.BPOINT_MERCHANT_SHORT_NAME,
    baseUrl: "https://www.bpoint.com.au/webapi/v3",
  },
};

// PRODUCTION VALIDATION - Fail fast if config is missing
export const validateBpointConfig = () => {
  const requiredVars = [
    "BPOINT_USERNAME",
    "BPOINT_PASSWORD",
    "BPOINT_MERCHANT_NUMBER",
    "BPOINT_MERCHANT_SHORT_NAME",
  ];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    const error = `CRITICAL: Missing required Bpoint environment variables: ${missingVars.join(
      ", "
    )}`;
    console.error(error);
    throw new Error(error);
  }

  return true;
};

// ALWAYS RETURN BPOINT - No fallbacks
export const getPaymentMethod = () => {
  return "bpoint";
};

// FORCE PRODUCTION MODE - For testing real transactions locally
export const isProductionMode = () => {
  // Force production mode if this environment variable is set
  if (process.env.FORCE_PRODUCTION_MODE === "true") {
    console.log(
      "🚨 FORCING PRODUCTION MODE - Real transactions will be processed!"
    );
    return true;
  }

  // Normal production detection
  return (
    process.env.NODE_ENV === "production" &&
    process.env.VERCEL_ENV === "production"
  );
};

// SERVER-SIDE ONLY: Get config with strict validation
export const getPaymentConfig = () => {
  // Validate config exists before returning
  validateBpointConfig();

  const config = paymentConfig.bpoint;
  const isProd = isProductionMode();

  console.log("🔧 Bpoint configuration loaded:", {
    hasUsername: !!config.username,
    hasPassword: !!config.password,
    hasMerchantNumber: !!config.merchantNumber,
    hasMerchantShortName: !!config.merchantShortName,
    baseUrl: config.baseUrl,
    environment: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    isProductionMode: isProd,
    forceProductionMode: process.env.FORCE_PRODUCTION_MODE === "true",
  });

  return {
    method: "bpoint",
    config,
    isProduction: isProd,
  };
};

// Export for server-side validation
export { paymentConfig };
