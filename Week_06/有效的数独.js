/**
 * https://leetcode-cn.com/problems/valid-sudoku/description/
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  /**
   * 三个数组，每个数组代表行、列、子数独
   * 每个元素用set
   */
  const m = board.length
  const n = board[0].length
  const rows = []
  const cols = []
  const boxes = new Array(m).fill(1).map(() => new Set())

  for (let i = 0; i < m; i++) {
    rows.push(new Set())
    for (let j = 0; j < n; j++) {
      if (!cols[j]) cols.push(new Set())
      if (board[i][j] === '.') continue
      if (rows[i].has(board[i][j])) return false
      if (cols[j].has(board[i][j])) return false
      const boxId = parseInt(i / 3) * 3 + parseInt(j / 3)
      // console.log(boxId, ':', boxes.length - 1)
      // if (!boxes[boxId]) boxes.push(new Set())
      // console.log(i, j, boxId, board[i][j])
      if (boxes[boxId].has(board[i][j])) return false
      rows[i].add(board[i][j])
      cols[j].add(board[i][j])
      boxes[boxId].add(board[i][j])
    }
  }
  return true
}

console.log(
  isValidSudoku([
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
)
