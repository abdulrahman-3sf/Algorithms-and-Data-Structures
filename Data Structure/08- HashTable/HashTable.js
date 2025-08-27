module.exports = class HashTable {

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

    constructor() {
        this.entries = new Array(3);
        this.entriesCount = 0;
    }

    getHash(key) {
        key = key.toString();

        const OffSetBasis = 2166136261;
        const FNVPrime = 16777619;

        let hash = OffSetBasis >>> 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash ^ key.charCodeAt(i);
            hash = Math.imul(hash, FNVPrime);
        }

        hash >>>= 0;

        console.log("[hash] " + key + ", " + hash + ", " + hash.toString(16) + ", " + (hash % this.entries.length));
        return (hash % this.entries.length);
    }

    collisionHandling(key, hash, set) {
        let newHash;

        for (let i = 1; i < this.entries.length; i++) {
            newHash = (hash + i) % this.entries.length;

            console.log('[coll] ' + key + ' ' + hash + ', new hash: ' + newHash);

            if (set && (this.entries[newHash] == null || this.entries[newHash].key == key))
                return newHash;
            else if (!set && this.entries[newHash].key == key)
                return newHash;
        }

        return -1;
    }

    addToEntries(key, value) {
        let hash = this.getHash(key);

        if (this.entries[hash] != null && this.entries[hash].key != key)
            hash = this.collisionHandling(key, hash, true);

        if (hash == -1)
            throw "Invalid HashTable!";

        if (this.entries[hash] == null) {
            let newPair = new HashTable.KeyValuePair(key, value);
            this.entries[hash] = newPair;
            this.entriesCount++;
        } else if (this.entries[hash].key == key) {
            this.entries[hash].value = value;
        } else {
            throw "Invalid HashTable!";
        }
    }

    resizeOrNot() {
        if (this.entriesCount < this.entries.length)
            return;

        let newSize = this.entries.length * 2;

        console.log('[resize] from ' + this.entries.length + ' to ' + newSize);

        let entriesCopy = [...this.entries];
        this.entries = new Array(newSize);
        this.entriesCount = 0;

        for (let i = 0; i < entriesCopy.length; i++) {
            if (entriesCopy[i] == null) continue;
            this.addToEntries(entriesCopy[i].key, entriesCopy[i].value);
        }

        entriesCopy = null;
    }

    set(key, value) {
        this.resizeOrNot();
        this.addToEntries(key, value);
    }

    get(key) {
        let hash = this.getHash(key);

        if (this.entries[hash] != null && this.entries[hash].key != key)
            hash = this.collisionHandling(key, hash, false);

        if (hash == -1 || this.entries[hash] == null)
            return null;

        if (this.entries[hash].key == key)
            return this.entries[hash].value;
        else
            throw "Invalid HashTable!";
    }

    remove(key) {
        let hash = this.getHash(key);

        if (this.entries[hash] != null && this.entries[hash].key != key)
            hash = this.collisionHandling(key, hash, false);

        if (hash == -1 || this.entries[hash] == null)
            return false;

        this.entries[hash] = null;
        this.entriesCount--;

        let nextIndex = (hash + 1) % this.entries.length;
        while (this.entries[nextIndex] != null) {
            let pair = this.entries[nextIndex];
            this.entries[nextIndex] = null;
            this.entriesCount--;
            this.addToEntries(pair.key, pair.value);
            nextIndex = (nextIndex + 1) % this.entries.length;
        }

        return true;
    }

    size() {
        return this.entriesCount;
    }

    print() {
        console.log('-------------');
        console.log('size: ' + this.size());

        for (let i = 0; i < this.entries.length; i++) {
            if (this.entries[i] != null)
                console.log('{' + this.entries[i].key + ': ' + this.entries[i].value + '}');
            else
                console.log('null');
        }
        console.log('-------------');
    }
}