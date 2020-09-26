/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 可以拆成两个单次购买问题
   * 只卖一次获得f1
   * 卖两次则拆成两个数组去实现，获取两者之和最大值
   * 超时
   */
  let max = 0
  for (let i = -1; i < prices.length - 1; i++) {
    const sum =
      getMaxOne(prices.slice(0, i < 0 ? 0 : i)) +
      getMaxOne(prices.slice(i, prices.length))
    console.log('---------------')
    if (sum > max) max = sum
  }
  return max
  function getMaxOne(prices) {
    if (prices.length < 2) return 0
    let max = 0
    prices.reduce((a, b) => {
      let min = a
      if (a > b) {
        min = b
      } else {
        let gap = b - a
        if (max < gap) max = gap
      }
      return min
    })
    console.log(prices, max)
    return max
  }
}

var maxProfit = function (prices) {
  /**
   * 1. 多阶段决策、无后效性、重复子问题
   * 2. 重复子问题:求前n个和前n-1个有关，那么f(n) = f(n-1) + (?)
   * 3. 先定义状态，前一个状态决定着当前的状态，前一个状态如果是买入，当前状态只能是卖出或持有；还有交易次数的限制。那么定义f(n,)
   */
}
// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
// console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([2, 1, 2, 0, 1]))
