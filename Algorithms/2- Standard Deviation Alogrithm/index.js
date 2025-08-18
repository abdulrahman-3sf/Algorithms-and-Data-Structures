/*
    1- declare N, X[], avg(mue), a, b
    2- enter N
    3- enter elements N of times
    4- calculate avg(mue)
    5- calculate a = Xi - mue
    6- calculate b =  a / N
    7- take the square root of b
*/

const prompt = require('prompt-sync')({ sigint: true });

let segma = N = a = b = avg = 0;
let x = [];

N = Number(prompt("Enter the length of the elements: "));

for (let i = 0; i < N; i++) {
    x[i] = Number(prompt("Enter the element: "));
    avg += x[i];
}

avg /= N;

for (let i = 0; i < N; i++) {
    a += Math.pow((x[i] - avg), 2);
}

b = a / N;
segma = Math.sqrt(b);
console.log(segma);