class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;

      // move to the last node
      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }

    this.length++;
  }

  //удаление элементов
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  }

  // удалить элемент
  remove(element) {
    this.removeAt( this.indexOf(element) );
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  print() {
    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

}


function removeKFromList(l, k ) {

  let list = new LinkedList();

  l.forEach(item=>{
    list.add(item)
  })


  list.print();

  // while( list.indexOf(k) !== -1){
  //   list.remove(k)
  // }


  //console.log('indexOf',list.indexOf(k));
  // console.log('\n')
  //
  // list.remove(k)
  // list.print();
  //
  // console.log('\n')
  // list.remove(k)
  // list.print();
  //
  // console.log('\n')
  // list.remove(k)
  // list.print();
  //
  // console.log('indexOf',list.indexOf(k));

  //list.print();
  //console.log(l)

  console.log('\n')

  // let myList = new ListNode(null);
  // let resultList = myList;
  // myList.head = l;
  //
  // let current = myList;
  //
  // while (current){
  //
  //   if (current.value !== k) {
  //     console.log(current.value)
  //     resultList.next = new ListNode(current.value);
  //     resultList = resultList.next;
  //
  //   }
  //   current = current.next;
  // }

  //list

 // console.log('list',list)

  //let current = list.head;


  let l2 = list.head;
  let current = l2;


  let result;

  while (current) {

    if (current.value === k) {
      if (!result) {
        l2 = current.next;
      } else {
        result.next = current.next;
      }
    } else {
      result = current;
    }

    current = current.next;
  }

  console.log(l2);








}
const k = 3;
const l = [k, 1, 2, k, 4, 5];


removeKFromList(l,k);



