/**
 * https://leetcode-cn.com/problems/valid-palindrome-ii/
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  /**
   * 双指针，遇到不相同跳过，当作删除一位，可能左边，可能右边
   * 记录删除位数
   * 递归
   */
  return valid(0, s.length - 1, 0)

  function valid(left, right, count) {
    if (left >= right) return true
    if (s[left] === s[right]) {
      return valid(left + 1, right - 1, count)
    }
    // 如果计数已经为1，那么不正确
    if (count === 1) return false
    // 左右减掉一个是否满足
    return (
      valid(left + 1, right, count + 1) || valid(left, right - 1, count + 1)
    )
  }
}
