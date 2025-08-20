
// Huffman Coding Algorithm

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

class Node {
    constructor(data, freq) {
        this.data = data;
        this.freq = freq;
        this.left = this.right = null;
    }
}

class Huffman {
    codes = {};

    constructor(message) {
        this.pq = new MinPriorityQueue({ compare: (a, b) => a.freq - b.freq });
        let ht = {};

        for (let i = 0; i < message.length; i++) {
            if (ht[message[i]] == null)
                ht[message[i]] = 1;
            else
                ht[message[i]] = ht[message[i]] + 1;
        }

        for (let key in ht) {
            let newNode = new Node(key, ht[key]);
            this.pq.enqueue(newNode);
        }

        let top, left, right, newFreq;
        while (this.pq.size() != 1) {
            left = this.pq.dequeue();
            right = this.pq.dequeue();
            newFreq = left.freq + right.freq;
            top = new Node("XXX", newFreq);
            top.left = left;
            top.right = right;

            this.pq.enqueue(top);
        }

        this.generateCodes(this.pq.dequeue(), "");
    }

    generateCodes(node, str) {
        if (node == null) return;

        if (node.data != "XXX")
            this.codes[node.data] = str;

        this.generateCodes(node.left, str + "0");
        this.generateCodes(node.right, str + "1");
    }
}

const huffman = new Huffman("internet");
for (let key in huffman.codes) {
    console.log(key, huffman.codes[key]);
}