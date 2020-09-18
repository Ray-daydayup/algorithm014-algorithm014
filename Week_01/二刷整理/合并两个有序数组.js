/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 双指针从后往前，分别比较，放入nums1
  // O(m+n)
  let p1 = m - 1
  let p2 = n - 1
  // 从最后一个位置放
  for (let i = m + n - 1; i >= 0; i--) {
    // 防止溢出
    if (p1 < 0 || p2 < 0) {
      console.log(p1, p2)
      nums1[i] = p1 < 0 ? nums2[p2--] : nums1[p1--]
      continue
    }
    // 比较
    if (nums1[p1] >= nums2[p2]) {
      nums1[i] = nums1[p1--]
    } else {
      nums1[i] = nums2[p2--]
    }
  }
  console.log(nums1)
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
