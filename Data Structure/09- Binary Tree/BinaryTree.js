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