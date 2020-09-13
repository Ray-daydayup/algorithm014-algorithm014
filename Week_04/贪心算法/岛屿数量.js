/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  /**
   * 深度优先，遇到1就往下找，把所有访问过的1置零，依次深度优先搜索完成就是一个岛
   */
  if (grid.length === 0) return 0
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        dfs(grid, i, j)
      }
    }
  }
  return count

  function dfs(grid, x, y) {
    if (grid[x][y] === '0') return
    grid[x][y] = '0'

    if (x - 1 >= 0) dfs(grid, x - 1, y)
    if (y - 1 >= 0) dfs(grid, x, y - 1)
    if (y + 1 < grid[0].length) dfs(grid, x, y + 1)
    if (x + 1 < grid.length) dfs(grid, x + 1, y)
  }
}

console.log(
  numIslands([
    ['1', '1', '1'],
    ['0', '1', '0'],
    ['1', '1', '1']
  ])
)
