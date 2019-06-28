
class Node {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(data, priority) {
    const newNode = new Node(data, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp() {
    let index = this.values.length - 1
    const element = this.values[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (element.priority >= parent.priority) { break }
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2

      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < element.priority)
          swap = leftChildIdx
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx
        }
      }

      if (!swap) {
        break
      }

      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
} //end priorityQueue

let ER = new PriorityQueue()

ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)

console.log(ER)

console.log(ER.dequeue())
console.log(ER)

console.log(ER.dequeue())
console.log(ER)

console.log(ER.dequeue())
console.log(ER)

console.log(ER.dequeue())
console.log(ER)