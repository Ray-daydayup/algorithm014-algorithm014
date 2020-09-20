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
   * 优化：相当于两个不断滑动的窗口，约等于两个相对的栈
   * 左边的栈一直入栈，右边的栈一直出栈
   * 左边的栈记录最小值，每次比对差值
   * 右边栈记录最大值，每次比对差值
   * 求两者之和的最大
   * 一次遍历
   */
  if (prices.length < 2) return 0
  let leftSum = 0
  let rightSum = 0
  let max = Math.max(...prices) // 初始化右边的最大值
  let min = prices[0] // 初始化左边的最小值
  for (let i = 1; i < prices.length; i++) {}
}
// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
// console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([2, 1, 2, 0, 1]))
