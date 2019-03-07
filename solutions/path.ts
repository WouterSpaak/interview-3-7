namespace Answers {
  export const edges: Edge[] = [
    ['A', 'B'],
    ['A', 'C'],
    ['A', 'K'],
    ['K', 'L'],
    ['C', 'E'],
    ['E', 'D'],
    ['E', 'F'],
    ['C', 'G'],
    ['G', 'H'],
    ['G', 'I'],
    ['I', 'J']
  ];

  type Vertex = string;
  type Edge = [Vertex, Vertex];

  /**
   * Write a function that determines whether you can walk from vertex `from` to vertex `to` in the given
   * graph. Note that edges are unidirectional: they can only be traversed in the direction provided.
   *
   *              A - K
   *            /   \   \
   *           B     C    L
   *               /   \
   *              E      G - H
   *            /   \     \
   *           D      F     I
   *                         \
   *                          J
   *
   * @param edges All available paths
   * @param from Starting point
   * @param to Endpoint
   */
  export const canWalk = (edges: Edge[], from: Vertex, to: Vertex): boolean => {
    // Is the start equal to the end? We don't need to walk.
    if (from === to) {
      return true;
    }

    // Let's find all available starting points.
    const available = edges.filter(edge => edge[0] === from);

    // If there are no starting points, we know we cannot start travelling.
    if (available.length === 0) {
      return false;
    }

    // Is there an Edge in the available array where the endpoint is our destination?
    // If so, return true. Else, iterate over our available array, and recursively
    // call canWalk with a starting point one step away from the original starting point.
    // This will travel the entire graph until the endpoint is found, or no possible path
    // exists.
    const walkable = available.some(edge => edge[1] === to);
    return walkable
      ? walkable
      : available.some(edge => canWalk(edges, edge[1], to));
  };
}

console.log(Answers.canWalk(Answers.edges, 'A', 'J'));
