const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor(){
    this.arr = [];
  }

  push(element) {
    //добавляет элемент в стек
    this.arr.push(element);
  }

  pop() {
    //возвращает верхний элемент из стека и удаляет его
    return this.arr.pop()
  }

  peek() {
    //возвращает peek, но не удаляет его
    return this.arr[this.arr.length - 1]
  }
}

module.exports = {
  Stack
};
