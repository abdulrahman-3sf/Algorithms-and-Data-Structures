module.exports = class Dictionary {
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

    get(key) {
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && this.entries[i].key == key) {
                return this.entries[i].value;
            }
        }

        return null;
    }

    remove(key) {
        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null && this.entries[i].key == key) {
                let lastNode = this.entries.pop();
                if (lastNode.key != key)
                    this.entries[i] = lastNode;

                return true;
            }
        }

        return false;
    }

    size() {
        return this.entries.length;
    }

    print() {
        console.log('-------------');
        console.log('size: ' + this.size());

        for (let i = 0; i < this.entries.length; i++) {
            console.log('{' + this.entries[i].key + ': ' + this.entries[i].value + '}');
        }
        console.log('-------------');
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
