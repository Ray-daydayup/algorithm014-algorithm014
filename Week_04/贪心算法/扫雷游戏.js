/**
 * https://leetcode-cn.com/problems/minesweeper/description/
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  /**
   * 深度优先
   * 1. 如果踩雷直接返回
   * 2. 如果为E则查找周围有没有雷，有雷要+1，没有雷改成B继续向下找
   */
  const [x, y] = click
  if (board[x][y] === 'M') {
    board[x][y] = 'X'
    return board
  }
  dfs(board, x, y)
  return board

  function dfs(board, x, y) {
    const count = getCount(board, x, y)
    if (count > 0) {
      board[x][y] = String(count)
      return
    }
    board[x][y] = 'B'
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (
          x + i < 0 ||
          x + i >= board.length ||
          y + j < 0 ||
          y + j >= board[0].length ||
          (i === j && i === 0) ||
          board[x + i][y + j] !== 'E'
        ) {
          continue
        }
        dfs(board, x + i, y + j)
      }
    }
  }
  function getCount(board, x, y) {
    let count = 0
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (
          x + i < 0 ||
          x + i >= board.length ||
          y + j < 0 ||
          y + j >= board[0].length ||
          (i === j && i === 0)
        ) {
          continue
        }
        if (board[x + i][y + j] === 'M') count++
      }
    }
    return count
  }
}

console.log(
  updateBoard(
    [
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'M', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E']
    ],
    [3, 0]
  )
)
