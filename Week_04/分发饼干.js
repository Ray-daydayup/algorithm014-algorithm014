/**
 * https://leetcode-cn.com/problems/assign-cookies/description/
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  /**
   * 使用尽量小的饼干去满足胃口小的孩子，这样可获得最多的满足数
   * 首先两者都从小到大排序
   * 两个指针分别指向两个数组的开头，比对两个指针的值
   * 后者大于等于前者则满足，满足时计数
   * 孩子如果满足指针向后+1，否则不动
   * 饼干一定每次+1，无论是否满足
   * 截止条件两个指针任意一个冲出范围
   */
  // 排序
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let count = 0
  let pg = 0
  let ps = 0
  while (pg < g.length && ps < s.length) {
    if (s[ps] >= g[pg]) {
      count++
      pg++
    }
    ps++
  }
  return count
}

console.log(findContentChildren([1, 2, 3], [1, 1]))
