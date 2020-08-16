## 数组

- 数组（Array）是一种**线性表数据结构**。它用一组**连续的内存空间**，来存储一组具有相同类型的数据。（线性表：数组，链表、队列、栈；非线性表：二叉树、堆、图等）
- 随机访问，查找时间复杂度$O(1)$
- 插入删除需要搬移数据，时间复杂度$O(n)$

## 链表

- 链表**并不需要一块连续的内存空间**，它通过“指针”**将一组零散的内存块串联起来使用**

### 单链表

![img](_v_images/b93e7ade9bb927baad1348d9a806ddeb.jpg)

- 将所有的**结点**串起来，每个链表的结点除了存储数据之外，还需要记录链上的下一个结点的地址。
- 尾结点特殊的地方是：指针不是指向下一个结点，而是指向一个空地址 `NULL`，表示这是链表上最后一个结点。
- 插入删除$O(1)$
- 链表随机访问的性能没有数组好，需要 O(n) 的时间复杂度。

### 代码实现

```js
class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		// 初始化头结点，存储长度
		this.head = new Node(0)
	}
	/**
	 * 尾部插入一个新元素
	 *
	 * @param {*} value
	 * @memberof LinkedList
	 */
	push(value) {
		const node = new Node(value)
		let lastNode = this.head
    // 查找最后一个结点
		while (lastNode.next !== null) {
			lastNode = lastNode.next
		}
		lastNode.next = node
		this.head.value++
	}
	/**
	 * 获取某个位置的元素
	 *
	 * @param {*} index
	 * @returns
	 * @memberof LinkedList
	 */
	getElementAt(index) {
		if (index > 0 && index <= this.head.value) {
			let targetNode = this.head
			for (let i = 1; i <= index; i++) {
				targetNode = targetNode.next
			}
			return targetNode
		}
		return null
	}
	insert(value, index) {
		const targetNode = this.getElementAt(index) // 查找要插入的位置
		const prevNode = index === 1 ? this.head : this.getElementAt(index - 1)
		if (targetNode === null) {
			return false
		}
		const newNode = new Node(value)
		newNode.next = targetNode
		prevNode.next = newNode
		this.head.value++
		return true
	}
	/**
	 * 删除某位置的元素
	 *
	 * @param {number} index
	 * @returns
	 * @memberof LinkedList
	 */
	removeAt(index) {
		const targetNode = this.getElementAt(index)
		const prevNode = index === 1 ? this.head : this.getElementAt(index - 1)
		if (targetNode === null) {
			return false
		}

		prevNode.next = targetNode.next
		this.head.value--
		return true
	}
	isEmpty() {
		return this.size() === 0
	}
	size() {
		return this.head.value
	}
}
```

### 循环链表

![img](_v_images/452e943788bdeea462d364389bd08a17.jpg)

- **循环链表是一种特殊的单链表**

### 双向链表

![img](_v_images/cbc8ab20276e2f9312030c313a9ef70b.jpg)

- 双向链表可以支持 $O(1) $时间复杂度的情况下找到前驱结点，正是这样的特点，也使双向链表在某些情况下的插入、删除等操作都要比单链表简单、高效。
- **删除给定指针指向的结点**
- 在链表的某个指定结点前面插入一个结点，双向链表比单链表有很大的优势。双向链表可以在 O(1) 时间复杂度搞定，而单向链表需要 O(n) 的时间复杂度。

### 双向循环链表

![img](_v_images/d1665043b283ecdf79b157cfc9e5ed91.jpg)

## 跳表

![img](_v_images/492206afe5e2fef9f683c7cff83afa65.jpg)

- 是一种各方面性能都比较优秀的**动态数据结构**，可以支持快速地插入、删除、查找操作，写起来也不复杂，甚至可以替代红黑树**（Red-black tree）**。
- **链表加多级索引的结构，就是跳表**
- 跳表中查询任意数据的时间复杂度就是 $O(logn)$
- 空间复杂度还是 O(n)
- 跳表这个动态数据结构，不仅支持查找操作，还支持动态的插入、删除操作，而且**插入、删除操作的时间复杂度也是 O(logn)**。
- **跳表索引动态更新**,如果不更新索引，就有可能出现某 2 个索引结点之间数据非常多的情况。**极端情况下，跳表还会退化成单链表**。

## 题目解析

- 遍历数组的常见算法，双重for

```js
for (let i = 0; i < height.length; i++) {
    for (let j = i+1; j < height.length; j++) {
      // do something
    }
}
```

- 一维坐标系的范围问题(指针，缩小边界)
- 双指针左右夹逼的方法
- 优化的思想：升维，空间换时间
- 递归的求解：找最近重复子问题

## 栈

### 定义

- **后进者先出，先进者后出**，这就是典型的“栈”结构。
- 栈是**一种“操作受限”的线性表**，只允许在一端插入和删除数据
- 添加、删除皆为 O(1)

### 栈的代码实现

方法：

1. pop：弹出栈顶元素
2. push：入栈
3. peek：获取栈顶元素
4. clear：清空栈
5. isEmpty：栈是否为空
6. size：栈的大小，元素个数

#### 基于数组的实现

```js
class Stack {
  constructor() {
    this.store = []
  }
  push(element) {
    this.store.push(element)
  }
  pop() {
    return this.store.pop()
  }
  peek() {
    return this.store[this.store.length - 1]
  }
  isEmpty() {
    return this.store.length === 0
  }
  clear() {
    this.store = []
  }
  size() {
    return this.store.length
  }
}

```

#### 基于对象的实现栈

- 创建一个Stack类最简单的方式是使用一个数组来存储其元素。在使用数组时，大部分方法的时间复杂度是 `O(n)`。
- 数组是一个有序集合，为了保证，排列有序，会占用更多内存。

```js
class Stack {
  constructor() {
    this.count = 0
    this.store = {}
  }
  push(element) {
    this.store[this.count] = element
    this.count++
  }
  pop() {
    if (this.isEmpty()) {
      return
    }
    const result = this.store[this.count - 1]
    delete this.store[this.count - 1]
    this.count--
    return result
  }
  peek() {
    return this.store[this.count - 1]
  }
  clear() {
    this.count = 0
    this.store = {}
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
}

```

## 队列

### 普通队列

- **先进者先出**，这就是典型的“队列”
- 队列跟栈一样，也是**一种操作受限的线性表**数据结构。
- 添加、删除皆为 O(1)

#### 普通队列代码实现

方法：

1. enqueue：队尾入队
2. dequeue：队首出队
3. front： 队首元素
4. rear： 队尾元素
5. clear： 清空队列
6. size：返回长度
7. isEmpty：判空

```js
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
```

## 双端队列

- 双端队列是指允许两端都可以进行入队和出队操作的队列
- 插入和删除都是 O(1) 操作

### 代码实现

```js
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

```

## 优先队列

- 插入操作：O(1)
- 取出操作：O(logN) - 按照元素的优先级取出
- 底层具体实现的数据结构较为多样和复杂：heap、bst、treap
