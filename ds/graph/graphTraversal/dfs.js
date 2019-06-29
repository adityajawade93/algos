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

  dfsRecursive(start) {
    let result = []
    let visited = {}
    let adjacencyList = this.adjacencyList;
    (
      function dfs(vertex) {
        if (!vertex) { return null }
        result.push(vertex)
        visited[vertex] = true
        adjacencyList[vertex].forEach(neighbour => {
          if (!visited[neighbour]) {
            return dfs(neighbour)
          }
        })
      }
    )(start)

    return result
  }

  dfsIterative(start) {
    let stack = [start]
    let result = []
    let visited = {}

    while(stack.length) {
      let vertex = stack.pop()
      if (!visited[vertex]) {
        visited[vertex] = true
        result.push(vertex)
        this.adjacencyList[vertex].forEach(neighbour => { stack.push(neighbour) })
      }
    }

    return result
  }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F") 

console.log(g.dfsIterative("A"))