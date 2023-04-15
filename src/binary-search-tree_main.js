//tutorial https://www.youtube.com/watch?v=loLjdVaaDKs&ab_channel=ЕленаЛитвинова—Искусствовеб-разработки

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    root() {
        return this.root;
    }

    add(data) {
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

    // has(/* data */) {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
    //
    // find(/* data */) {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
    //
    // remove(/* data */) {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
    //
    // min() {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
    //
    // max() {
    //   throw new NotImplementedError('Not implemented');
    //   // remove line with error and write your code here
    // }
}


const myThree = new BinarySearchTree();

myThree.add(8);
myThree.add(5);
myThree.add(6);
myThree.add(4);

console.log(myThree)
//console.log(myThree.root())

