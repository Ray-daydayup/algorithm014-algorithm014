/**
 * https://leetcode-cn.com/problems/counting-bits/description/
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  /**
   * 循环计数O(nk)
   */
  const result = []
  for (let i = 0; i < num + 1; i++) {
    result.push(getCount(i))
  }
  return result
  function getCount(n) {
    // 清空最后一个1
    let count = 0
    while (n !== 0) {
      count++
      n = n & (n - 1)
    }
    return count
  }
}
