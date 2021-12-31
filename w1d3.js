class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLL {
    constructor() {
            this.head = null;
        }

    // ------------------------------------- Week 1 Day 3 algo -------------------------------------------
    
    insertAtFront(val){
        // create a new instance of Node and call it newNode
        let newNode = new Node(val);
        // if there's no head, then create a new node and make it the head
        if(!this.head){
            this.head = newNode;
        } else {
            // else point the new node's next arrow to the current head
            // and make the new node the new head
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    removeHead(){
        // store the current head into a variable called node
        // then make the next node the head to remove the current head
        let node = this.head;
        this.head = node.next;

    }

    //*** bonus question ***
    average(){
        // Find the average of all the nodes inside a Singly Linked List
        // HINT: How to get an average? What information do we need to generate an average?
        // BONUS: What if one of the nodes stored String instead of int? How do you want to handle that edge case?
        // have a runner start at this.head
        // have the total variable value start at the this.head's value and then increment as the runner moves to the next node
        // as the runner moves to the next node, increment the count to indicate the number of nodes
        // increase the total and increment the count until runner.next equals to null
        let runner = this.head
        let total = runner.val;
        let count = 1;
        // loop through list until runner equals to null
        while(runner.next) {
            if (typeof(runner.data) !== "number") {
                return "invalid number";
            } else {
                runner = runner.next;
                total += runner.val;
                count ++
            }
        }
        console.log("Total:", total);
        console.log("Count:", count);
        let average = total / count;
        return average;
    }
    // ------------------------------------- END OF Week 1 Day 3 algo -------------------------------------------



    // If you want to use the following methods, please fill in the logic on your own. (You can copy from Discord if you want to)
    // ------------------------------------- Week 1 Day 2 algo -------------------------------------------
    isEmpty(){
        // if the list has no head then return true to indicate that the list is empty else return false
        if(!this.head) {
            return true
        }
        return false
    } 

    insertAtBack(val){
        // create an instance of the new Node and call it newNode
        // let the current head equal to the new variable runner
        let newNode = new Node(val);
        let runner = this.head;
        // while there is a runner.next node, make runner equal to the head's next node
        // if not then the new Node becomes the next node.
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = newNode;
    }

    arrToList(arr){
        // let i from the given array indicate the val in the insertAtBack method
        // loop through each item in the array
        for(var i=0; i<arr.length; i++){
            this.insertAtBack(arr[i]);
        }
    }

    printList(){
        if(!this.head){
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while(runner){ // while(runner != null)
            console.log(runner.val);
            runner = runner.next;            
        }
    }

}

var a = new Node(1)
var b = new Node(2)
var c = new Node(a)
a.next = b;
b.next = c; 
var list1 = new SLL();
list1.head = a;
list1.insertAtFront(4);
list1.insertAtBack(5);
//list1.removeHead();
list1.arrToList([6,7,8]);
console.log(list1.average());
list1.printList();
var list2 = new SLL();
list2.isEmpty();

// list1: (1) --> (2) --> (3) --> null


// SOLUTIONS

// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// class SLL {
//     constructor() {
//             this.head = null;
//         }

//     // ------------------------------------- Week 1 Day 3 algo -------------------------------------------
    
//     insertAtFront(val){
//         var newNode = new Node(val);
//         // construct a node with the val
//         // make the new node as the front (HINT: What is the front of a Singly Linked List)
//         if (!this.head){
//           this.head = newNode;
//         } else {
//             newNode.next = this.head;
//             // var temp = this.head;
//             this.head = newNode;
//             // this.head.next = temp; 
//             // console.log(newNode)
//         }
//       }
//       // head
//       // (1) --> (2) --> (3) --> null

//       // line16: newNode(100)
//       //line 22: 
//       //                  head
//       // newNode(100) --> (1) --> (2) --> (3) --> null

//       //line 24: 
//       // head
//       // newNode(100) --> (1) --> (2) --> (3) --> null

//     removeHead(){
//         // Remove the head (HINT: What will be the new head?)
      
//     }

//     //*** bonus question ***
//     average(){
//         // Find the average of all the nodes inside a Singly Linked List
//         // HINT: How to get an average? What information do we need to generate an average?
//         // BONUS: What if one of the nodes stored String instead of int? How do you want to handle that edge case?

//         var runner = this.head;
//         // Loop until runner.next = null
//         var count = 1;
//         var total = runner.val;
//         while (runner.next) {   
//           // if (typeof())
//           runner = runner.next;
//           total += runner.val;
//           count++;
//           console.log("Count: " + count);
//           console.log("Total: " + total);
//         }
//         var average = total / count;
//         return average;
//     }
