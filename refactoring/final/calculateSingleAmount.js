function calculateSingleAmount(play, perf) {
  let amount = 0;
  switch (play.type) {
    case "tragedy":
      amount = 40000;
      if (perf.audience > 30) {
        amount += 1000 * (perf.audience - 30);
      }
      break;
    case "comedy":
      amount = 30000;
      if (perf.audience > 20) {
        amount += 10000 + 500 * (perf.audience - 20);
      }
      amount += 300 * perf.audience;
      break;
    default:
      throw new Error(`unknown type: ${play.type}`);
  }
  return amount;
}

module.exports = calculateSingleAmount;
