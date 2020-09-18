/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /**
   * 最快的方法
   * 两端往中间收，找相对高度较高的点，才会获得更大的值
   * 数字较小的指针表明其高度低，往内收以寻求更高的高，收的过程中，发现高变小了就继续收不计算面积，如果两边内收发现高都变小了就可以同时收
   */
  let p1 = 0
  let p2 = height.length - 1
  let max = 0
  let h = 0
  while (p1 < p2) {
    // 计算面积
    const temp = Math.min(height[p1], height[p2])
    if (temp >= h) {
      h = temp
      const area = (p2 - p1) * h
      if (area >= max) max = area
    }
    if (height[p1] <= height[p2]) {
      p1++
    } else {
      p2--
    }
  }
  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
