class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(data) {
        let newNode = new Node(data)
        if ( !this.head ) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) { return undefined }
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) { return undefined }
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift(data) {
        let newHead = new Node(data)
        if (!this.head) {
            this.head = newHead
            this.tail = this.head
        } else {
            newHead.next = this.head
            this.head = newHead
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index > this.length) { return null }
        let current = this.head
        let counter = 0
        while(counter !== index) {
            counter++
            current = current.next
        }

        return current
    }

    set(value, index) {
        let indexNode = this.get(index)
        if (!indexNode) { return false }
        indexNode.data = value
        return true
    }

    insert(value, index) {
        if (index < 0 || index > this.length) { return false }
        if (index === this.length) {
            return !!this.push(value)
        } else if (index === 0) {
            return !!this.unshift(value)
        } else {
            let newNode = new Node(value)
            let previousNode = this.get(index - 1)
            let temp = previousNode.next
            previousNode.next = newNode
            newNode.next = temp
            this.length++
            return true
        }
        
    }

    remove(index) {
        if (index < 0 || index > this.length) { return undefined }
        if (index === 0 ) return this.shift()
        if (index === this.length) return this.pop()
        
        let previousNode = this.get(index - 1)
        let removedNode = previousNode.next
        previousNode.next = removedNode.next
        this.length--
        return removedNode
    }

    // !! VERY IMPORTANT !! reverse in place
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node

        let prev = null
        let next = null

        for (let i = 0 ; i < this.length ; i++ ) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }

    print() {
        let data = []
        let current = this.head
        while(current) {
            data.push(current.data)
            current = current.next
        }
        console.log(data.join(' -> '))
    }
}

let l = new LinkedList()

l.push(5)
l.push(7)
l.push(9)
l.print()
l.unshift(25)
l.unshift(39)
l.print()
console.log(l.get(0))
console.log(l.insert(567, 1))
l.print()
l.reverse()
l.print()