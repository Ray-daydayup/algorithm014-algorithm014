/**
 * https://leetcode-cn.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
// 之前的深度优先解法
var numIslands = function (grid) {
  /**
   * 深度优先，遇到1就往下找，把所有访问过的1置零，依次深度优先搜索完成就是一个岛
   */
  const m = grid.length
  if (m === 0) return 0
  const n = grid[0].length
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
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

// 并查集

var numIslands = function (grid) {
  /**
   * 初始化一个并查集，每个点都是一个集合
   * 只需要关心的应该是值为1的集合的个数
   */
  const m = grid.length
  if (m === 0) return 0
  const n = grid[0].length
  const unionSet = new UnionFind(m * n)
  let zeroCount = 0 // 计算0的个数
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        const index = getIndex(i, j)
        console.log('index', i, j, index)
        if (i > 1 && grid[i - 1][j] === '1')
          unionSet.union(index, getIndex(i - 1, j))
        if (i < m - 1 && grid[i + 1][j] === '1')
          unionSet.union(index, getIndex(i + 1, j))
        if (j > 1 && grid[i][j - 1] === '1')
          unionSet.union(index, getIndex(i, j - 1))
        if (j < n - 1 && grid[i][j + 1] === '1')
          unionSet.union(index, getIndex(i, j + 1))
      } else {
        zeroCount++
      }
    }
  }
  return unionSet.count - zeroCount
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

console.log(
  numIslands([
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '0', '1'],
    ['1', '1', '1', '0', '1']
  ])
)
