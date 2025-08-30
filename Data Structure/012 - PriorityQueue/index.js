let PriorityQueue = require('./PriorityQueue.js');

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue(5, 24);
priorityQueue.enqueue(5, 32);
priorityQueue.enqueue(3, 16);
priorityQueue.enqueue(3, 45);
priorityQueue.enqueue(1, 20);
priorityQueue.enqueue(1, 53);
priorityQueue.enqueue(2, 14);
priorityQueue.enqueue(2, 27);

priorityQueue.print();

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
priorityQueue.print();
