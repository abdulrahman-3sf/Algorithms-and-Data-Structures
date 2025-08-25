module.exports = class Stack {
    #data_list;
    #top_index;

    constructor() {
        this.#data_list = [];
        this.#top_index = -1
    }

    push(data) {
        this.#data_list.push(data);
        this.#top_index++;
    }

    pop() {
        // let head_data = this.#data_list.splice(this.#top_index, 1)[0];
        let head_data = this.#data_list.pop();
        this.#top_index--;
        return head_data;
    }

    peek() {
        return this.#data_list[this.#top_index];
    }

    size() {
        return this.#data_list.length;
    }

    isEmpty() {
        return this.#data_list.length <= 0;
    }

    print() {
        let path = '';

        for (let i = this.#top_index; i >= 0; i--) {
            path += this.#data_list[i] + ' -> ';
        }

        console.log(path);
    }
}