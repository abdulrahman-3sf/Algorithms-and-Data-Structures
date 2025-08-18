/*
    1- declare N, x[], y[], avgX, avgY, aX, aY, combXY, R to Zero
    2- enter the N value
    3- enter the X[] value N of time
    4- enter the Y[] value N of time
    5- calculate avgX /= N, avgY /= N
    6- calculate aX = sum(xi-avgX) ** 2 and aY = sum(yi-avgY) ** 2
    7- calculate combXY = sum((xi-avgX)(yi-avgY))
    8- calculate R = combXY / sqrt(aX * aY)
    9- print the R value
*/

const prompt = require('prompt-sync')({ sigint: true });

let N = avgX = avgY = aX = aY = combXY = R = 0;
let x = [], y = [];

N = Number(prompt("Enter the length of the elements: "));

for (let i = 0; i < N; i++) {
    x[i] = Number(prompt("x[" + i + "]: "));
    y[i] = Number(prompt("y[" + i + "]: "));

    avgX += x[i];
    avgY += y[i];
}

avgX /= N;
avgY /= N;

for (let i = 0; i < N; i++) {
    aX += Math.pow((x[i] - avgX), 2);
    aY += Math.pow((y[i] - avgY), 2);

    combXY += ((x[i] - avgX) * (y[i] - avgY));
}

R = combXY / Math.sqrt(aX * aY);

console.log(R);