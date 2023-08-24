/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfixAmount = 0;
  let buyIdx = 0;
  for (let sellIdx = 0; sellIdx < prices.length; sellIdx++) {
    const sellPrice = prices[sellIdx];
    const buyPrice = prices[buyIdx];
    if (sellPrice <= buyPrice) {
      buyIdx = sellIdx;
      continue;
    }
    const currentProfix = sellPrice - buyPrice;
    if (currentProfix > maxProfixAmount) {
      maxProfixAmount = currentProfix;
    }
  }
  return maxProfixAmount;
};