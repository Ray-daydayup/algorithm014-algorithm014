/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  /**
   * 枚举高，计算以当前高的矩形的面积
   * 步骤拆分：1.计算宽 2.计算并比较面积更改最大面积
   * 思路：维护一个单调栈，存储对应的高的下标，单调递增的（对应的高是单调递增的）
   * 入栈条件：当前高比栈顶元素对应的高大时候
   * 出栈条件：当前的高比栈顶元素对应的高小的时候，弹出栈顶元素
   * 宽度的计算：1.左边界为栈顶元素 2.右边界为当前元素的下标
   * 注意点：出栈意味着出栈元素的高对应的面积已经计算出来了出栈之后再计算宽度，因为出栈之后的栈顶才为左边界
   * 当前高与栈顶元素相等时，把栈顶元素出栈，把当前元素入栈，因为计算左右边界是以栈顶元素和当前指针为准的，相等的高意味着两者是的面积相同
   */
  // 哨兵避免第一个元素的栈空判断和最后一个元素的面积的计算
  // 第一个零避免栈判空和第一个元素的面积的计算更方便
  // 最后的零是为了计算当前栈内所有的高对应的面积
  let max = 0
  const newHeights = [0, ...heights, 0]
  const stack = [0] // 数组模拟栈
  for (let i = 1; i < newHeights.length; i++) {
    const current = newHeights[i]
    while (current < newHeights[stack[stack.length - 1]]) {
      const height = newHeights[stack.pop()]
      const width = i - stack[stack.length - 1] - 1
      const area = width * height
      max = area > max ? area : max
    }
    if (current > newHeights[stack[stack.length - 1]]) {
      stack.push(i)
    }
    if (current === newHeights[stack[stack.length - 1]]) {
      stack.pop()
      stack.push(i)
    }
  }
  return max
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
