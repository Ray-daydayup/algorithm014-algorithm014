/**
 * https://leetcode-cn.com/problems/valid-anagram/description/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 记录两个字符串字母的数目，比较是否相等s+ t-
  if (s.length !== t.length) {
    return false
  }
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }
    if (!map[t[i]]) {
      map[t[i]] = -1
    } else {
      map[t[i]]--
    }
    console.log(map)
  }

  return Object.values(map).every((item) => item === 0)
}

console.log(isAnagram('anagram', 'nagaram'))
