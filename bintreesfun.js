/* A functional approach to implementing binary trees */

var nullChild = function(msg) {
	return function() {
		return 'Attempt to send message to empty tree.';
	};
};

var tree = function(datum, lchild, rchild) {
	
		var self = {
			'inner' : function(msg) {
     		if (msg === 'getDatum') return datum;
      	if (msg === 'getLChild') return lchild;
      	if (msg === 'getRChild') return rchild;
 				if (msg === 'isEmpty') return self.inner === emptyTree;
				if (msg === 'find') return function(item) {
					return self.find(self.inner, item);	
				};
				if (msg === 'insert') return function(item) {
					return self.insert(self.inner, item);
				};
      	if (msg === 'inOrder') 
					self.inOrder(self.inner);
				else 
					return 'Unknown message to tree: ' + msg;
    	},
			
			'find' : function(t, item) {
				if (t('isEmpty')) return emptyTree;
				if (t('getDatum') === item) return t;
				if (t('getDatum') > item) return self.find(t('getLChild'), item);
				return self.find(t('getRChild'), item);
			},
			
			'insert' : function(t, item) {
				if (t('isEmpty')) return tree(item, emptyTree, emptyTree);
				if (t('getDatum') > item) 
					return tree(t('getDatum'), 
											t('getLChild')('insert')(item),
											t('getRChild'));
				if (t('getDatum') < item) 
					return tree(t('getDatum'), 
											t('getLChild'),
											t('getRChild')('insert')(item));
				return t;
			},
			
			'inOrder' : function(t) {
				if (!t('isEmpty')) {
        	self.inOrder(t('getLChild'));
        	console.log(t('getDatum'));
        	self.inOrder(t('getRChild'));
      	}
    	}
		};

  return self.inner;
};

var emptyTree = tree('empty', nullChild, nullChild);

var tree1 = tree(42, 
								 tree(17, emptyTree, emptyTree), 
								 tree(55, emptyTree, emptyTree));

var tree2 = tree(33, emptyTree, emptyTree);

var tree3 = tree(15, 
								 emptyTree,
								 tree(25, 
											emptyTree,
										  tree(33, emptyTree, emptyTree)));

console.log('\ntree1 in order:');
tree1('inOrder');
console.log('\ntree2 in order:');
tree2('inOrder'); 
console.log('\ntree3 in order:');
tree3('inOrder'); 
console.log('\nemptyTree in order:');
emptyTree('inOrder'); 

console.log('\nFind 17 in tree1:');
tree1('find')(17)('inOrder');
console.log('\nFind 25 in tree3:');
tree3('find')(25)('inOrder');
console.log('\nInsert 12 and 13 into tree3:');
tree3 = tree3('insert')(12);
tree3 = tree3('insert')(13);
tree3('inOrder');
	
console.log(tree3('outOrder'));
