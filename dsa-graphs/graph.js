class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for ( let vertex of vertexArray){
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include 
  // the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, 
  //it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    //Remove from adjanceny list 
    for ( let node of this.nodes ){
      if ( node.adjacent.has(vertex)){
        node.adjacent.delete(vertex)
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack = [start];
    let seen = new Set(stack);
    let result = [];
    seen.add(start);
    
    while (stack.length){
      let node = stack.pop();
      result.push(node.value);
      console.log(node.value);
      for (let neighbor of node.adjacent) {
        if (!seen.has(neighbor)) {
          stack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return result;
  }

  depthFirstSearchIterative(start) {
    // Create an empty stack
    const stack = [start];
    const result = [];
    const visited = new Set();
    let currentVertex;

    // visit node
    visited.add(start);

    // while there are still neighbors to visit
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex.value);

      // visit neighbors and push onto stack
      currentVertex.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }
    return result;
  }


  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let queue = [start];
    let seen = new Set(queue);
    let result = [];
    seen.add(start);
    
    while (queue.length){
      let node = queue.shift();
      result.push(node.value);
      console.log(node.value);
      for (let neighbor of node.adjacent) {
        if (!seen.has(neighbor)) {
          queue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return result;

  }
}

// Testing graph
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// graph.addVertices([a,b])
// graph.addVertex(c)
// let check = graph.nodes.has(a) 
// console.log(check)// true
// check = graph.nodes.has(b) // true
// console.log(check)
// graph.nodes.has(c) // true
// console.log(check)

// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// console.log(a.adjacent); // contains b and c
// b.adjacent // contains a and d
// c.adjacent // contains a and d
// d.adjacent // contains b and c

// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// graph.removeEdge(b,a)
// graph.removeEdge(c,d)


// console.log(a.adjacent) // does not contain b
// console.log(b.adjacent) // does not contain a

// console.log(c.adjacent) // does not contain d
// console.log(d.adjacent) // does not contain c

// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)

// graph.removeVertex(c)
// graph.removeVertex(d)

// let res = graph.nodes.has(a) // true
// console.log(res);
// res = graph.nodes.has(b) // true
// console.log(res);
// res = graph.nodes.has(c) // false
// console.log(res);
// res = graph.nodes.has(d) // false
// console.log(res);

// let graph = new Graph()
// let S = new Node('S');
// let P = new Node('P');
// let U = new Node('U');
// let X = new Node('X');
// let Q = new Node('Q');
// let Y = new Node('Y');
// let V = new Node('V');
// let R = new Node('R');
// let W = new Node('W');
// let T = new Node('T');

// graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

// graph.addEdge(S, P);
// graph.addEdge(S, U);

// graph.addEdge(P, X);
// graph.addEdge(U, X);

// graph.addEdge(P, Q);
// graph.addEdge(U, V);

// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);

// graph.addEdge(Q, R);
// graph.addEdge(Y, R);

// graph.addEdge(Y, W);
// graph.addEdge(V, W);

// graph.addEdge(R, T);
// graph.addEdge(W, T);

// // this is one option:
// console.log(graph.depthFirstSearch(S)) // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]

// let graph = new Graph()
// let S = new Node('S');
// let P = new Node('P');
// let U = new Node('U');
// let X = new Node('X');
// let Q = new Node('Q');
// let Y = new Node('Y');
// let V = new Node('V');
// let R = new Node('R');
// let W = new Node('W');
// let T = new Node('T');

// graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

// graph.addEdge(S, P);
// graph.addEdge(S, U);

// graph.addEdge(P, X);
// graph.addEdge(U, X);

// graph.addEdge(P, Q);
// graph.addEdge(U, V);

// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);

// graph.addEdge(Q, R);
// graph.addEdge(Y, R);

// graph.addEdge(Y, W);
// graph.addEdge(V, W);

// graph.addEdge(R, T);
// graph.addEdge(W, T);

// // this is one option:
// graph.breadthFirstSearch(S) // ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"]

module.exports = {Graph, Node}