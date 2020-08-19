class MyCircularDeque {
  constructor(k) {
    this.capacity = k
    this.frontIndex = 0
    this.rearEnd = 0 // 末尾的下一个位置
    // 空出一个位置index 0
    this.store = {}
  }
  /**
   * Adds an item at the front of Deque. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  insertFront(value) {
    if (this.isFull()) {
      return false
    }
    this.frontIndex = (this.frontIndex - 1 + this.capacity) % this.capacity
    this.store[this.frontIndex] = value
    return true
  }

  /**
   * Adds an item at the rear of Deque. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  insertLast(value) {
    if (this.isFull()) {
      return false
    }
    this.store[this.rearEnd] = value
    this.rearEnd = (this.rearEnd + 1) % this.capacity
    return true
  }

  /**
   * Deletes an item from the front of Deque. Return true if the operation is successful.
   * @return {boolean}
   */
  deleteFront() {
    if (this.isEmpty()) {
      return false
    }
    delete this.store[this.frontIndex]
    this.frontIndex = (this.frontIndex + 1) % this.capacity
    return true
  }

  /**
   * Deletes an item from the rear of Deque. Return true if the operation is successful.
   * @return {boolean}
   */
  deleteLast() {
    if (this.isEmpty()) {
      return false
    }
    delete this.store[this.rearEnd - 1]
    this.rearEnd = (this.rearEnd - 1 + this.capacity) % this.capacity
    return true
  }

  /**
   * Get the front item from the deque.
   * @return {number}
   */
  getFront() {
    if (this.isEmpty()) {
      return -1
    }
    return this.store[this.frontIndex]
  }

  /**
   * Get the last item from the deque.
   * @return {number}
   */
  getRear() {
    if (this.isEmpty()) {
      return -1
    }
    return this.store[this.rearEnd - 1]
  }

  /**
   * Checks whether the circular deque is empty or not.
   * @return {boolean}
   */
  isEmpty() {
    return this.rearIndex === this.frontIndex
  }

  /**
   * Checks whether the circular deque is full or not.
   * @return {boolean}
   */
  isFull() {
    return (this.rearEnd + 1) % this.capacity === this.frontIndex
  }
}
const circularDeque = new MyCircularDeque(3) // 设置容量大小为3
console.log(circularDeque.insertLast(1))
// 返回 true
console.log(circularDeque.insertLast(2)) // 返回 true
console.log(circularDeque.insertFront(3)) // 返回 true
console.log(circularDeque.insertFront(4)) // 已经满了，返回 false
console.log(circularDeque.getRear()) // 返回 2
console.log(circularDeque.isFull()) // 返回 true
console.log(circularDeque.deleteLast()) // 返回 true
console.log(circularDeque.insertFront(4)) // 返回 true
console.log(circularDeque.getFront())
console.log(circularDeque.store)
