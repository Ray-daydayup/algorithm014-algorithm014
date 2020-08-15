/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 整体分析：求面积最大，固定宽的大小依次移动计算面积，然后比较得出最大值,双重for
  let max = 0
  for (let i = 1; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      const end = j + i
      if (end >= height.length) {
        break
      }
      const area = Math.min(height[j], height[end]) * i
      if (area > max) {
        max = area
      }
    }
  }
  return max
}

/**
 * 最快的方法
 * 两端往中间收，找相对高度较高的点，才会获得更大的值
 * 数字较小的指针表明其高度低，往内收以寻求更高的高，收的过程中，发现高变小了就继续收不计算面积，如果两边内收发现高都变小了就可以同时收
 */
