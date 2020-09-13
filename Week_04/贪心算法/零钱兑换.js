/**
 * https://leetcode-cn.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
  /**
   * 假设 n = amount，问题求解的目标是 f(n)的求解结果
   * 那么假设最后一枚硬币取值为 k，那么 f(n) = f(n-k) + 1
   * k 为 coins的元素，假设 coins 的长度为 m
   * 那么需要求 m 个f(n-k)的最小值
   * 再利用哈希表缓存已经求过的值
   * (通过)时间复杂度，O(mn)
   */
  const map = new Map()
  const count = solve(coins, amount)
  if (count === Infinity) return -1
  return count
  function solve(coins, amount) {
    if (map.has(amount)) {
      return map.get(amount)
    }
    if (amount === 0) return 0
    if (amount < 0) return Infinity // 小于0那么说明为无效
    let min = Infinity
    for (let i = 0; i < coins.length; i++) {
      const prev = solve(coins, amount - coins[i])
      if (min > prev) min = prev
    }
    map.set(amount, min + 1)
    return min + 1
  }
}

console.log(coinChange([2], 3))
console.log(coinChange([1, 2, 5], 11))
