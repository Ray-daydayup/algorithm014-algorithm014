class Deque {
  constructor() {
    this.store = {}
    this.frontIndex = 0
    this.rearIndex = -1
  }
  size() {
    const gap = this.rearIndex - this.frontIndex
    return gap < 0 ? 0 : gap + 1
  }
  isEmpty() {
    return this.size() === 0
  }
  addRear(element) {
    this.store[++this.rearIndex] = element
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addRear(val)
      return
    }
    this.store[--this.frontIndex] = element
  }
  RemoveFront() {
    if (this.isEmpty()) {
      return
    }
    const result = this.store[this.frontIndex]
    delete this.store[this.frontIndex]
    this.frontIndex++
    return result
  }
  RemoveRear() {
    if (this.isEmpty()) {
      return
    }
    const result = this.store[this.rearIndex]
    delete this.store[this.rearIndex]
    this.rearIndex--
    return result
  }
  front() {
    return this.store[this.frontIndex]
  }
  clear() {
    this.store = {}
    this.frontIndex = 0
    this.rearIndex = -1
  }
}
