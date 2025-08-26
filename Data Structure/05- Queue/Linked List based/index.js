const Queue = require('./Queue.js');

let queue = new Queue();

console.log('isEmpty:', queue.isEmpty());

queue.enqueue(11);
queue.enqueue(22);
queue.enqueue(33);

console.log('isEmpty:', queue.isEmpty());
console.log('size:', queue.size());

queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

queue.print();
console.log('size:', queue.size());