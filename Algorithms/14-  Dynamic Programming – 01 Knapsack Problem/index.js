// Dynamic Programming – 01 Knapsack Problem

let items = [
    { 'name': '#1', 'weight': 1, 'profit': 4 },
    { 'name': '#2', 'weight': 3, 'profit': 9 },
    { 'name': '#3', 'weight': 5, 'profit': 12 },
    { 'name': '#4', 'weight': 4, 'profit': 11 }
];

let maxWeight = 8;

let table = [];

items.splice(0, 0, { 'name': '#0', 'weight': 0, 'profit': 0 });

for (var i = 0; i < items.length; i++) {
    table[i] = [];
    for (var j = 0; j <= maxWeight; j++) {
        if (i == 0 || j == 0) {
            table[i][j] = 0;
        } else if (items[i].weight <= j) {
            table[i][j] = Math.max(
                table[i - 1][j],
                items[i].profit + table[i - 1][j - items[i].weight]
            );
        } else {
            table[i][j] = table[i - 1][j];
        }
    }
}

console.log(...table);
console.log('Max Profit:', table[items.length - 1][maxWeight]);

let solution = [];
i = items.length - 1;
j = maxWeight;
let remain = maxWeight;

while (remain > 0 && j > 0) {
    if (table[i][j] > table[i - 1][j]) {
        solution.push(items[i].name);
        remain = remain - items[i].weight;
        j = remain;
        i--;
    } else {
        i--;
    }
}

console.log(solution);