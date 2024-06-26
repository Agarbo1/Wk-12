/*
Write a function called printBreadthFirst that will traverse the given graph
breadth-first, printing each node when visited exactly once, on a newline.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printBreadthFirst(start) {
  // create a queue of nodes to visit, and a set of visited nodes
  const queue = [start];

  const visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    if (!visited.has(node)) {
      console.log(node)
      visited.add(node)
    };
    let neighbors = adjList[node];
    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) queue.push(neighbor)
    })
  };
};
// console.log("First Test:")
// debugger
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                       // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                       // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  4, 3, 5, 6, 2, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printBreadthFirst;
