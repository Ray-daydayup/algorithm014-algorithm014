/**
 * https://leetcode-cn.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //反转
  nums.splice(0, 0, ...nums.splice(nums.length - k))
}
const nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3)
console.log(nums)
