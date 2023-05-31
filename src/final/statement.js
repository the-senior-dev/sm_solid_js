const format = require("./format");
const calculateTotalAmount = require("./calculateTotalAmount");

function statement(invoice, plays) {
  const { totalAmount, volumeCredits } = calculateTotalAmount(invoice, plays);
  return `
    Statement for ${invoice.customer}\n
    Amount owed is ${format(totalAmount / 100)}\n
    You earned ${volumeCredits} credits\n
  `;
}

module.exports = statement;
