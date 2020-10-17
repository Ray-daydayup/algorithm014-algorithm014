/**
 * https://leetcode-cn.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  /**
   * 双指针
   */
  if (s.length < 2) return
  let left = 0
  let right = s.length - 1
  while (left < right) {
    ;[s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}
