const Vertex = require("./vertex");

/*TODO: Create graph, edge, and vertex data structures
Requirements:
  [x] A Vertex can store any data.
  [x] A Vertex maintains a list of connections to other vertices, represented by a list of Edge instances.
  [x] A Vertex can add and remove edges going to another Vertex.
  [x] A Graph stores all of its vertices, represented by a list of Vertex instances.
  [x] A Graph knows if it is directed or undirected.
  [x] A Graph knows if it is weighted or unweighted.
  [x] A Graph can add and remove its own vertices.
  [x] A Graph can add and remove edges between stored vertices.
*/

class Graph {
  constructor(isDirected = false, isWeighted = false) {
    this.vertices = [];
    this.isDirected = isDirected;
    this.isWeighted = isWeighted;
  }

  addVertex(newVertex) {
    if (!newVertex instanceof Vertex) {
      throw new Error("New value must be a Vertex");
    }
    this.vertices.push(newVertex);
  }

  removeVertex(removeThis) {
    if (!removeThis instanceof Vertex) {
      throw new Error("Value to remove must be a Vertex");
    }
    this.vertices = this.vertices.filter((i) => removeThis !== i);
  }

  addEdge(vertex1, vertex2, weight) {
    if (!vertex1 instanceof Vertex || !vertex2 instanceof Vertex) {
      throw new Error("addEdge argument must be a Vertex");
    }
    if (this.isWeighted && !weight) {
      throw new Error("this graph is weighted. Make sure you include a weight");
    }
    if (this.isDirected) {
      vertex1.addEdge(vertex2, weight);
    } else {
      vertex1.addEdge(vertex2, weight);
      vertex2.addEdge(vertex1, weight);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (!vertex1 instanceof Vertex || !vertex2 instanceof Vertex) {
      throw new Error("removeEdge argument must be a Vertex");
    }
    if (this.isDirected) {
      vertex1.removeEdge(vertex2);
    } else {
      vertex1.removeEdge(vertex2);
      vertex2.removeEdge(vertex1);
    }
  }

  print() {
    this.vertices.forEach((i) => i.print());
  }
}

const vertex1 = new Vertex("LA");
const vertex2 = new Vertex("SF");
const vertex3 = new Vertex("Fresno");
const myGraph = new Graph(true, true);
myGraph.addVertex(vertex1);
myGraph.addVertex(vertex2);
myGraph.addVertex(vertex3);
myGraph.addEdge(vertex2, vertex3, 200);
myGraph.print();
myGraph.removeEdge(vertex2, vertex3);
console.log("-----");
myGraph.print();
