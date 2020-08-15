class Queue {
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
  enqueue(element) {
    this.store[++this.rearIndex] = element
  }
  dequeue() {
    if (this.isEmpty()) {
      return
    }
    const result = this.store[this.frontIndex]
    delete this.store[this.frontIndex]
    this.frontIndex++
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

const queue = new Queue()

console.log(queue.dequeue())
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.dequeue())
console.log(queue.enqueue(4))
console.log(queue.size(), 'size')
console.log(queue.isEmpty())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.size(), 'size')
console.log(queue.isEmpty())
