/**
 * https://leetcode-cn.com/problems/trapping-rain-water/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // 双指针，一个指向当前的元素另一个找比当前元素高或者相等的元素
  // 找到比当前元素高的元素则计算一次面积，高为当前元素，宽为两指针之差，然后减去两者中间的所有元素的高，然后当前指针跳到高得元素
  // 找不到则当前指针加1，则找到了最高的元素，那么从右往左进行重复上述操作
  let sum = 0
  let p1 = 0
  while (p1 < height.length) {
    let flag = true
    let centerSum = 0 // 遍历的时候顺便求中元素的和
    for (let i = p1 + 1; i < height.length; i++) {
      if (height[p1] <= height[i]) {
        sum += (i - p1 - 1) * height[p1] - centerSum //计算面积
        p1 = i - 1 // 指向当前高的那一个元素，避免最后p1++还要判断
        flag = false
        break
      }
      centerSum += height[i]
    }
    p1++
    if (flag) {
      break
    }
  }
  let p2 = height.length - 1
  while (p2 >= p1) {
    let centerSum = 0 // 遍历的时候顺便求中元素的和
    for (let i = p2 - 1; i >= 0; i--) {
      if (height[p2] <= height[i]) {
        sum += (p2 - i - 1) * height[p2] - centerSum //计算面积
        p2 = i + 1 // 指向当前高的那一个元素，避免最后p1++还要判断
        break
      }
      centerSum += height[i]
    }
    p2--
  }
  return sum
}

console.log(trap([4, 2, 3]))
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
