let BinarySearchTree = require('./BinarySearchTree.js');

let tree = new BinarySearchTree();

tree.insert(4);
tree.insert(6);
tree.insert(7);
tree.insert(5);
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.print();

console.log('');

tree.delete(4);

tree.print();