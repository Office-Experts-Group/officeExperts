// utils/cardTypeUtils.js
// Card scheme detection and display names.
//
// Replaces utils/bpointSurchargeUtils.js. Surcharges are no longer charged,
// so all surcharge rates and calculations have been removed. Card type is
// still used for the form badge, the receipt, emails and Bpoint's Crn2
// reference.

/**
 * Prefix (IIN/BIN) patterns for each card scheme.
 * These match the start of the number only, so the scheme can be shown as
 * soon as the first few digits are typed rather than once the full number
 * is entered. Order matters: more specific patterns come first.
 */
const CARD_PREFIX_PATTERNS = {
  AMEX: /^3[47]/,
  JCB: /^35/,
  DINERS: /^3[0689]/,
  VISA: /^4/,
  MASTERCARD: /^5[1-5]/,
  MASTERCARD_2_SERIES: /^2[2-7]/,
};

const CARD_DISPLAY_NAMES = {
  VISA: "Visa",
  MASTERCARD: "Mastercard",
  MASTERCARD_2_SERIES: "Mastercard",
  AMEX: "American Express",
  DINERS: "Diners Club",
  JCB: "JCB",
  UNKNOWN: "Credit Card",
};

/**
 * Detects the card scheme from a (partial or full) card number.
 * @param {string} cardNumber - Digits, spaces allowed
 * @returns {string} Scheme code, e.g. "VISA", or "UNKNOWN"
 */
export function detectCardType(cardNumber) {
  const cleanNumber = cardNumber.replace(/\s+/g, "");

  for (const [type, pattern] of Object.entries(CARD_PREFIX_PATTERNS)) {
    if (pattern.test(cleanNumber)) return type;
  }

  return "UNKNOWN";
}

/**
 * Returns a customer-friendly name for a scheme code.
 * Falls back to "Credit Card" for unknown or missing values.
 * @param {string} cardType - Scheme code, e.g. "AMEX"
 * @returns {string} Display name, e.g. "American Express"
 */
export function getCardDisplayName(cardType) {
  return CARD_DISPLAY_NAMES[cardType] || CARD_DISPLAY_NAMES.UNKNOWN;
}
