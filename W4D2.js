class Node {

    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  
  class DoublyLinkedList {
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
  
    isEmpty() {
      if(!this.head) {
        return true
      }
      let newNode = new Node();
      this.head = newNode;
      this.tail = newNode;
      return false
    }
  
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
  
    insertAtFront(data) {
      //insert a node at front
      const newNode = new Node(data)
      if (!this.head){
        this.head = newNode
        this.tail = newNode
      }
      else{
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      }
      return this
    }
  
    insertAtBack(data) {
      //insert a node at back
      const newNode = new Node(data)
      if(!this.head) {
        this.head = newNode
        this.tail = newNode
      }
      else {
        this.tail.next = newNode
        this.tail = newNode.prev
        this.tail = newNode
      }
      return this
    }
  
  }
  
  const emptyList = new DoublyLinkedList();
  
  // console.log(emptyList.toArray());
  
   
  var a = new Node(1)
  var b = new Node(2)
  var c = new Node(3)
  a.next = b;
  b.next = c; 
  c.prev = b;
  b.prev = a; 
  const list1 = new DoublyLinkedList
  list1.head = a;
  list1.tail = c;
  
  // console.log(list1.toArray());
  // console.log(list1.insertAtFront(0));
  // console.log(list1.toArray());
  // console.log(list1.insertAtBack(4));
  console.log(list1.toArray());
  const list2 = new DoublyLinkedList
  console.log(list2.isEmpty());
  