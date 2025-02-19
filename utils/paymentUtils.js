/**
 * Decode the base64 encoded URL parameters and return them as an object
 * @param {string} encodedStr - Base64 encoded query string
 * @returns {Object|null} - Decoded parameters or null if invalid
 */
export function decodeUrlParams(encodedStr) {
  try {
    // Decode from base64
    const decodedStr = Buffer.from(encodedStr, "base64").toString("utf8");

    // Parse the parameters
    const params = new URLSearchParams(decodedStr);
    const result = {};

    // Convert to object
    for (const [key, value] of params.entries()) {
      result[key] = value;
    }

    return result;
  } catch (error) {
    console.error("Error decoding payment parameters:", error);
    return null;
  }
}

/**
 * Validate payment parameters
 * @param {Object} params - Payment parameters
 * @returns {boolean} - True if valid, false otherwise
 */
export function validatePaymentParams(params) {
  const { A, I, C, E } = params;

  // Basic validation
  if (!A || !I || !C || !E) {
    return false;
  }

  // Amount should be a positive number
  const amount = parseInt(A);
  if (isNaN(amount) || amount <= 0) {
    return false;
  }

  // Invoice number should be a non-empty string
  if (typeof I !== "string" || I.trim() === "") {
    return false;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(E)) {
    return false;
  }

  return true;
}
