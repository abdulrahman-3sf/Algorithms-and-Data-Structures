const Queue = require('./Queue.js');

module.exports = class BinaryTree {
    root;

    insert(data) {
        let newNode = new BinaryTree.TreeNode(data);

        if (this.root == null) {
            this.root = newNode;
            return;
        }

        let queue = new Queue();
        queue.enqueue(this.root);

        while (queue.hasData()) {
            let currentNode = queue.dequeue();

            if (currentNode.left == null) {
                currentNode.left = newNode;
                break;
            } else {
                queue.enqueue(currentNode.left);
            }

            if (currentNode.right == null) {
                currentNode.right = newNode;
                break;
            } else {
                queue.enqueue(currentNode.right);
            }
        }
    }

    height(node = this.root) {
        if (node == null) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    find(data, node = this.root) {
        if (node == null) return;
        if (node.data == data) return node;

        let leftResult = this.find(data, node.left);
        if (leftResult != null) return leftResult;

        return this.find(data, node.right);
    }

    delete(data) {
        if (this.root == null) return;

        if (this.root.left == null && this.root.right == null) {
            if (this.root.data == data)
                this.root = null;
            return;
        }

        let queue = new Queue();
        queue.enqueue(this.root);

        let node, nodeToDelete, lastNode, parentOfLast;

        while (queue.hasData()) {
            node = queue.dequeue();

            if (node.data == data)
                nodeToDelete = node;

            if (node.left != null) {
                parentOfLast = node;
                queue.enqueue(node.left);
            }

            if (node.right != null) {
                parentOfLast = node;
                queue.enqueue(node.right);
            }

            lastNode = node;
        }

        if (nodeToDelete) {
            nodeToDelete.data = lastNode.data;

            if (parentOfLast.right == lastNode)
                parentOfLast.right = null;
            else
                parentOfLast.left = null;
        }
    }

    preOrder(node = this.root) {
        let result = [];
        this.#internalPreOrder(node, result);
        console.log(result.join(' -> '));
    }

    #internalPreOrder(node, result) {
        if (node == null) return;
        result.push(node.data);
        this.#internalPreOrder(node.left, result);
        this.#internalPreOrder(node.right, result);
    }

    inOrder(node = this.root) {
        let result = [];
        this.#internalInOrder(node, result);
        console.log(result.join(' -> '));
    }

    #internalInOrder(node, result) {
        if (node == null) return;
        this.#internalInOrder(node.left, result);
        result.push(node.data);
        this.#internalInOrder(node.right, result);
    }

    postOrder(node = this.root) {
        let result = [];
        this.#internalPostOrder(node, result);
        console.log(result.join(' -> '));
    }

    #internalPostOrder(node, result) {
        if (node == null) return;
        this.#internalPostOrder(node.left, result);
        this.#internalPostOrder(node.right, result);
        result.push(node.data);
    }

    print() {
        if (this.root == null) {
            console.log("Tree is empty");
            return;
        }

        let queue = [];
        queue.push({ node: this.root, level: 0 });
        let currentLevel = 0;
        let levelStr = "";

        while (queue.length > 0) {
            let { node, level } = queue.shift();

            // When we move to a new level
            if (level !== currentLevel) {
                console.log(levelStr);
                levelStr = "";
                currentLevel = level;
            }

            levelStr += node.data + " ";

            if (node.left) queue.push({ node: node.left, level: level + 1 });
            if (node.right) queue.push({ node: node.right, level: level + 1 });
        }

        // Print the last level
        if (levelStr.length > 0) console.log(levelStr);
    }

    static TreeNode = class {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
}
