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
            - nodeBeforeNewNode is not null
            - check the index if it is valid
    
        - insert after:
            - create node newNode of data
            - make newNode.next = nodeBeforeNewNode.next
            - nodeBeforeNewNode.next = newNode
            - if newNode.next == null, this mean its is the last node, then:
                - tail = newNode
     
    Output:
        - None

    --------------------------------------------------------
    
    Name: Insert Before

    Assumptions:
        - None

    Inputs:
        - index
        - data

    Processes:
        - validations:
            - nodeBeforeNewNode is not null
            - check the index if it is valid
    
        - insert before:
            - create node newNode of data
            - make newNode.next = nodeAfterNewNode
            - find node before nodeAfterNewNode (parent)
            - if parent == null then
                - head = newNode
            -else
                - parent.next = newNode
    
    Output:
        - None

    --------------------------------------------------------
    
    Name: Delete Node

    Assumptions:
        - None

    Inputs:
        - index or data

    Processes:
        - validations:
            - node is not null
    
        - delete node:
            #1 delete single node
                - if head == tail:
                    - head and tail = null
                
            #2 delete node at first
                - else if head == node:
                    - head = head.next
                    - node.next = null (when you do not delete the nodeToDelete)

            #3 delete node at last or in the middle
                - else
                    - find parent
                    - if tail == node:
                        - tail = parent
                        - tail.next = null (when you do not delete the nodeToDelete)
                    - else
                        - parent.next = node.next
                        - node.next = null (when you do not delete the nodeToDelete)

            - delete nodeToDelete in all cases
    
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

    insertAfter(index, data) {
        let newNode = new LinkedListNode(data);
        let nodeBeforeNewNode = this.find(index);

        if (nodeBeforeNewNode == null) return;

        newNode.next = nodeBeforeNewNode.next;
        nodeBeforeNewNode.next = newNode;

        if (newNode.next == null)
            this.tail = newNode;
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
                this.tail.next = null;
            } else {
                parent.next = nodeToDelet.next;
            }
        }

        nodeToDelet.next = null;
        nodeToDelet = null;
    }
}

let list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);

list.printList();

// list.insertAfter(0, 55);
// list.insertBefore(1, 99);

list.deleteNode(null, 1); // delete using data
list.deleteNode(1); // delete using index

list.printList();
