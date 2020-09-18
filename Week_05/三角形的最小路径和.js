/**
 * https://leetcode-cn.com/problems/triangle/
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  /**
   * 分析：定义状态方程dp[i][j]当前的最小路径总和
   * dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j])
   */
  const m = triangle.length
  const n = triangle[m - 1].length
  const temp1 = new Array(n).fill(Infinity) // 滚动数组存上一行的状态
  const temp2 = new Array(n).fill(Infinity) // 由于前面会改变，用来保存左上的那个值
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const leftTop = j < 1 ? Infinity : temp2[j - 1]
      temp2[j] = temp1[j] // 改变前暂存
      const min = Math.min(temp1[j], leftTop)
      temp1[j] = (min === Infinity ? 0 : min) + triangle[i][j]
    }
  }
  return Math.min(...temp1)
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
