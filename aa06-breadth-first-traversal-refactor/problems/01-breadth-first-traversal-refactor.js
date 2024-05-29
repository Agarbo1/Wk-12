/*
The output of your printBreadthFirst function in the Simple Breadth-First
Traversal project is useful for visualizing and debugging the traversal, but now
you need it to output the nodes in the graph in an array instead of printing
them. Refactor your implementation of printBreadthFirst that instead
of printing each node on a newline, the breadthFirstTraversal function adds each
node to a new array and returns the new array.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

function breadthFirstTraversal(start) {
  // create a queue of nodes to visit, and a set of visited nodes
  const queue = [start];

  const visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
    }
    let neighbors = adjList[node];
    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) queue.push(neighbor);
    });
  }
  return Array.from(visited)
}

// console.log(breadthFirstTraversal(3)); // [3, 2, 4, 1, 5, 6]
// console.log(breadthFirstTraversal(6)); // [6, 4, 3, 5, 2, 1]
// console.log(breadthFirstTraversal(4)); // [4, 3, 5, 6, 2, 1]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstTraversal;
