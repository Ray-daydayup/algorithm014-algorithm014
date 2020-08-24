/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
const map = {}
var climbStairs = function (n) {
  // 思路：递归，拆解 f(n) = f(n-1) + f(n-2) 缓存求过的结果,时间复杂度O(n)
  if (n < 2) {
    return 1
  }
  if (map[n]) {
    return map[n]
  }
  const result = climbStairs(n - 1) + climbStairs(n - 2)
  map[n] = result
  return result
}

/***********动态规划 */

var climbStairs = function (n) {
  // 思路：f(n) = f(n-1) + f(n-2),从0和1开始往上找，只需要记住当前的前面两个的值即可，空间复杂度为O(1),时间复杂度为O(n)
  if (n < 2) {
    return 1
  }
  let prev0 = 1
  let prev1 = 1
  for (let i = 2; i <= n; i++) {
    let temp = prev1
    prev1 = prev0 + prev1
    prev0 = temp
  }
  return prev1
}
