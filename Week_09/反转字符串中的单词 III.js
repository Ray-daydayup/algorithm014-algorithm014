/**
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /**
   * api选手
   */
  return s
    .split(' ')
    .map((item) => item.split('').reverse().join(''))
    .join(' ')
}

var reverseWords = function (s) {
  /**
   * 遍历选手
   * 每个单词反转
   */
  let res = ''
  let word = ''
  for (const c of s) {
    if (c === ' ') {
      // 单词拼接清空
      res += word + c
      word = ''
    } else {
      word = c + word
    }
  }
  // 最后一个单词别忘了
  return res + word
}
console.log(reverseWords(`Let's take LeetCode contest`))
