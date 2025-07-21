// comprehensive-card-tests.js - Test different card types and scenarios

function encodeUrlParams(params) {
  const paramString = `A=${params.A}&I=${encodeURIComponent(
    params.I
  )}&C=${encodeURIComponent(params.C)}&E=${encodeURIComponent(params.E)}`;
  return Buffer.from(paramString).toString("base64");
}

// Test card scenarios
const cardTestScenarios = [
  // POSITIVE TESTS - Different Card Types
  {
    category: "✅ POSITIVE TESTS - Valid Cards",
    tests: [
      {
        name: "Mastercard Standard",
        cardNumber: "5123456789012346",
        expectedType: "MC",
        invoice: "MC-TEST-001",
        customer: "John Mastercard",
        amount: "12500", // $125.00 - ends in 00 for success
      },
      {
        name: "Mastercard 2 Series",
        cardNumber: "2720010040360012",
        expectedType: "MC",
        invoice: "MC2-TEST-001",
        customer: "Jane Mastercard2",
        amount: "10000", // $100.00 - ends in 00 for success
      },
      {
        name: "Visa",
        cardNumber: "4987654321098769",
        expectedType: "VC",
        invoice: "VISA-TEST-001",
        customer: "Bob Visa",
        amount: "15000", // $150.00 - ends in 00 for success
      },
      {
        name: "American Express",
        cardNumber: "345678901234564",
        expectedType: "AX",
        invoice: "AMEX-TEST-001",
        customer: "Alice Amex",
        amount: "20000", // $200.00 - ends in 00 for success
      },
      {
        name: "Diners Club",
        cardNumber: "30123456789019",
        expectedType: "DC",
        invoice: "DINERS-TEST-001",
        customer: "Charlie Diners",
        amount: "7500", // $75.00 - ends in 00 for success
      },
      {
        name: "JCB",
        cardNumber: "3530111333300000",
        expectedType: "JC",
        invoice: "JCB-TEST-001",
        customer: "Diana JCB",
        amount: "5000", // $50.00 - ends in 00 for success
      },
    ],
  },

  // NEGATIVE TESTS - Error Response Codes
  {
    category: "❌ NEGATIVE TESTS - Error Responses",
    tests: [
      {
        name: "Declined Transaction (05)",
        cardNumber: "5123456789012346",
        expectedError: "05",
        invoice: "DECLINE-TEST-005",
        customer: "Test Decline",
        amount: "12505", // Ends in 05 to trigger decline
      },
      {
        name: "Invalid Card (14)",
        cardNumber: "5123456789012346",
        expectedError: "14",
        invoice: "INVALID-TEST-014",
        customer: "Test Invalid",
        amount: "12514", // Ends in 14 to trigger invalid card
      },
      {
        name: "Insufficient Funds (51)",
        cardNumber: "5123456789012346",
        expectedError: "51",
        invoice: "INSUFFICIENT-TEST-051",
        customer: "Test Insufficient",
        amount: "12551", // Ends in 51 to trigger insufficient funds
      },
      {
        name: "Expired Card (54)",
        cardNumber: "5123456789012346",
        expectedError: "54",
        invoice: "EXPIRED-TEST-054",
        customer: "Test Expired",
        amount: "12554", // Ends in 54 to trigger expired card
      },
    ],
  },

  // FEE COMPARISON TESTS
  {
    category: "💰 FEE COMPARISON TESTS - Same Amount Different Cards",
    tests: [
      {
        name: "Fee Test - Mastercard",
        cardNumber: "5123456789012346",
        invoice: "FEE-MC-001",
        customer: "Fee Test MC",
        amount: "10000", // $100.00 exactly for fee comparison
      },
      {
        name: "Fee Test - Visa",
        cardNumber: "4987654321098769",
        invoice: "FEE-VISA-001",
        customer: "Fee Test Visa",
        amount: "10000", // $100.00 exactly for fee comparison
      },
      {
        name: "Fee Test - Amex (Higher fees expected)",
        cardNumber: "345678901234564",
        invoice: "FEE-AMEX-001",
        customer: "Fee Test Amex",
        amount: "10000", // $100.00 exactly for fee comparison
      },
    ],
  },
];

console.log("\n🧪 COMPREHENSIVE BPOINT CARD TESTING");
console.log("=".repeat(60));

cardTestScenarios.forEach((scenario, categoryIndex) => {
  console.log(`\n${categoryIndex + 1}. ${scenario.category}`);
  console.log("-".repeat(50));

  scenario.tests.forEach((test, testIndex) => {
    const testInvoice = {
      A: test.amount,
      I: test.invoice,
      C: test.customer,
      E: `${test.customer.toLowerCase().replace(/\s+/g, ".")}@test.com`,
    };

    const encoded = encodeUrlParams(testInvoice);
    const url = `http://localhost:3000/ccp?q=${encoded}`;

    console.log(`\n${testIndex + 1}. ${test.name}`);
    console.log(`   Card: ${test.cardNumber}`);
    console.log(`   Amount: $${(parseInt(test.amount) / 100).toFixed(2)}`);
    console.log(
      `   Expected: ${
        test.expectedType || test.expectedError || "Fee comparison"
      }`
    );
    console.log(`   URL: ${url}`);
  });
});

console.log("\n📋 TESTING INSTRUCTIONS:");
console.log("=".repeat(60));
console.log("1. Copy each URL and test in browser");
console.log("2. For positive tests: Check transaction success and card type");
console.log("3. For negative tests: Verify correct error codes");
console.log("4. For fee tests: Compare surcharge amounts between card types");
console.log("5. Check server logs for detailed transaction responses");

console.log("\n🔍 WHAT TO LOOK FOR:");
console.log("- CardType field in response (MC, VC, AX, DC, JC)");
console.log("- BankResponseCode (00=success, 05=decline, etc.)");
console.log("- AmountSurcharge differences between card types");
console.log("- CVNResult and fraud screening responses");
console.log("- IsTestTxn should be true for all tests");

console.log("\n💡 TESTING TIPS:");
console.log("- Run positive tests first to confirm setup");
console.log("- Test each card type to verify different processing");
console.log("- Compare fee structures between Visa/MC vs Amex");
console.log("- Document any unexpected responses for investigation");
