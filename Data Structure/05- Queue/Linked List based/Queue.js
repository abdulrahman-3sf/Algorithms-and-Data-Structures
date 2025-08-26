const linkedList = require('./LinkedList.js');

module.exports = class Queue {
    #data_list;
    constructor() {
        this.#data_list = new linkedList();
    }

    enqueue(data) {
        this.#data_list.insertLast(data);
    }

    dequeue() {
        let node_data = this.#data_list.head.data;
        this.#data_list.deleteHead();
        return node_data;
    }

    peek() {
        return this.#data_list.head.data;
    }

    isEmpty() {
        return this.#data_list.length <= 0;
    }

    size() {
        return this.#data_list.length;
    }

    print() {
        this.#data_list.printList();
    }
}