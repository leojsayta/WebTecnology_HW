/*
* An implementation of binary trees using an object-oriented style.
* Notice the cascading style of insert used for tree2.
*/
var Tree = function(datum, lchild, rchild) {
  this.datum = datum;
  this.lchild = lchild;
  this.rchild = rchild;
}

var emptyTree = new Tree(0,0,0);

Tree.prototype.isEmpty = function() {
  return this === emptyTree;
}

Tree.prototype.find = function(item) {
  if (this.isEmpty()) return emptyTree;
  if (this.datum === item) return this;
  if (this.datum > item) return this.lchild.find(item);
  return this.rchild.find(item);
}

Tree.prototype.insert = function(item) {
  if (this.isEmpty())
    return new Tree(item, emptyTree, emptyTree);
  if (this.datum > item)
    return new Tree(this.datum, this.lchild.insert(item), this.rchild);
  if (this.datum < item)
    return new Tree(this.datum, this.lchild, this.rchild.insert(item));
	return this;
}

Tree.prototype.inOrder = function() {
  if (!this.isEmpty()) {
    this.lchild.inOrder();
    console.log(this.datum);
    this.rchild.inOrder();
  }
}

var tree1 = new Tree(42,
                     new Tree(21,
                              new Tree(11,
                                       new Tree(9, emptyTree, emptyTree),
                                       new Tree(13, emptyTree, emptyTree)
                                       ),
                              new Tree(27, emptyTree, emptyTree)
                             ),
                     new Tree(56,
                              new Tree(45, emptyTree, emptyTree),
                              new Tree(63,
                                       new Tree(58, emptyTree, emptyTree),
                                       new Tree(79, emptyTree, emptyTree)
                                       )
                             )
                     );

var tree2 = emptyTree.insert(35).insert(27).insert(42).insert(16).insert(53);

