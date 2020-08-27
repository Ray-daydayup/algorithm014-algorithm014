/**
 * https://leetcode-cn.com/problems/n-queens/
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  /**
   * 回溯法，从第一行开始放，对应位置影响下一行可以放的位置，
   * 每一个位置可以影响的位置可以用坐标表示左上角为原点,(m,n)为例
   * 1. x=m
   * 2. y=n
   * 3. |x-m| = |y-n|
   * 都不行
   */
  const res = []
  getSolves(0, [], [])
  return res

  function getSolves(line, arr, visited) {
    if (line === n) return res.push([...arr])

    for (let i = 0; i < n; i++) {
      if (!test(line, i, visited)) continue
      visited.push([line, i])
      const head = i > 0 ? '.'.repeat(i) : ''
      arr.push(head + 'Q' + '.'.repeat(n - i - 1))
      getSolves(line + 1, arr, visited)
      arr.pop()
      visited.pop()
    }
  }
  /**
   * 校验
   * @param {number} x 横坐标
   * @param {number} y 纵坐标
   * @param {[][x,y]} visited 坐标集合
   */
  function test(x, y, visited) {
    if (visited.length === 0) return true
    return !visited.some(([m, n]) => {
      return x === m || y === n || Math.abs(x - m) === Math.abs(y - n)
    })
  }
}
