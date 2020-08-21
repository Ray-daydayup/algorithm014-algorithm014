/**
 * https://leetcode-cn.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 维护一个小顶堆，以频次为基准
// 1.建立哈希表 2. 维护小顶堆
var topKFrequent = function (nums, k) {
  const minHeap = new MinHeap(nums)
  const map = minHeap.map
  const numbers = Array.from(map.keys())
  for (let i = 0; i < numbers.length; i++) {
    if (i < k) {
      minHeap.insert(numbers[i])
      continue
    }

    if (map.get(numbers[i]) > minHeap.exact()) {
      // minHeap.insert(numbers[i])
      minHeap.deleteMin(numbers[i])
    }
  }
  return minHeap.heap
}

function getMap(arr) {
  const result = new Map()
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (result.has(item)) {
      let count = result.get(item) + 1
      result.set(item, count)
      continue
    }
    result.set(item, 1)
  }
  return result
}

class MinHeap {
  constructor(nums) {
    this.map = getMap(nums)
    this.heap = []
  }
  exact() {
    return this.map.get(this.heap[0])
  }
  insert(val) {
    this.heap.push(val)
    heapUp(this.heap, this.map)
  }
  deleteMin(val) {
    this.heap[0] = val
    // this.heap.pop()
    heapDown(this.heap, this.map)
  }
}
function heapUp(heap, map) {
  let i = heap.length - 1
  let temp = heap[i]
  while (i > 0) {
    const parentIndex = Math.floor((i - 1) / 2)
    const parent = heap[parentIndex]
    if (map.get(temp) > map.get(parent)) {
      break
    }
    heap[i] = parent
    i = parentIndex
  }
  heap[i] = temp // 最后赋值
}

function heapDown(heap, map) {
  let i = 0
  let temp = heap[i]
  while (2 * i + 1 < heap.length) {
    let min = 2 * i + 1
    if (map.get(heap[2 * i + 1]) > map.get(heap[2 * i + 2])) {
      min = 2 * i + 2
    }
    if (map.get(temp) < map.get(heap[min])) {
      break
    }
    heap[i] = heap[min]
    i = min
  }
  heap[i] = temp // 最后赋值
}

console.log(
  topKFrequent(
    [5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3],
    3
  )
)
