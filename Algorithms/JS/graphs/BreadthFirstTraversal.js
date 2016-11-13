/*
 *     For the example graph below, what is the expected output if we printed each
 *     vertex value from vertex A outwards using:
 *
 *     a. BREADTH FIRST traversal?
 *
 *     NOTE: Assume the order of edges will be alphabetical. E.g., Vertex D has edges to
 *           5 vertices in the following order: B, C, E, F, G
 *
 *     NOTE: The traversal should take care of redundancy and not print the same vertex
 *           value twice.
 *
 *     Example Graph:
 *
 *              B     E
 *            /   \  /
 *          A       D  --- F
 *            \   /   \   /
 *              C       G
 */

// ------------ Constructors for Graph and Vertex ----------------------
class Vertex {
  constructor( val ){
    this.value = val;
    this.edges = {};
  }
}
class Graph {
  constructor(){
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  addVertex( val ){
    if ( !this.vertices[val] ){
      var vertex = new Vertex( val );
      this.vertices[val] = vertex;
      this.totalVertices++;
    }
    else {
      return 'val exists';
    }
  }

  addEdge( valOne, valTwo ){
      var vertOne = this.vertices[valOne],
          vertTwo = this.vertices[valTwo];

      vertOne.edges[valTwo] = true;
      vertTwo.edges[valOne] = true;

      this.totalEdges++;
   }
}

var g = new Graph;
g.addVertex('A');
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addVertex('G')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('D', 'B')
g.addEdge('D', 'C')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('D', 'G')
g.addEdge('F', 'G')

// console.log(g);

// ---------------------------------------------

// create an object to keep track of visited vertices
// keep track of first vertex in graph
// create a queue to keep track of the next nodes to traverse
// create a results array to return at the end of our function
// push the first vertex object into queue
// push the value into results
// cache the first vertex's value
// create a while loop that breaks once there are no longer any vertex's to traverse
  // loop through each vertex's edges
    // if we haven't visited them
        // cache the value as true
        // push the vertex object into q so we have access to its properties
        // push value into results
  // remove item in queue once traversed
// return results


function BFT(graph){
  var visited = {},
      firstVertex = graph.vertices[Object.keys(graph.vertices)[0]], // accessing first vertex in graph
      q = [],
      results = [];

  q.push( firstVertex ); // push object so we have access to properties
  results.push( firstVertex.value ); // push value
  visited[ firstVertex.value ] = true; // cache value

  while( q.length ){
    var currentVertex = q[0];

    for( var k in currentVertex.edges ){
      if( !visited[k] ){
        visited[k] = true;
        q.push(graph.vertices[k]); // push object so we have access to properties
        results.push(k); // push value
      }
    }

    q.shift();
  }
  return results;
}

console.log( BFT(g) )
