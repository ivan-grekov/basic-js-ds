const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(data = null) {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addDataInside(this.rootNode, data);
    function addDataInside(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addDataInside(node.left, data);
      } else {
        node.right = addDataInside(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return findInside(this.rootNode, data);
    function findInside(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? findInside(node.left, data)
        : findInside(node.right, data);
    }
  }

  find(data) {
    return findNode(this.rootNode, data);
    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      retun;
    }
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      retun;
    }
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
