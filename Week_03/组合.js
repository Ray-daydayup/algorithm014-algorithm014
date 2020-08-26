/**
 * https://leetcode-cn.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 找重复子问题，一共k个位置，第1个位置选择范围 [1,n+1)，第2个位置的选择取决与第1个位置的选择有关，假设第1个位置选择i,那么第2个位置的选择范围为[i+1,n+1),以此类推
  const result = []
  getCombines(1, 0, [])
  return result
  /**
   *
   * @param {number} i 第i个位置
   * @param {number} v 第i-1个位置的取值
   * @param {number} arr 存放元素
   */
  function getCombines(i, v, arr) {
    if (arr.length === k) {
      return result.push([...arr]) // 引用类型
    }

    for (let j = v + 1; j < n + 1; j++) {
      arr.push(j)
      getCombines(i + 1, j, arr)
      arr.pop() // 把吃进去的吐出来，那么回到这一层的时候，这个数组又回到了上一个位置的状态
    }
  }
}
