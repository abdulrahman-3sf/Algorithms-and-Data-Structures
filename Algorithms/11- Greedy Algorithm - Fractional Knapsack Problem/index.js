// Fractional Knapsack Problem

/*
    --------------------------------------
    item            0   1   2   3   4   5
    --------------------------------------
    profit($)       4   9   12  11  6   5
    weight(kg)      1   2   10  4   3   5
    --------------------------------------
    Knapsack weight = 12

    1- calculate the ration of the profit for each single kilo of item.
    2- sort the item by ration form the largest to the smallest.
    3- while knapsack if not full then for each item, if item weight is 
        less than the current knapsack capacity then add it as is in the knapsack,
        else add a fraction of it.
*/


const { Item, Knapsack } = require('./knapsack.js');
const { mergeSort } = require('./sort.js');
const { printItems, printBag } = require('./print.js');

let profits = [4, 9, 12, 11, 6, 5];
let weights = [1, 2, 10, 4, 3, 5];

let items = [];

for (let i = 0; i < profits.length; i++) {
    let item = new Item('#' + i, profits[i], weights[i]);
    items.push(item);
}

console.log("\n------ UnSorted ------");
printItems(items);

mergeSort(items, 0, items.length - 1);

console.log("\n------ Sorted ------");
printItems(items);

let i = 0;
let bag = new Knapsack(12);
while (bag.currentCapacity < bag.maxCapacity) {
    bag.add_item(items[i]);
    i++;
}

console.log("\n------ Bag ------")
printBag(bag);