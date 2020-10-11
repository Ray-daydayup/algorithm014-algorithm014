/**
 * https://leetcode-cn.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  /**
   * 二进制表示仅有一个1
   * 去掉最后一个1为0
   */
  if (n <= 0) return false
  return (n & (n - 1)) === 0
}
