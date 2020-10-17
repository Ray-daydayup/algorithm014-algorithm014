/**
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  /**
   * 每次取一位进行对比
   * 以找到或某个单词结束为终止条件
   */
  if (strs.length === 0) return ''
  let commonPrefix = ''
  let idx = 0
  while (true) {
    // 到头了就直接返回
    if (!strs[0][idx]) return commonPrefix
    for (let i = 1; i < strs.length; i++) {
      // 到头了就直接返回
      if (!strs[i][idx]) return commonPrefix
      // 不相等直接返回
      if (strs[i][idx] !== strs[0][idx]) return commonPrefix
    }
    // 都相等了
    commonPrefix += strs[0][idx]
    idx++
  }
}
