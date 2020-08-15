/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
const map = new Map()
var climbStairs = function (n) {
  // 思路：递归，拆解 f(n) = f(n-1) + f(n-2) 缓存求过的结果
  if (map.has(n)) {
    return map.get(n)
  }
  if (n < 2) {
    return 1
  }
  const result = climbStairs(n - 1) + climbStairs(n - 2)
  if (!map.has(n)) {
    map.set(n, result)
  }
  return result
}

// 递归改成循环
