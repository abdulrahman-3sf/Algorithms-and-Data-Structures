module.exports = class PriorityQueue {
    #data_list;
    #size;

    constructor() {
        this.#data_list = [];
        this.#size = 0;
    }

    enqueue(priority, data) {
        let i = this.#size;
        this.#data_list[i] = { priority: priority, data: data };
        this.#size++;

        let parent_index = Math.floor((i - 1) / 2);
        while (i != 0 && this.#data_list[i].priority < this.#data_list[parent_index].priority) {
            let temp = this.#data_list[i];
            this.#data_list[i] = this.#data_list[parent_index];
            this.#data_list[parent_index] = temp;
            i = parent_index;
            parent_index = Math.floor((i - 1) / 2);
        }
    }

    dequeue() {
        if (this.#size == 0) return null;

        let data = this.#data_list[0].data;
        let priority = this.#data_list[0].priority;
        let i = 0;
        this.#data_list[i] = this.#data_list[this.#size - 1];
        this.#data_list[this.#size - 1] = null;
        this.#size--;

        let left_index = (2 * i) + 1;
        while (left_index < this.#size) {
            let right_index = (2 * i) + 2;
            let smaller_index = left_index;

            if (this.#data_list[right_index] != null && this.#data_list[right_index].priority < this.#data_list[smaller_index].priority)
                smaller_index = right_index;

            if (this.#data_list[smaller_index].priority >= this.#data_list[i].priority)
                break;

            let temp = this.#data_list[i];
            this.#data_list[i] = this.#data_list[smaller_index];
            this.#data_list[smaller_index] = temp;

            i = smaller_index;
            left_index = (2 * i) + 1;
        }

        return { priority: priority, data: data };
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size <= 0;
    }

    print() {
        let print_data = '';
        for (let i = 0; i < this.#size; i++) {
            print_data += this.#data_list[i].data + ' - ';
        }
        console.log(print_data);
    }
}