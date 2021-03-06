/**
 * https://leetcode-cn.com/problems/friend-circles/
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  /**
   * 并查集
   * 每个人为一个集合，将互为朋友的人合为一个集合
   * 最后集合的个数为答案
   */
  // 每个人为一个集合
  const unionSet = new UnionFind(M.length)
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[0].length; j++) {
      //将互为朋友的人合为一个集合
      if (M[i][j] === 1) unionSet.union(i, j)
    }
  }
  return unionSet.count
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
