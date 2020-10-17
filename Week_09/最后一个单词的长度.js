/**
 * https://leetcode-cn.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  /**
   * 从后向前遍历计数
   */
  // 去除末尾空格
  const str = s.trimRight()
  if (str === '') return 0
  let count = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') return count
    count++
  }
  return count
}
