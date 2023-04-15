const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.mainRoot = null;
  }

  root() {
    return this.mainRoot;
  }

  add(data) {
    this.mainRoot = addNewData(this.mainRoot, data);

    function addNewData(nodeTree, data) {
      if(!nodeTree) return new Node(data);

      if(nodeTree.data === data) return data;

      if (data > nodeTree.data) {
        nodeTree.right = addNewData(nodeTree.right, data);
      } else {
        nodeTree.left = addNewData(nodeTree.left, data);
      }

      return nodeTree;
    }
  }

  has(data) {
    return searchDataInTree(this.mainRoot, data);

    function searchDataInTree(nodeTree, data) {
      if (!nodeTree) return false;

      if (nodeTree.data === data) return true;

      if (data < nodeTree.data) {
        return searchDataInTree(nodeTree.left, data);
      } else {
        return searchDataInTree(nodeTree.right, data);
      }
    }
  }

  find(data) {
    return findDataIntree(this.mainRoot, data);

    function findDataIntree(nodeTree, data) {
      if (!nodeTree) {
        return null;
      }

      if (nodeTree.data === data) {
        return nodeTree;
      }

      if (data < nodeTree.data) {
        nodeTree = findDataIntree(nodeTree.left, data);
      } else {
        nodeTree = findDataIntree(nodeTree.right, data);
      }
      return nodeTree;
    }
  }

  remove(data) {
    this.mainRoot = removeNodeTree(this.mainRoot, data);

    function removeNodeTree(nodeTree, data) {
      if (!nodeTree) return null;

      if (nodeTree.data > data) {
        nodeTree.left = removeNodeTree(nodeTree.left, data);
        return nodeTree;
      } else if (nodeTree.data < data) {
        nodeTree.right = removeNodeTree(nodeTree.right, data);
        return nodeTree;
      } else {
        if (!nodeTree.left && !nodeTree.right) return null;

        if (!nodeTree.left) {
          nodeTree = nodeTree.right;
          return nodeTree;
        }

        if (!nodeTree.right) {
          nodeTree = nodeTree.left;
          return nodeTree;
        }

        let findMinValue = nodeTree.right;
        while (findMinValue.left) {
          findMinValue = findMinValue.left;
        }
        nodeTree.data = findMinValue.data;
        nodeTree.right = removeNodeTree(nodeTree.right, findMinValue.data);

        return nodeTree;
      }
    }
  }

  min() {
    if (!this.mainRoot) return;

    let nodeTreeMin = this.mainRoot;
    while (nodeTreeMin.left) {
      nodeTreeMin = nodeTreeMin.left
    }
    return nodeTreeMin.data;
  }

  max() {
    if (!this.mainRoot) return;

    let nodeTreeMax = this.mainRoot;
    while (nodeTreeMax.right) {
      nodeTreeMax = nodeTreeMax.right;
    }

    return nodeTreeMax.data;
  }
}

module.exports = {
  BinarySearchTree
};