class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        let popedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            popedNode.prev = null
        }
        this.length--
        return popedNode
    }

    shift() {
        if (!this.head) { return undefined }
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }

        this.length--
        return oldHead
    }

    unshift(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) { return null }
        let count = 0
        let current = this.head

        if (index <= this.length/2) {
            while(count !== index) {
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(count !== index) {
                current = current.prev
                count--
            }
        }

        return current
    }

    set(data, index) {
        let indexNode = this.get(index)
        if (!indexNode) {
            return false
        }
        indexNode.data = data
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
            let nextNode = previousNode.next
            previousNode.next = newNode
            newNode.prev = previousNode
            newNode.next = nextNode
            nextNode.prev = newNode
            this.length++
            return true
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) { return undefined }
        if (index === 0 ) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)

        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev

        removedNode.next = null
        removedNode.prev = null
        
        this.length--
        return removedNode
    }

    reverse() {

        if (!this.head) { return null }

        let current = this.head

        while(current) {
            
            if (!current.prev) {
                this.tail = current
                current.prev = current.next
                current.next = null
            } else if (!current.next) {
                this.head = current
                current.next = current.prev
                current.prev = null
            } else {
                let temp = current.prev
                current.prev = current.next
                current.next = temp
            }
            current = current.prev
        }

        return this
    }

    print() {
        let current = this.head
        let nodes = []
        while (current) {
            nodes.push(current.data)
            current = current.next
        }
        console.log(nodes.join(' <--> '))
    }
}

let dl = new DoublyLinkedList()

dl.push(35)
dl.push(46)
dl.push(97)

// dl.print()

// console.log(dl.pop())
// console.log(dl.pop())

dl.push(65)
dl.push(76)
dl.push(365)
dl.push(396)

// dl.print()

// console.log(dl.shift())
// console.log(dl.shift())

// dl.print()

dl.unshift(235)
dl.unshift(56)

dl.print()

// console.log(dl.tail.next)

dl.reverse()

dl.print()