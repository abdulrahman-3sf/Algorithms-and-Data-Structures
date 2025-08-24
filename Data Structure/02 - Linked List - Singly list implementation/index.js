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
            - if list is empty
                - make head and tail is the new node
            - else
                - make tail next is the new node
                - make tail is the new node
    
    Output:
        - None

    --------------------------------------------------------
    
    Name: Insert After

    Assumptions:
        - None

    Inputs:
        - index
        - data

    Processes:
        - validations:
            - node is not null
            - check the index if it is valid
    
        - insert after:
            - create node newNode of data
            - make newNode.next = node of index next pointer
            - make node of index next pointer = newNode
            - if newNode.next == null, this mean its is the last node, then:
                - tail = newNode
     
    Output:
        - None
*/

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

    insertLast(data) {
        let newNode = new LinkedListNode(data);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    find(index) {
        for (let itr = this.begin(), i = 0; itr.current() != null; itr.next()) {
            if (i == index)
                return itr.current();
            i++;
        }
        return null;
    }

    insertAfter(index, data) {
        let newNode = new LinkedListNode(data);
        let nodeBeforeNewNode = this.find(index);

        if (newNode == null || nodeBeforeNewNode == null) return;

        newNode.next = nodeBeforeNewNode.next;
        nodeBeforeNewNode.next = newNode;

        if (newNode.next == null)
            this.tail = newNode;
    }
}

let list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);

list.printList();

list.insertAfter(0, 55);

list.printList();
