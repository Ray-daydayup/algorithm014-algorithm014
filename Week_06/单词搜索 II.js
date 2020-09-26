/**
 * https://leetcode-cn.com/problems/word-search-ii/
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  /**
   * 构建一个trie树，然后dfs搜索 回溯
   */
  const trie = Trie.getTrie(words).root
  const result = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(trie, i, j, board)
    }
  }
  return result
  function search(trie, x, y, board) {
    if (trie.word) {
      result.push(trie.word)
      delete trie.word // 防止重复搜索单词
    }
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return
    if (!trie[board[x][y]]) return // 不能找下去就返回
    // 找到了要清除否则会死循环
    const temp = board[x][y]
    board[x][y] = '@'
    for (const [xx, yy] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]) {
      search(trie[temp], x + xx, y + yy, board)
    }
    board[x][y] = temp // 回溯
  }
}
class Trie {
  constructor() {
    // 对象来存储，每个对象的键为对应字符，值为对应的下一层
    this.root = {}
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let current = this.root
    for (const c of word) {
      if (!current[c]) current[c] = {}
      // 向下
      current = current[c]
    }
    current.word = word
  }
  static getTrie(words) {
    const trie = new Trie()
    for (const word of words) {
      trie.insert(word)
    }
    return trie
  }
}
