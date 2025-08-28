let BinaryTree = require('./BinaryTree.js');

let tree = new BinaryTree();

tree.insert('A');
tree.insert('B');
tree.insert('C');
tree.insert('D');
tree.insert('E');
tree.insert('F');
tree.insert('G');
tree.insert('H');
tree.insert('I');

tree.print();

console.log('\nHeight: ' + tree.height());

tree.preOrder();
tree.inOrder();
tree.postOrder();

console.log(tree.find('A'));

tree.delete('E');

tree.print();
