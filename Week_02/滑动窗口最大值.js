/**
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  /**
   * 思路：返回的各个窗口的最大值，栈顶元素为上一个窗口的最大值
   * 1.先比较滑动出去的元素是否为上一个窗口的最大值，
   * 如果是则求窗口元素的最大值
   * 2. 如果不是上一个窗口的最大值，就比较滑动进来的元素与上一个元素的最大值
   * 拆分：1.遍历 2. 比较 3. 求最大值
   */
  const numbers = [-Infinity, ...nums, -Infinity]
  const result = [-Infinity] // 哨兵
  for (let i = 1; i < numbers.length - k; i++) {
    const end = i + k // slice(start,end),截取到end-1
    let max = result[result.length - 1]
    if (max === numbers[i - 1]) {
      max = Math.max(...numbers.slice(i, end))
    } else {
      max = Math.max(max, numbers[end - 1])
    }
    result.push(max)
  }
  result.shift()
  return result
}
