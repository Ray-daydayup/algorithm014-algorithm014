/**
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  /**
   * 自带函数parseInt
   */
  const limit = 2 ** 31
  const n = parseInt(s)
  if (isNaN(n)) return 0
  if (n < -limit) return -limit
  if (n > limit - 1) return limit - 1
  return n
}
