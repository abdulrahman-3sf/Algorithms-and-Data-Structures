let BinarySearchTree = require('./BinarySearchTree.js');

let tree = new BinarySearchTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.print();

tree.balance();

console.log('');

tree.print();
