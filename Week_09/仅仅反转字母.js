/**
 * https://leetcode-cn.com/problems/reverse-only-letters/
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  /**
   * 双指针，遇到非字母跳过
   */
  // 哨兵 因为第一位也要检测
  const characters = ['', ...s.split(''), '']
  let left = 0
  let right = characters.length - 1
  while (left < right) {
    ;[characters[left], characters[right]] = [
      characters[right],
      characters[left]
    ]
    left++
    right--
    // 跳过
    while (/[^A-Za-z]/.test(characters[left])) {
      left++
    }
    while (/[^A-Za-z]/.test(characters[right])) {
      right--
    }
  }
  return characters.join('')
}
