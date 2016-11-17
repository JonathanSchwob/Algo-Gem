// Build a graph using an adjacency list.
// No vertex class
// Should have a storage property that holds vertex id along with all the edges.

// Methods:
// addVertex
// removeVertex
// addEdge
// removeEdge
// neighbors(vertex) -> return the array of neighbors for a vertex


class Vertex{
  constructor( val ){
    this.value = val;
    this.edges = {};
  }
}

class Graph{
  constructor(){
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  addVertex(val){
    if ( !this.vertices[val] ){
      this.vertices[val] = []; // storage
      this.totalVertices++;
    }
    else {
      return 'val exists';
    }
  }

  removeVertex(val){
    delete this.vertices[val];
    this.vertices--;
  }

  addEdge(valOne, valTwo){
    this.vertices[valOne].push(valTwo);
    this.vertices[valTwo].push(valOne);

    this.totalEdges++;
   }

   removeEdge(valOne, valTwo){

    valOne.splice( valOne.indexOf(valTwo), 1 );
    valTwo.splice( valTwo.indexOf(valOne), 1 );

    this.totalEdges--;
  }

  neighbors(val){
    return this.vertices[val]
  }

}

var graph = new Graph;
var myVertices = ['A','B','C','D','E','F','G','H','I']; // 9
for( var i=0; i<myVertices.length; i++ ){
  graph.addVertex( myVertices[i] );
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
// console.log(graph)
console.log(graph.neighbors('A'))
