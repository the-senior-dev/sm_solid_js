const calculateSingleAmount = require("./calculateSingleAmount");

function calculateTotalAmount(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    // add volume credits
    volumeCredits += calculateVolumeCredits(perf.audience, play.type);
    totalAmount += calculateSingleAmount(play, perf);
    // add extra credit for every ten comedy attendees
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);
    // print line for this order
    result += ` ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    } seats)\n`;
  }
  return { totalAmount, volumeCredits };
}

module.exports = calculateTotalAmount;
