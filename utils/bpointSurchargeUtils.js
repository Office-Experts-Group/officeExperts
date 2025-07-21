// utils/bpointSurchargeUtils.js
export const SURCHARGE_RATES = {
  VISA: 1.27,
  MASTERCARD: 1.27,
  AMEX: 2.35,
  AMERICAN_EXPRESS: 2.35,
  DINERS: 1.27, // Assuming same as Visa/MC
  JCB: 1.27, // Assuming same as Visa/MC
  MASTERCARD_2_SERIES: 1.27,
};

export const CARD_TYPE_PATTERNS = {
  VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
  MASTERCARD: /^5[1-5][0-9]{14}$/,
  MASTERCARD_2_SERIES: /^2[2-7][0-9]{14}$/,
  AMEX: /^3[47][0-9]{13}$/,
  DINERS: /^3[0689][0-9]{11,13}$/,
  JCB: /^35[0-9]{14}$/,
};

/**
 * Detect card type from card number
 * @param {string} cardNumber - The card number
 * @returns {string} - The card type
 */
export function detectCardType(cardNumber) {
  const cleanNumber = cardNumber.replace(/\s+/g, "");

  for (const [type, pattern] of Object.entries(CARD_TYPE_PATTERNS)) {
    if (pattern.test(cleanNumber)) {
      return type;
    }
  }

  return "UNKNOWN";
}

/**
 * Calculate surcharge amount based on card type and base amount
 * @param {number} baseAmountInCents - The base amount in cents
 * @param {string} cardType - The card type
 * @returns {object} - Contains surcharge details
 */
export function calculateSurcharge(baseAmountInCents, cardType) {
  const rate = SURCHARGE_RATES[cardType] || 0;
  const surchargeInCents = Math.round(baseAmountInCents * (rate / 100));
  const totalInCents = baseAmountInCents + surchargeInCents;

  return {
    baseAmount: baseAmountInCents,
    surchargeRate: rate,
    surchargeAmount: surchargeInCents,
    totalAmount: totalInCents,
    cardType,
    baseAmountDisplay: `$${(baseAmountInCents / 100).toFixed(2)}`,
    surchargeDisplay: `$${(surchargeInCents / 100).toFixed(2)}`,
    totalDisplay: `$${(totalInCents / 100).toFixed(2)}`,
  };
}

/**
 * Get surcharge info for all card types (for display purposes)
 * @param {number} baseAmountInCents - The base amount in cents
 * @returns {array} - Array of surcharge info for each card type
 */
export function getAllSurchargeInfo(baseAmountInCents) {
  return Object.entries(SURCHARGE_RATES).map(([cardType, rate]) => {
    const surcharge = calculateSurcharge(baseAmountInCents, cardType);
    return {
      cardType,
      displayName: getCardDisplayName(cardType),
      rate,
      surcharge,
    };
  });
}

/**
 * Get display name for card type
 * @param {string} cardType - The card type
 * @returns {string} - Display name
 */
export function getCardDisplayName(cardType) {
  const displayNames = {
    VISA: "Visa",
    MASTERCARD: "Mastercard",
    MASTERCARD_2_SERIES: "Mastercard",
    AMEX: "American Express",
    AMERICAN_EXPRESS: "American Express",
    DINERS: "Diners Club",
    JCB: "JCB",
  };

  return displayNames[cardType] || cardType;
}
