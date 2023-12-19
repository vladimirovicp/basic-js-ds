//const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

//Реализуйте очередь с заданным интерфейсом через связанный список (используйте расширение ListNode).
// Каждый экземпляр очереди должен иметь 3 метода:
// * enqueue(value) — помещает значение в конец очереди
// * dequeue — извлекает значение из начала очереди и удаляет его
// * getUnderlyingList — возвращает базовый связанный список


class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.value = {}
    this.next = {};
    this.head = 0
    this.tail = 0

    this.headList = null;
  }


  getUnderlyingList() {
    //returns { value: 3, next: null }

    if(this.head !== this.tail){

      this.headList = new ListNode(this.value[this.head])

      for( let i = this.head + 1; i < this.tail; i++){

        let current = this.headList;

        while(current.next) {
          current = current.next;
        }

        current.next = new ListNode(this.value[i]);

      }

      return this.headList;

    }

    return null;


  }

  enqueue(value) {
    //добавляет элемент в очередь

    if (this.tail > 0){
      this.next[this.tail - 1] = value;
    }
    this.value[this.tail] = value
    this.tail++
  }

  dequeue() {
    //возвращает верхний элемент из очереди и удаляет его
    let removed = this.value[this.head]
    delete this.value[this.head]
    delete this.next[this.head]
    this.head++
    return removed
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(3);
console.log(queue)

//console.log(queue.dequeue()) // returns the top element from queue and deletes it, returns 1
//queue.dequeue()
console.log(queue)

console.log(queue.getUnderlyingList())
