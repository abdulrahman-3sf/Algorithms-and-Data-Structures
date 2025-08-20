class Item {
    constructor(name, profit, weight) {
        this.name = name;
        this.profit = profit;
        this.weight = weight;
        this.ratio = profit / weight;
    }
}

class Knapsack {
    constructor(maxCapacity) {
        this.maxCapacity = maxCapacity;
        this.currentCapacity = 0;
        this.totalProfits = 0;
        this.items = [];
    }

    add_item(newItem) {
        let diff = this.maxCapacity - this.currentCapacity;
        if (newItem.weight > diff) {
            newItem.weight = diff;
            newItem.profit = diff * newItem.ratio;
        }

        this.items.push(newItem);
        this.currentCapacity += newItem.weight;
        this.totalProfits += newItem.profit;
    }
}

module.exports = { Item, Knapsack };