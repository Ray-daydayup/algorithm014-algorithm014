/**
 * https://leetcode-cn.com/problems/reverse-pairs/
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  /**
   * 暴力 (超时)
   * 新建一个两倍的数组
   * i指向原数组，j指向新数组 j=i+1
   * 大于则+1
   */
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > 2 * nums[j]) count++
    }
  }
  return count
}

console.log(reversePairs([1, 3, 2, 3, 1]))
