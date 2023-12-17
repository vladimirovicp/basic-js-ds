//tutorial https://www.youtube.com/watch?v=loLjdVaaDKs&ab_channel=ЕленаЛитвинова—Искусствовеб-разработки

import {assert} from "chai";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        //root — return root node of the tree
        //root — возвращает корневой узел дерева
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
        //has(data) — returns true if node with the data exists in the tree and false otherwise
        //has(data) — возвращает true, если узел с данными существует в дереве, и false в противном случае.

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
        //find(data) — returns node with the data if node with the data exists in the tree and null otherwise
        //find(data) — возвращает узел с данными, если узел с данными существует в дереве, и null в противном случае

        function findNode(node,data) {
            if(!node){
                return null;
            }

            if(node.data === data){
                return node;
            }

            if(data < node.data){
                return node.left = findNode(node.left, data)
            }

            if(data > node.data){
                return node.right = findNode(node.right, data)
            }
        }

        return findNode(this.rootNode,data);
    }

    remove(data) {
        //remove(data) — removes node with the data from the tree if node with the data exists
        //Remove(data) — удаляет узел с данными из дерева, если узел с данными существует

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


const myThree = new BinarySearchTree();

// myThree.add(8);
// myThree.add(5);
// myThree.add(6);
// myThree.add(4);

myThree.add(15)
myThree.add(3)
myThree.add(36)
myThree.add(2)
myThree.add(12)
myThree.add(28)
myThree.add(39)

console.log(myThree)
// console.log('root:',myThree.root())
// console.log('has 3',myThree.has(3))
// console.log('has 27',myThree.has(27))
//
// console.log('find:', myThree.find(36))

// myThree.remove(36)
// console.log(myThree)
//
// console.log('min ',myThree.min())
// console.log('max ',myThree.max())




