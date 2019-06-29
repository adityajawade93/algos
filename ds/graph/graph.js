class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (! this.adjacencyList[vertex])
      this.adjacencyList[vertex] = []
  }

  addEdge(v1, v2) {
    if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2)
      this.adjacencyList[v2].push(v1)
    }
  }

  removeEgde(v1, v2) {
    if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2)
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1)
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while(this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop()
        this.removeEgde(vertex, adjacentVertex)
      }
      delete this.adjacencyList[vertex]
    }
  }
}

let g = new Graph()

g.addVertex('Tokyo')
g.addVertex('San Francisco')
g.addVertex('Dallas')
g.addVertex('Aspen')


g.addEdge('Tokyo', 'San Francisco')
g.addEdge('Tokyo', 'Dallas')

console.log(g)

g.removeVertex('Tokyo')

console.log(g)