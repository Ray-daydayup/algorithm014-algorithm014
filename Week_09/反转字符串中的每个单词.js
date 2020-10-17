/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /**
   * api
   */
  const words = s.trim().split(/\s+/)
  return words.reverse().join(' ')
}

console.log(reverseWords('  Bob    Loves  Alice   '))
