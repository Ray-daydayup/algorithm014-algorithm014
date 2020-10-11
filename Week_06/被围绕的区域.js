/**
 * https://leetcode-cn.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  /**
   * 建立并查集，边界的 'O' 为一个集合
   * 并查集查完之后只要不属于边界集合的0就变为x
   */
  const m = board.length
  if (m === 0) return
  const n = board[0].length
  // 最后一个存储边界的集合
  const unionSet = new UnionFind(m * n + 1)
  const outer = m * n
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 'O') continue
      // 边界上的和outer合并
      const index = getIndex(i, j)
      if (i === 0 || j === 0 || i === m - 1 || j === n - 1) {
        unionSet.union(index, outer)
      }
      // 合并上下左右
      if (i > 1 && board[i - 1][j] === 'O')
        unionSet.union(index, getIndex(i - 1, j))
      if (i < m - 1 && board[i + 1][j] === 'O')
        unionSet.union(index, getIndex(i + 1, j))
      if (j > 1 && board[i][j - 1] === 'O')
        unionSet.union(index, getIndex(i, j - 1))
      if (j < n - 1 && board[i][j + 1] === 'O')
        unionSet.union(index, getIndex(i, j + 1))
    }
  }
  const outerRoot = unionSet.find(outer)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] !== 'O') continue
      const index = getIndex(i, j)
      // 非外部集合置X
      if (outerRoot === unionSet.find(index)) continue
      board[i][j] = 'X'
    }
  }
  function getIndex(i, j) {
    return i * n + j
  }
}
class UnionFind {
  constructor(n) {
    this.count = n
    this.parent = new Array(n)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
    }
  }

  find(p) {
    let root = p
    // 找到集合代表，根节点
    while (this.parent[root] !== root) {
      root = this.parent[root] // 往上找
    }
    // 路径压缩
    while (this.parent[p] !== p) {
      let x = p
      p = this.parent[p] // 向上找
      this.parent[x] = root // 压缩该节点
    }
    return root
  }
  /**
   * 合并两个元素所在的集合
   * @param {*} p
   * @param {*} q
   */
  union(p, q) {
    const rootP = this.find(p)
    const rootQ = this.find(q)
    if (rootP === rootQ) return
    this.parent[rootP] = rootQ
    this.count-- // 集合数-1
  }
}
