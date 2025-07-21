export const getPaymentConfig = () => {
  const isDev = process.env.NODE_ENV === "development";
  const isBpointBranch =
    process.env.VERCEL_GIT_COMMIT_REF === "bpoint-integration";
  const isProduction = process.env.VERCEL_ENV === "production";

  // Feature flag for gradual rollout
  const bpointEnabled = process.env.BPOINT_ENABLED === "true";

  const useBpoint = (isDev || isBpointBranch || bpointEnabled) && !isProduction;

  return {
    method: useBpoint ? "bpoint" : "simplify",
    config: useBpoint
      ? {
          username: process.env.BPOINT_USERNAME,
          password: process.env.BPOINT_PASSWORD,
          merchantNumber: process.env.BPOINT_MERCHANT_NUMBER,
          merchantShortName: process.env.BPOINT_MERCHANT_SHORT_NAME,
          baseUrl:
            process.env.BPOINT_BASE_URL ||
            "https://www.bpoint.com.au/webapi/v2",
        }
      : {
          publicKey: process.env.SIMPLIFY_PUBLIC_KEY,
          baseUrl: "https://www.simplify.com/commerce",
        },
  };
};
