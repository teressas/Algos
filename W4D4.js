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
    const newNode = new Node(data);

        if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        } else {
            let temp = this.head
            temp.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
      //insert a node at front
    }

    insertAtBack(data) {
        const newTail = new Node(data);

        if (!this.head) {
        // if no head set the newTail to be both the head and the tail
        this.head = newTail;
        this.tail = newTail; 
    } else {
        this.tail.next = newTail;
        newTail.prev = this.tail;

        this.tail = newTail;
    }
    return this;
      //insert a node at back
    }


    isPalindrome(){
        // i.e. a->b->b->a
        // have a runner start at the beginning node and another runner start at the end node
        // check if dll.head node and ddl.tail node is equal
        // if equal than the head's next arrow will equal to the runner to check the next node
        // same for tail's next arrow


        let frontRunner = this.head;
        let backRunner = this.tail;

        while (frontRunner || frontRunner !== backRunner) {
            if (frontRunner.data == backRunner.data) {
                frontRunner = frontRunner.next;
                backRunner = backRunner.prev;
                return true;
            }
            return false;
        }
        
    }

    removeSortedDup(){
      //in a sorted list, remove the duplicated node. 
      // i.e 1 -> 2 -> 2 -> 3 
      // have runner start from the head and go through entire list
      // runner will check if it's node (runner.data) is equal to the next node
      // if it is, remove the runner's next node.prev arrow and then runner.next equals to the next node.next
      // * EDGE CASE - if this.head == this.tail, point this.head to this.head.next
        if(this.head == null) {
            return false;
        }
        let walker = this.head
        let runner = walker.next
        while(runner) {
            if(walker.data == runner.data) {
                runner.prev.next = runner.next
                runner.next.prev = runner.prev
            } 
            walker = runner
            runner = runner.next
        }
        console.log(this.toArray())
    }


}

let emptyList = new DoublyLinkedList();

console.log(emptyList.toArray());

let list1 = new DoublyLinkedList();
list1.insertAtFront(1);
list1.insertAtFront(2);
list1.insertAtFront(3);
list1.insertAtFront(4);
console.log(list1.toArray());

let list2 = new DoublyLinkedList();
list2.insertAtFront(1);
list2.insertAtFront(2);
list2.insertAtFront(2);
list2.insertAtFront(3);
list2.insertAtFront(5);
list2.insertAtFront(6);
console.log(list2.toArray());
console.log(list2.removeSortedDup());

// let list3 = new DoublyLinkedList();
// list3.insertAtFront("a");
// list3.insertAtFront("b");
// list3.insertAtFront("b");
// list3.insertAtFront("a");
// console.log(list3.isPalindrome());






  // solutions
// isPalindrome(){
//     let frontRunner = this.head;
//     let backRunner = this.tail;

//     while (frontRunner || frontRunner!==backRunner) {
//       //we start the front and back 
//       //and check to see if the values are the same for both moving towards eachother 
//     if (frontRunner.data == backRunner.data){
//         frontRunner = frontRunner.next
//         backRunner = backRunner.prev
//           //if(frontRunner.next.next == backRunner.prev.prev){  
//         }else{
//             return false;
//         }   
    
//     } 
//     return true;
// }