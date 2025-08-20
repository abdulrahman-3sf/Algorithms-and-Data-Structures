function printItems(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i].name, items[i].profit, items[i].weight, items[i].ratio);
    }
}

function printBag(bag) {
    console.log(bag.totalProfits);
    console.log(bag.currentCapacity);
    printItems(bag.items);
}

module.exports = { printItems, printBag };