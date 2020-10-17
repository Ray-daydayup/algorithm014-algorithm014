/**
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  /**
   * 遍历的同时记录索引
   * 一个集合记录已存在重复的字母
   * 一个哈希表按顺序存储不重复的字符串的索引
   */
  const set = new Set()
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    // 是重复的元素则不访问
    if (set.has(s[i])) continue
    if (map.has(s[i])) {
      // 发现重复元素删掉并且添加到集合内
      map.delete(s[i])
      set.add(s[i])
    } else {
      // 记录
      map.set(s[i], i)
    }
  }
  // 空的就是-1
  map.set(-1, -1)
  return map.values().next().value
}
