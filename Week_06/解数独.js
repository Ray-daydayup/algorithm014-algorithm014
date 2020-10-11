/**
 * https://leetcode-cn.com/problems/sudoku-solver/#/description
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const m = board.length
  const n = board[0].length
  const rows = []
  const cols = []
  const boxes = new Array(m).fill(1).map(() => new Set())
  // 建立字典
  for (let i = 0; i < m; i++) {
    rows.push(new Set())
    for (let j = 0; j < n; j++) {
      if (!cols[j]) cols.push(new Set())
      if (board[i][j] === '.') continue
      const boxId = parseInt(i / 3) * 3 + parseInt(j / 3)
      rows[i].add(board[i][j])
      cols[j].add(board[i][j])
      boxes[boxId].add(board[i][j])
    }
  }
  // 是否 完结
  let flag = false
  return dfs(0, 0)
  function dfs(row, col) {
    // 完结
    if (row >= m) {
      flag = true
      return
    }
    // 下一行
    if (col >= n) return dfs(row + 1, 0)
    // 下一格子
    if (board[row][col] !== '.') return dfs(row, col + 1)
    // 盒子编号
    const boxId = parseInt(row / 3) * 3 + parseInt(col / 3)
    for (let j = 1; j < 10; j++) {
      // 需要转换一下，存的是字符串
      const str = String(j)
      if (rows[row].has(str)) continue
      if (cols[col].has(str)) continue
      if (boxes[boxId].has(str)) continue
      // 记录
      board[row][col] = str
      rows[row].add(str)
      cols[col].add(str)
      boxes[boxId].add(str)
      // 向下
      dfs(row, col + 1)
      // 回溯，完结了不用回溯
      if (!flag) {
        board[row][col] = '.'
        rows[row].delete(str)
        cols[col].delete(str)
        boxes[boxId].delete(str)
      }
    }
  }
}

solveSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])
