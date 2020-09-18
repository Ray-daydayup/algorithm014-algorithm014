/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/#/description
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 遍历一次即可，只要记住当前的最小值，计算f(i)-min的最大值
   * 然后随时更新最小值
   */
  let min = prices[0]
  let sum = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > min) {
      // 计算差值
      const temp = prices[i] - min
      if (temp > sum) sum = temp
    } else {
      // 更新最小值
      min = prices[i]
    }
  }
  return sum
}

console.log(maxProfit([7, 6, 4, 3, 2, 1]))
