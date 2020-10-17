/**
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  /**
   * 每次取p长度的字串判断是否为异位词
   * 即队列，实时记录队列当前对应字母的数目入队出队时修改
   * 比较对应个数是否相等来判断是否为异位词
   */
  // 初始化个数
  const ref = {}
  const count = {}
  for (let i = 0; i < p.length; i++) {
    if (ref[p[i]]) {
      ref[p[i]]++
    } else {
      ref[p[i]] = 1
    }
    count[p[i]] = 0
  }
  // 初始化队列
  for (let i = 0; i < p.length; i++) {
    // console.log(s[i])
    if (count[s[i]] || count[s[i]] === 0) count[s[i]]++
  }
  // console.log(count)
  let idx = 0
  let end = idx + p.length - 1
  const res = []
  while (end < s.length) {
    if (test(count, ref)) res.push(idx)
    // 移动
    idx++
    end++
    // 出队 改变计数
    if (count[s[idx - 1]]) count[s[idx - 1]]--
    // 入队 改变计数
    if (count[s[end]] || count[s[end]] === 0) count[s[end]]++
  }
  return res
  function test(count, ref) {
    // console.log(count, ref)
    for (const key in ref) {
      if (count[key] !== ref[key]) return false
    }
    return true
  }
}

console.log(findAnagrams('cbaebabacd', 'abc'))
