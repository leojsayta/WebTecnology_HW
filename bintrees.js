
/*
* An implementation of binary trees using a non-object-oriented style.
*/
var Tree = function(datum, lchild, rchild) {
  this.datum = datum;
  this.lchild = lchild;
  this.rchild = rchild;
}

var find = function(tree, item) {
  if (tree === null) return null;
  if (tree.datum === item) return tree;
  if (tree.datum > item) return find(tree.lchild, item);
  return find(tree.rchild, item);
}

var insert = function(tree, item) {
  if (tree === null)
    return new Tree(item, null, null);
  if (tree.datum > item)
    return new Tree(tree.datum, insert(tree.lchild, item), tree.rchild);
  if (tree.datum < item)
    return new Tree(tree.datum, tree.lchild, insert(tree.rchild, item));
	return tree;
}

var inOrder = function(tree) {
  if (tree !== null) {
    inOrder(tree.lchild);
    console.log(tree.datum);
    inOrder(tree.rchild);
  }
}

var tree1 = new Tree(42,
                     new Tree(21,
                              new Tree(11,
                                       new Tree(9, null, null),
                                       new Tree(13, null, null)
                                       ),
                              new Tree(27, null, null)
                             ),
                     new Tree(56,
                              new Tree(45, null, null),
                              new Tree(63,
                                       new Tree(58, null, null),
                                       new Tree(79, null, null)
                                       )
                             )
                     );

var tree2 = insert(insert(insert(insert(insert(null, 35), 27), 42), 16), 53);

