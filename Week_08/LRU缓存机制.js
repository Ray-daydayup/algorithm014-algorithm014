/**
 * https://leetcode-cn.com/problems/lru-cache/#/
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  /**
   * 利用map顺序
   */
  this.map = new Map()
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let val = -1
  if (this.map.has(key)) {
    val = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, val)
  }
  return val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.map.has(key) && this.map.size === this.capacity) {
    const firstKey = this.map.keys().next().value
    console.log(firstKey)
    if (firstKey !== key) this.map.delete(firstKey)
  }
  if (this.map.has(key)) this.map.delete(key)
  this.map.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
