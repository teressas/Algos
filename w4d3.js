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
      // create new Node variable and pass in the new data to be inserted at the front of DLL
      // check if a DLL exists, if there is no head then assign a newNode to a head and a tail
      // Otherwise: 
      // the head's prev node is currently NULL, assign the newNode as the head's prev node
      // then assign the head as the newNode's next node
      // then assign the newNode as the new head.
      // return the DLL
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
      // create new Node variable and pass in the new data to be inserted at the back of DLL
      // check if a DLL exists, if there is no head then assign a newNode to a head and a tail
      // Otherwise:
      // the tail's next node is currently NULL, assign the tail's next node as the newNode
      // then assign the tail as the newNode's prev node
      // then assign the newNode as the tail
      // return the DLL
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
  // Edge case: 2->2->2->2
        // start at the head and loop through DLL
        // if data is equal to the head and the head.next then make the next node the head
        // and make the head.prev equal to null
        // if the runner equal to the tail, that is the end of the list, 
        // make the runner equal to null to remove the tail
        // start at head and loop through DLL and find node that equals data
        // when node = data, data.prev.next node equals to data.next node
        // also, change data.next.prev equals to data.prev
    remove(data){
      if(!this.head || !data) {
        console.log(`---Could not delete ${data} from DLL---`)
      } else {
          // if the data equals to the head, then make the next node the head
        while(this.head.data == data) {
          this.head = this.head.next;
          // this.head.prev = null;
          // when the new node becomes the head and it doesn't equal to data
          if(this.head == null) {
            this.tail = null
            return
          }

          // solves for edge case such as 2->3->3->3
          if (this.tail = null) {
            this.head.prev = null;
            return
          }
        }
        // if the data equals to the tail, then make the prev node the tail
        while(this.tail == data) {
          this.tail = this.tail.prev;
          this.tail.next = null;
          return
        }
        let runner = this.head;
        while(runner) {
          if(runner.data == data) {
            runner.prev.next = runner.next
            runner.next.prev = runner.prev;
            // this works for 1->2->2->2
            // runner.next = runner.prev
          }
          runner = runner.next
        }
        return;
      }
    }
  
    append(target, newData){
      // let newNode carry the newData which is to be added after the target node
      // runner will start at the head and loop through the DLL
      // as long as there's a runner, if runner is equal to target then
      // runner's next node is equal to newNode.next
      // then make the runner.next.prev node eqauls to newNode
      // then make the runner.next node equal to the newNode
      // and newNode.prev's node equals to the runner
      // if not then make runner equal to the next node to move the runner
        // Edge Case: if the runner.data equals to the target and also equals to the tail
        // add the newNode after the tail using the insertAtBack method
      var newNode = new Node(newData);
      let runner = this.head;
      while(runner){
        if(runner.data == target) {
          if(runner == this.tail) {
            this.insertAtBack(newData)
          }
          newNode.next = runner.next;
          runner.next.prev = newNode;
          runner.next = newNode;
          newNode.prev = runner;
        }
        runner = runner.next;
      }
    }

  }
  
  let emptyList = new DoublyLinkedList();
  
  //console.log(emptyList.toArray());
  
  let list1 = new DoublyLinkedList();
  //list1.insertAtFront(3);
  list1.insertAtFront(2);
  list1.insertAtFront(2);
  list1.insertAtFront(2);
  list1.insertAtFront(1);
  //list1.insertAtBack(5);
  console.log(list1.toArray());
  list1.remove(2);
  // console.log(list1.isEmpty());
  //list1.append(1,6);
  console.log(list1.toArray());
  
  let list2 = new DoublyLinkedList();
  // list2.insertAtFront(1);
  // list2.insertAtFront(2);
  // list2.insertAtFront(3);
  // list2.insertAtFront(2);
  // list2.insertAtFront(5);
  // list2.insertAtFront(6);
  // list2.insertAtBack(5);
  // console.log(list2.toArray());
  // list2.remove(2);
  // list2.append(5, 8);
  // console.log(list2.toArray());

  
  
// solutions

// insertAtFront(data) {
//   const newNode = new Node(data);

//   if (!this.head) {
//     this.head = newNode;
//     this.tail = newNode;
//   } else {
//     let temp = this.head
//     temp.prev = newNode;
//     newNode.next = this.head;
//     this.head = newNode;
//   }
//   return this;
//   //insert a node at front
// }

// insertAtBack(data) {
//   const newTail = new Node(data);

//   if (!this.head) {
//     // if no head set the newTail to be both the head and the tail
//     this.head = newTail;
//     this.tail = newTail;
//   } else {
//     this.tail.next = newTail;
//     newTail.prev = this.tail;

//     this.tail = newTail;
//   }
//   return this;
//   //insert a node at back
// }

// remove(data){
//     const runner;
//     // remove the nodes with the search data.
//     while(!number.data == data){
//       runner = runner.next;
//     }
//     runner.prev.next = runner.next
//     runner.next.prev = runner.prev
//     runner.prev = null
//     runner.next = null
//    }
  