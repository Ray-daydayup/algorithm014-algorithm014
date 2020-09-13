/**
 * https://leetcode-cn.com/problems/word-ladder/description/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 空间复杂度太大，不能通过
var ladderLength = function (beginWord, endWord, wordList) {
  /**
   * 广度优先，下一层为与当前单词相差一个的单词
   */

  const queue = [[beginWord, 1, wordList]]

  while (queue.length > 0) {
    const [word, step, restWord] = queue.shift()
    if (word === endWord) return step

    const nextWords = getNextWords(word, step, restWord)
    queue.push(...nextWords)
  }
  return 0
  function getNextWords(word, step, wordList) {
    const result = []
    for (let i = 0; i < wordList.length; i++) {
      const flag = compare(word, wordList[i])

      if (flag) {
        const nextList = [...wordList] // 浅拷贝数组，空间复杂度极大
        nextList.splice(i, 1)
        result.push([wordList[i], step + 1, nextList])
      }
    }
    return result
  }
  function compare(a, b) {
    if (a === b) return false
    let count = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count++
      if (count > 1) break
    }
    return count === 1
  }
}

var ladderLength = function (beginWord, endWord, wordList) {
  /**
   * 广度优先，下一层为与当前单词相差一个的单词
   * 优化空间复杂度，利用哈希表记录已经访问过的单词。
   * 如果已经访问过，再访问的话，那么会陷入死循环
   */

  const queue = [[beginWord, 1, wordList]]
  const visited = new Set()
  while (queue.length > 0) {
    const [word, step] = queue.shift()
    if (visited.has(word)) {
      continue
    }
    visited.add(word)
    if (word === endWord) return step

    const nextWords = getNextWords(word, step, visited)
    queue.push(...nextWords)
  }
  return 0
  function getNextWords(word, step, visited) {
    const result = []
    for (let i = 0; i < wordList.length; i++) {
      if (visited.has(wordList[i])) continue
      const flag = compare(word, wordList[i])
      if (flag) {
        result.push([wordList[i], step + 1])
      }
    }
    return result
  }
  function compare(a, b) {
    if (a === b) return false
    let count = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count++
      if (count > 1) break
    }
    return count === 1
  }
}

var ladderLength = function (beginWord, endWord, wordList) {
  /**
   * 广度优先，下一层为与当前单词相差一个的单词
   * 优化空间复杂度，利用哈希表记录已经访问过的单词。
   * 如果已经访问过，再访问的话，那么会陷入死循环
   * 优化时间复杂度，在入队的时候如果碰到目标单词直接返回
   */

  const queue = [[beginWord, 1, wordList]]
  const visited = new Set()
  while (queue.length > 0) {
    const [word, step] = queue.shift()
    if (visited.has(word)) {
      continue
    }
    visited.add(word)
    if (word === endWord) return step

    for (let i = 0; i < wordList.length; i++) {
      if (visited.has(wordList[i])) continue
      const flag = compare(word, wordList[i])

      if (flag) {
        if (wordList[i] === endWord) {
          // 入队的时候返回
          return step + 1
        }
        queue.push([wordList[i], step + 1])
      }
    }
  }
  return 0
  function compare(a, b) {
    if (a === b) return false
    let count = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count++
      if (count > 1) break
    }
    return count === 1
  }
}

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
)
