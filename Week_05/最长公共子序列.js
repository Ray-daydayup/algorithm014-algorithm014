/**
 * https://leetcode-cn.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length
  const n = text2.length
  const temp1 = new Array(n).fill(0) // 滚动数组
  const temp2 = new Array(n).fill(0) // 滚动数组
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const left = j < 1 ? 0 : temp1[j - 1]
      const leftTop = j < 1 ? 0 : temp2[j - 1]
      temp2[j] = temp1[j] //改变之前保存一下
      if (text1[i] === text2[j]) {
        temp1[j] = Math.max(left, temp1[j], leftTop + 1)
        continue
      }
      temp1[j] = Math.max(left, temp1[j])
    }
  }
  return temp1[n - 1]
}

console.log(longestCommonSubsequence('abcde', 'ace'))
