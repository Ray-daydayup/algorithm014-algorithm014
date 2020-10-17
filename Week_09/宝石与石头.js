/**
 * https://leetcode-cn.com/problems/jewels-and-stones/
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  /**
   * 计数然后相加
   */
  const count = {}
  for (const c of S) {
    if (count[c]) {
      count[c]++
      continue
    }
    count[c] = 1
  }
  let sum = 0
  for (const jc of J) {
    sum += count[jc] ? count[jc] : 0
  }
  return sum
}
