// Sorted Characters Frequencies

class CharFreq {
    constructor() { }

    ASCIIMethod(message) {
        let counts = [];

        for (let i = 0; i < message.length; i++) {
            let code = message[i].charCodeAt(0);
            counts[code] = (counts[code] || 0) + 1;
        }

        for (let i = 0; i < counts.length; i++) {
            if (counts[i] > 0) {
                console.log(String.fromCharCode(i), counts[i]);
            }
        }
    }

    anyCodeMethod(message) {
        const hashtable = {};

        for (let i = 0; i < message.length; i++) {
            if (hashtable[message[i]] == null)
                hashtable[message[i]] = 1;
            else
                hashtable[message[i]] += 1;
        }

        console.log("Unsorted");
        for (let key in hashtable) {
            console.log(key, hashtable[key]);
        }

        this.sortHash(hashtable);
    }

    sortHash(hashtable) {
        let freqArray = [];

        for (let key in hashtable) {
            freqArray.push([key, hashtable[key]]);
        }

        this.sort(freqArray, 0, freqArray.length - 1);

        console.log("\nSorted");
        for (let i = 0; i < freqArray.length; i++) {
            console.log(freqArray[i][0], freqArray[i][1]);
        }
    }

    sort(array, start, end) {
        if (start >= end) return;

        let mid = Math.floor((end + start) / 2);

        this.sort(array, start, mid);
        this.sort(array, mid + 1, end);
        this.merge(array, start, mid, end);
    }

    merge(array, start, mid, end) {
        let left_array = array.slice(start, mid + 1);
        let right_array = array.slice(mid + 1, end + 1);


        let i = 0, j = 0, k = start;
        while (i < left_array.length && j < right_array.length) {
            if (left_array[i][1] <= right_array[j][1]) {
                array[k] = left_array[i];
                i++;
            } else {
                array[k] = right_array[j];
                j++;
            }
            k++;
        }

        while (i < left_array.length) {
            array[k] = left_array[i];
            i++;
            k++;
        }

        while (j < right_array.length) {
            array[k] = right_array[j];
            j++;
            k++;
        }
    }
}

let message = 'hello world';

const charFreq = new CharFreq();
charFreq.ASCIIMethod(message);
charFreq.anyCodeMethod(message);