class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    const index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    const index = this._hash(key)
    if (!this.keyMap[index]) {
      return undefined
    }
    let chain = this.keyMap[index]
    let found = chain.find(item => item[0] === key)
    return found ? found[1] : undefined
  }

  keys() {
    let keysArr = []
    this.keyMap.forEach(item => {
      if (item && item.length) {
        item.forEach(key => {
          if (!keysArr.includes(key[0])) {
            keysArr.push(key[0])
          }
        })
      }
    })

    return keysArr
  }

  values() {
    let valuesArr = []
    this.keyMap.forEach(item => {
      if (item && item.length) {
        item.forEach(key => {
          if (!valuesArr.includes(key[1])) {
            valuesArr.push(key[1])
          }
        })
      }
    })

    return valuesArr
  }

}

let ht1 = new HashTable(17)

ht1.set('hello', 'world')
ht1.set('bye', 'ronny')
ht1.set('dev', 'd')
ht1.set('devi', 'maa')
ht1.set('jones', 'davi')
ht1.set('jonas', 'adam')
ht1.set('martha', 'martha2')

console.log(ht1.values())
console.log(ht1.keys())
