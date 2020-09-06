/**
 * https://leetcode-cn.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  /**
   * 某个位置索引为 k ，如果这个位置能到达末尾
   * 那么能到达这个位置 k 的位置也能到达末尾
   * 假设跳到到末尾元素的步数为 m，前一个元素的位置是 i
   * n为数组的最后的索引,i+m=n,m的范围是[1,nums[i]]
   * 那么1=<n-i<=nums[i],因为n-i>=1恒成立，所以只要满足
   * n-i<=nums[i],就可以到达位置n
   * 同理只要i-k<=nums[k]，那么k就可以到达i，k也就可以到达n
   * 那么这样相当于一个树形结构，节点的值就是数组索引
   * 只要这棵树的子叶节点有起点就是true的
   * 这棵树父节点一定是大于子节点的，而且数组的索引是递增的
   *     5
   *  /  | \
   * 1   3  4
   * 就像上面这样，如果前面的结点0无法到达1，那么他一定到达不了3和4
   * 因为他太短了
   * 那么我们每次获得可以到当前位置的前一个位置的最小节点，
   * 然后往前面去找子节点，一直到最后有满足的就为true，没有就false
   * 截至条件就是找不到到达当前节点的值
   * 那么我们从后往前开始，先找最后位置的前一个位置最小的那个
   * 再往前找
   */
  const index = findMinIndex(nums, nums.length - 1)
  return index === 0
  function findMinIndex(nums, n) {
    for (let i = 0; i < n; i++) {
      if (n - i <= nums[i]) {
        return findMinIndex(nums, i) // 找到前面的继续往下找
      }
    }
    return n // 找不到前面的直接返回自身
  }
}
