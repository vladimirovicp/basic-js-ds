const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {

    this.rootNode = searchTree(this.rootNode, data);
    function searchTree (node, data){
      if(!node){
        return new Node(data);
      }
      // В дереве находятся уникальные элементы, если такой элемент есть то ничего не делаем
      if(node.data === data){
        return node;
      }
      if(data < node.data){
        node.left = searchTree(node.left, data)
      }
      if(data > node.data){
        node.right = searchTree(node.right, data)
      }
      return node;
    }

  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode){
      if(data === currentNode.data){
        // нашли значение.
        return true
      }
      if(data < currentNode.data){
        currentNode = currentNode.left
      } else{
        currentNode = currentNode.right
      }
    }
    //не нашли значение
    return false
  }

  find(data) {

    function findNode(node,data) {
      if(!node){
        return null;
      }
      if(node.data === data){
        return node;
      }
      if(data < node.data){
        return findNode(node.left, data)
      }
      if(data > node.data){
        return findNode(node.right, data)
      }
    }
    return findNode(this.rootNode,data);
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode,data);

    function removeNode(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data < data){
        node.right = removeNode(node.right, data);
        return node;
      } else{
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }
        //Есть оба поддерева
        let minFroRight = node.right;
        while (minFroRight.left){
          minFroRight = minFroRight.left
        }
        node.data = minFroRight.data
        node.right = removeNode(node.right, minFroRight.data)
        return node;
      }
    }
  }

  min() {
    let currentNode = this.rootNode

    while (currentNode.left){
      currentNode = currentNode.left
    }
    return currentNode.data
  }

  max() {
    let currentNode = this.rootNode

    while (currentNode.right){
      currentNode = currentNode.right
    }

    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};
