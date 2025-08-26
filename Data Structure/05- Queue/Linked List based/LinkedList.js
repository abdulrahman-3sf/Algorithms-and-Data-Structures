class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListIterator {
    #currentNode;

    constructor(node) {
        this.#currentNode = node;
    }

    data() { // return currentNode data, simplifiy for user to access data
        return this.#currentNode.data;
    }

    current() {
        return this.#currentNode;
    }

    next() {
        this.#currentNode = this.#currentNode.next;
        return this;
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    begin() {
        return new LinkedListIterator(this.head);
    }

    printList() {
        let path = '';
        for (let itr = this.begin(); itr.current() != null; itr.next()) {
            path += itr.data() + ' -> ';
        }
        console.log(path);
    }

    find(index, data, findParent = false) {
        if (findParent) { // find the parent node using data
            for (let itr = this.begin(); itr.current() != null; itr.next()) {
                if (itr.current().next != null & itr.current().next.data == data)
                    return itr.current();
            }
        } else { // find the node using index, data & find the parent using index
            for (let itr = this.begin(), i = 0; itr.current() != null; itr.next()) {
                if (i == index || data == itr.data())
                    return itr.current();
                i++;
            }
        }

        return null;
    }

    insertFirst(data) {
        let newNode = new LinkedListNode(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    insertLast(data) {
        let newNode = new LinkedListNode(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    insertAfter(index, data) {
        let newNode = new LinkedListNode(data);
        let nodeBeforeNewNode = this.find(index);

        if (nodeBeforeNewNode == null) return;

        newNode.next = nodeBeforeNewNode.next;
        nodeBeforeNewNode.next = newNode;

        if (newNode.next == null)
            this.tail = newNode;

        this.length++;
    }

    insertBefore(index, data) {
        let newNode = new LinkedListNode(data);
        let nodeAfterNewNode = this.find(index);
        let parentNode = this.find(index - 1);

        if (nodeAfterNewNode == null) return;

        newNode.next = nodeAfterNewNode;

        if (parentNode == null)
            this.head = newNode;
        else
            parentNode.next = newNode;

        this.length++;
    }

    deleteHead() {
        if (this.head == null) return;

        this.head = this.head.next;
        this.length--;
    }

    deleteNode(index, data) {
        let useData = (data != null);
        let nodeToDelet;

        // This because we use index or data to delete node and we use the same function find
        if (useData)
            nodeToDelet = this.find(null, data);
        else
            nodeToDelet = this.find(index);


        if (nodeToDelet == null) return;

        if (this.head == this.tail) {
            this.head = null, this.tail = null;

        } else if (this.head == nodeToDelet) {
            this.head = this.head.next;

        } else {
            let parent;

            // This because we use index or data to delete node and we use the same function find
            if (useData)
                parent = this.find(null, data, true);
            else
                parent = this.find(index - 1);


            if (this.tail == nodeToDelet) {
                this.tail = parent;
            } else {
                parent.next = nodeToDelet.next;
            }
        }

        nodeToDelet.next = null;
        nodeToDelet = null;

        this.length--;
    }
}