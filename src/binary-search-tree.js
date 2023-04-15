const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');
//tutorial https://www.youtube.com/watch?v=loLjdVaaDKs&ab_channel=ЕленаЛитвинова—Искусствовеб-разработки

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    return this.root;
    // remove line with error and write your code here
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newNode = new Node(data);
    if(!this.root){
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode){
      if (newNode.data < currentNode.data){
        if(!currentNode.left){
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else{
        if(!currentNode.right){
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }

    }

  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};