/**
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const arr = n.toString(2).match(/1/g)
  return arr ? arr.length : 0
}
var hammingWeight = function (n) {
  // 清空最后一个1
  let count = 0
  while (n !== 0) {
    count++
    n = n & (n - 1)
  }
  return count
}
