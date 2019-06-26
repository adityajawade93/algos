class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(data) {
        let newNode = new Node(data)
        if (!this.first) {
            this.first = newNode
            this.last = this.first
        } else {
            let currentFirst = this.first
            this.first = newNode
            this.first.next = currentFirst
        }
        return ++this.size
    }

    pop() {
        if (!this.first) {
            return null
        }
        let popedNode = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = popedNode.next
        popedNode.next = null
        this.size--
        return popedNode.data
    }
}

let s = new Stack()

console.log(s.push('hello'))
console.log(s.push('do'))
console.log(s.push('good'))
console.log(s.push('bye'))

console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())