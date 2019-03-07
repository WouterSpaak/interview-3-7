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
  // TODO: Implement
};

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

console.log(canWalk(edges, 'A', 'J'));
