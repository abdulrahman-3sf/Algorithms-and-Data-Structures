class Dictionary {
    constructor() {
        this.entries = [];
    }

    set(key, value) {
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && this.entries[i].key == key) {
                this.entries[i].value = value;
                return;
            }
        }
        let newPair = new Dictionary.KeyValuePair(key, value);
        this.entries.push(newPair);
    }

    // we need to use static key word to do nested classes or we put the class outside this class
    static KeyValuePair = class {
        #_key;
        #_value;

        constructor(key, value) {
            this.#_key = key;
            this.#_value = value;
        }

        get key() {
            return this.#_key;
        }

        get value() {
            return this.#_value;
        }

        set value(value) {
            this.#_value = value;
        }
    }
}