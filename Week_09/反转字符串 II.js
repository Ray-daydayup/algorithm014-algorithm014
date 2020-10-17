/**
 * https://leetcode-cn.com/problems/reverse-string-ii/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  /**
   * 1.取片段(长度判断)
   * 2.反转
   * 3.拼接
   */
  if (k === 1) return s
  const characters = s.split('')
  // 1. 取片段
  let start = 0
  while (start < s.length) {
    // 计算并判断边界
    let end = start + k - 1
    if (end >= s.length) end = s.length - 1
    // 反转
    reverseStr(start, end)
    // 下一个片段
    start += 2 * k
  }
  return characters.join('')

  function reverseStr(start, end) {
    /**
     * 双指针
     */
    if (start === end) return
    let left = start
    let right = end
    while (left < right) {
      ;[characters[left], characters[right]] = [
        characters[right],
        characters[left]
      ]
      left++
      right--
    }
  }
}
