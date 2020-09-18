/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 双指针，两者相差1，从左到右找，
   * 后者大于前者，计算一次利润，然后两者同时+1，
   * 其实就是所有上升之和
   */
  let sum = 0
  let p1 = 0
  let p2 = 1
  while (p2 < prices.length) {
    if (prices[p2] > prices[p1]) {
      sum += prices[p2] - prices[p1]
    }
    p1++
    p2++
  }
  return sum
}
