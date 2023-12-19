class Stack {

  constructor(){
    this.arr = [];
  }

  push(element) {
    //добавляет элемент в стек

    this.arr.push(element);

    //console.log('this.arr',this.arr);
    
  }

  pop() {
    //возвращает верхний элемент из стека и удаляет его, возвращает 1
    return this.arr.pop()
  }

  peek() {
    //возвращает peek, но не удаляет его, возвращает 1
    return this.arr[this.arr.length - 1]
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.pop();

console.log(stack);


console.log(stack.peek())