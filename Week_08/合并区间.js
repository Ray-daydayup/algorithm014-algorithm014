/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  /**
   * 先按照区间的左端点排序
   * 然后相邻比较当前右端点和下一个左端点来合并
   */
  if (intervals.length < 2) return intervals
  const arrSorted = intervals.sort((a, b) => a[0] - b[0])
  let current = 0
  let next = 1
  while (next < arrSorted.length) {
    if (arrSorted[current][1] >= arrSorted[next][0]) {
      arrSorted.splice(current, 2, [
        arrSorted[current][0],
        Math.max(arrSorted[current][1], arrSorted[next][1])
      ])
      continue
    }
    current++
    next++
  }
  return arrSorted
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
)
