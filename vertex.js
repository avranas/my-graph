const Edge = require("./edge");

class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(toVertex, weight = null) {
    this.edges.push(new Edge(this, toVertex, weight));
  }

  removeEdge(toVertex) {
    this.edges = this.edges.filter((edge) => {
      return edge.vertex2 !== toVertex;
    });
  }

  print() {
    if (this.edges.length === 0) {
      console.log(this.data);
      return;
    }
    this.edges.forEach((i) => {
      i.print();
    });
  }
}

module.exports = Vertex;
