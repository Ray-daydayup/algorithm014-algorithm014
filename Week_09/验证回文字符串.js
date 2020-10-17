/**
 * https://leetcode-cn.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  /**
   * 双指针从两端对比，遇见非字母则跳过
   */
  // 哨兵，预防首尾存在非法字符
  const str = '0' + s + '0'
  let left = 0
  let right = str.length - 1

  while (left < right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false
    // 向下
    left++
    right--
    // 跳过
    while (/\W/.test(str[left]) || str[left] === '_') {
      left++
    }

    while (/\W/.test(str[right]) || str[right] === '_') {
      right--
    }
  }
  return true
}

console.log(isPalindrome('ab_a'))
