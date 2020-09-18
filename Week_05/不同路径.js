/**
 * https://leetcode-cn.com/problems/unique-paths/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  /**
   * 从(0,0)到(i,j)的路径数f(i,j) = f(i-1,j) + f(i,j-1)
   * 只需要上一列的值，滚动数组
   */
  const temp = new Array(n).fill(0)
  temp[0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j < 1) continue
      temp[j] += temp[j - 1]
    }
  }
  return temp[n - 1]
}
