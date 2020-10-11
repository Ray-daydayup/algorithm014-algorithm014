// 错误的
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
    while (parent[root] !== root) {
      root = parent[root]
    }
    // 压缩路径
    while (parent[p] !== p) {
      let x = p
      p = this.parent[p]
      this.parent[x] = root
    }
    return root
  }

  union(p, q) {
    let rootP = find(p)
    let rootQ = find(q)
    if (rootP === rootQ) return
    this.parent[rootP] = rootQ
    this.count--
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
