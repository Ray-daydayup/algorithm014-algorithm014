/**
 * https://leetcode-cn.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  /**
   * 二分抽象为一维数组
   */
  const m = matrix.length
  if (m === 0) return false
  const n = matrix[0].length
  let left = 0
  let right = m * n - 1
  let mid
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)
    const temp = matrix[parseInt(mid / n)][mid % n]
    if (temp === target) return true
    if (temp < target) {
      left = mid + 1
      continue
    }
    right = mid - 1
  }
  return false
}

console.log(searchMatrix([[1, 1]], 2))
