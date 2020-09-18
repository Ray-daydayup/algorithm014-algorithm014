/**
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  /**
   * 从(0,0)到(i,j)的路径数f(i,j) = f(i-1,j) + f(i,j-1)
   * 只需要上一列的值，滚动数组
   */
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const temp = new Array(n).fill(0)
  temp[0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 障碍物
      if (obstacleGrid[i][j] === 1) {
        temp[j] = 0
        continue
      }
      if (j < 1) continue // 跳过左边边界
      temp[j] += temp[j - 1]
    }
  }
  return temp[n - 1]
}

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
)
