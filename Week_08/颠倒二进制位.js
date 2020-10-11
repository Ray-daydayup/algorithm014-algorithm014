/**
 * https://leetcode-cn.com/problems/reverse-bits/
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  /**
   * 每次取最后一位，拼到结果上
   */
  let result = 0
  for (let i = 0; i < 32; i++) {
    result = (result << 1) + (n & 1) // 取最后一位拼上去
    // 删掉最后一位(右移1)
    n >>= 1
  }
  // 转成无符号整型
  return result >>> 0
}
