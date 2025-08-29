const Queue = require('./Queue.js');

module.exports = class BinarySearchTree {
    root;

    insert(data) {
        let newNode = new BinarySearchTree.TreeNode(data);

        if (this.root == null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while (currentNode != null) {
            if (newNode.data < currentNode.data) {
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    height(node = this.root) {
        if (node == null) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    find(data) {
        let currentNode = this.root;

        while (currentNode != null) {
            if (data == currentNode.data)
                return currentNode;
            else if (data < currentNode.data)
                currentNode = currentNode.left;
            else
                currentNode = currentNode.right;
        }

        return null;
    }

    findNodeAndParent(data) {
        let currentNode = this.root;
        let parent;
        let isLeft;

        let nodeAndParentInfo;

        while (currentNode != null) {
            if (data == currentNode.data) {
                nodeAndParentInfo = new BinarySearchTree.NodeAndParent(currentNode, parent, isLeft);
                break;
            }
            else if (data < currentNode.data) {
                parent = currentNode;
                currentNode = currentNode.left;
                isLeft = true;
            }
            else {
                parent = currentNode;
                currentNode = currentNode.right;
                isLeft = false;
            }
        }

        return nodeAndParentInfo;
    }

    delete(data) {
        let nodeAndParentInfo = this.findNodeAndParent(data);

        if (nodeAndParentInfo == null) return;

        else if (nodeAndParentInfo.node.left != null && nodeAndParentInfo.node.right != null)
            this.#deleteHasChilds(nodeAndParentInfo.node);

        else if (nodeAndParentInfo.node.left != null ^ nodeAndParentInfo.node.right != null)
            this.#deleteHasOneChild(nodeAndParentInfo.node);

        else if (nodeAndParentInfo.node.left == null && nodeAndParentInfo.node.right == null)
            this.#deleteLeaf(nodeAndParentInfo);
        else
            return;
    }

    #deleteHasChilds(nodeToDelete) {
        let currentNode = nodeToDelete.right;
        let parent = null;

        while (currentNode.left != null) {
            parent = currentNode;
            currentNode = currentNode.left;
        }

        nodeToDelete.data = currentNode.data;

        if (parent != null)
            parent.left = currentNode.right;
        else
            nodeToDelete.right = currentNode.right;

        currentNode.right = null;
        currentNode = null;
    }

    #deleteHasOneChild(nodeToDelete) {
        let nodeToReplace = nodeToDelete.left || nodeToDelete.right;
        nodeToDelete.left = nodeToReplace.left;
        nodeToDelete.right = nodeToReplace.right;
        nodeToDelete.data = nodeToReplace.data;

        nodeToReplace.left = null;
        nodeToReplace.right = null;
        nodeToReplace = null;
    }

    #deleteLeaf(nodeAndParentInfo) {
        if (nodeAndParentInfo.parent == null) {
            this.root = null;
            return;
        }

        if (nodeAndParentInfo.isLeft)
            nodeAndParentInfo.parent.left = null;
        else
            nodeAndParentInfo.parent.right = null;

        nodeAndParentInfo.node = null;
    }

    balance() {
        let nodes = [];
        this.#inOrderToArray(this.root, nodes);
        this.root = this.#recursiveBalance(0, nodes.length - 1, nodes);
    }

    #inOrderToArray(node, nodes) {
        if (node == null) return;
        this.#inOrderToArray(node.left, nodes);
        nodes.push(node.data);
        this.#inOrderToArray(node.right, nodes);
    }

    #recursiveBalance(start, end, nodes) {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);

        let newNode = new BinarySearchTree.TreeNode(nodes[mid]);

        newNode.left = this.#recursiveBalance(start, mid - 1, nodes);
        newNode.right = this.#recursiveBalance(mid + 1, end, nodes);

        return newNode;
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

    static NodeAndParent = class {
        constructor(node, parent, isLeft) {
            this.node = node;
            this.parent = parent;
            this.isLeft = isLeft;
        }
    }
}
