module.exports = class Queue {
    #data_list;
    constructor() {
        this.#data_list = [];
    }

    enqueue(data) {
        this.#data_list.push(data);
    }

    dequeue() {
        return this.#data_list.shift();
    }

    peek() {
        return this.#data_list[0];
    }

    isEmpty() {
        return this.#data_list.length <= 0;
    }

    size() {
        return this.#data_list.length;
    }

    print() {
        let path = '';

        for (let i = 0; i < this.size(); i++) {
            path += this.#data_list[i] + ' -> ';
        }

        console.log(path);
    }
}