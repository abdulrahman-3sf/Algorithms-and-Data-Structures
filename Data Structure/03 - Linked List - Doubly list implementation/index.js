/*
    Name: Insert Last

    Assumptions:
        - None

    Inputs:
        - new data

    Processes:
        - validations:
            - None
    
        - insert last:
            - create new node
            - if list is empty (head == null)
                - make head and tail is the new node
            - else
                - make newNode.prev = tail
                -make tail.next = newNode
    
    Output:
        - None
*/

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
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

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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

        // Another way to print LinkedList without LinkedListIterator
        // for (let itr = this.head; itr != null; itr = itr.next) {
        //     path += itr.data + ' -> ';
        // }
    }

    find(index, data) {
        // find the node using index, data & find the parent using index
        for (let itr = this.begin(), i = 0; itr.current() != null; itr.next()) {
            if (i == index || data == itr.data())
                return itr.current();
            i++;
        }
        return null;
    }

    insertLast(data) {
        let newNode = new LinkedListNode(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

let list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);

list.printList();