/**
 * https://leetcode-cn.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 计数哈希
  const map = {}
  strs.forEach((item) => {
    const hash = hashFn(item)
    if (!map[hash]) {
      map[hash] = [item]
    } else {
      map[hash].push(item)
    }
  })
  return Object.values(map)
  function hashFn(str) {
    const arr = new Array(26).fill(0)
    str.split('').forEach((item) => {
      arr[item.charCodeAt() - 97]++
    })
    return arr.join('')
  }
  // console.log(toAscii('ill'))
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
