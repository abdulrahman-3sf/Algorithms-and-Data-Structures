let Heap = require('./Heap.js');

let heap = new Heap();

heap.insert(24);
heap.insert(32);
heap.insert(16);
heap.insert(45);
heap.insert(20);
heap.insert(53);
heap.insert(14);
heap.insert(27);

heap.print();

console.log(heap.pop());
heap.print();
console.log(heap.pop());
heap.print();
console.log(heap.pop());
heap.print();
console.log(heap.pop());
heap.print();
console.log(heap.pop());
heap.print();
console.log(heap.pop());
heap.print();
console.log(heap.pop());
heap.print();
console.log(heap.pop());
heap.print();
console.log(heap.pop());
heap.print();

heap.insert(24);
heap.insert(32);
heap.insert(16);
heap.insert(45);
heap.insert(20);
heap.insert(53);
heap.insert(14);
heap.insert(27);
heap.print();