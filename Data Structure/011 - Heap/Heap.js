module.exports = class Heap {
    #data_list;
    #size;

    constructor() {
        this.#data_list = [];
        this.#size = 0;
    }

    insert(data) {
        let i = this.#size;
        this.#data_list[i] = data;
        this.#size++;

        let parent_index = Math.floor((i - 1) / 2);
        while (i != 0 && this.#data_list[i] < this.#data_list[parent_index]) {
            this.#data_list[i] = this.#data_list[parent_index];
            this.#data_list[parent_index] = data;
            i = parent_index;
            parent_index = Math.floor((i - 1) / 2);
        }
    }

    pop() {
        if (this.#size == 0) return null;

        let data = this.#data_list[0];
        let i = 0;
        this.#data_list[i] = this.#data_list[this.#size - 1];
        this.#data_list[this.#size - 1] = null;
        this.#size--;

        let left_index = (2 * i) + 1;
        while (left_index < this.#size) {
            let right_index = (2 * i) + 2;
            let smaller_index = left_index;

            if (this.#data_list[right_index] != null && this.#data_list[right_index] < this.#data_list[smaller_index])
                smaller_index = right_index;

            if (this.#data_list[smaller_index] >= this.#data_list[i])
                break;

            let temp = this.#data_list[i];
            this.#data_list[i] = this.#data_list[smaller_index];
            this.#data_list[smaller_index] = temp;

            i = smaller_index;
            left_index = (2 * i) + 1;
        }

        return data;
    }

    size() {
        return this.#size;
    }

    print() {
        let print_data = '';
        for (let i = 0; i < this.#size; i++) {
            print_data += this.#data_list[i] + ' - ';
        }
        console.log(print_data);
    }
}