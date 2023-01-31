class Edge {
  constructor(vertex1, vertex2, weight = null) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.weight = weight;
  }
  print() {
    let printThis = this.vertex1.data + "-->" + this.vertex2.data;
    if (this.weight) {
      printThis += ` (${this.weight})`;
    }
    console.log(printThis);
  }
}

module.exports = Edge;
