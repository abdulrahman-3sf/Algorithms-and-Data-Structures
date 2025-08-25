const Stack = require('./Stack.js');

let stack = new Stack();

console.log('isEmpty:', stack.isEmpty());

stack.push(11);
stack.push(22);
stack.push(33);

console.log('isEmpty:', stack.isEmpty());
console.log('size:', stack.size());

stack.print();

console.log(stack.pop());
console.log(stack.peek());

stack.print();
console.log('size:', stack.size());