class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(data) {
        let newNode = new Node(data)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() {
        if (!this.first) { return null }
        let removedNode = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return removedNode.data
    }
}

let q = new Queue()

console.log(q.enqueue('hello'))
console.log(q.enqueue('do'))
console.log(q.enqueue('good'))
console.log(q.enqueue('bye'))

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())