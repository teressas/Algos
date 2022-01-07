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

    // ----------- Week 1 Day 5 algo ------------
 
    secondToLast(){
        //return the value of the second to last node in the list.
        // a list with 1 node? an empty list?
        // i.e.(1)->(2)->(3)->(4)
        // return 3
        // let runner = this.head
        // as long as runner's next node exists, then follower = this.head and runner = runner.next
        // edge case 1 - what to do if there's an empty list
        // edge case 2 - what to do if there's only one node
        
        let runner = this.head
        let secondToLastNode
        if(!runner){
            return "empty list"
        }
        if(!runner.next){
            return runner
        }
        while(runner.next) {
            secondToLastNode = runner
            runner = runner.next
        }
        console.log(secondToLastNode.val)
    }

    
    removeVal(val){
        //Remove the node that has the matching given value
        //HINT: The list is constructed by connecting nodes with pointers
        // Play with the pointers so that you can remove that node from the list. 
    }

    prepend(newVal, targetVal){
        //Insert a new node before a node that has the given target value
        // take newVal and put it into a node
        // let runner = this.head, if runner.next == targetVal then runner.next = newNode
        // otherwise runner = runner.next
        // edge case 1 - check to see if list is empty, if it is then return empty
        // edge case 2 - check to see if targetVal exists, if it doesn't then return targetVal doesn't exist
        // edge case 3 - check if the targetVal is the head, if it is use insertAtFront method

        let runner = this.head
        let newNode = new Node(newVal)
        // edge case 1
        if(!runner){
            return "empty"
        }
        // edge case 2
        if (runner == null) {
            return "TargetVal: " + targetVal + "Not found";
        }
        // edge case 3
        if(runner == targetVal) {
            newNode.next = runner
            runner = newNode
        }
        while((runner) && (runner != targetVal)){
            if(runner.val == targetVal) {
                newNode.next = runner.next
                runner.next = newNode
            } 
            runner = runner.next
        }   
    }

    // My personal favourite on SLL
    hasLoop(){
        //determine whether this SLL has a loop
        // create a list that links the last node's next to the head
        // let runner = this head
        // while there's a runner, if runner.next is not null then return true 
        // otherwise return false
        let runner = this.head
        while(runner) {
            if(runner.next == this.head) {
                return true
            }
            runner = runner.next
        }
        return false
        
    }
    


    // ------------ END OF Week 1 Day 5 algo ------------

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
var b = new Node(3)
var c = new Node(4)
var d = new Node(5)
a.next = b;
b.next = c; 
c.next = d;
d.next = a
var list1 = new SLL();
list1.head = a;
list1.printList();
console.log(list1.hasLoop())
// list1.printList();
// list1: (1) --> (2) --> (3) --> null


// Solution

// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// class SLL {
//     constructor() {
//       this.head = null;
//     }

//     // ----------- Week 1 Day 5 algo ------------
    
//     secondToLast(){
//       var follower
//       var runner = this.head
//       while(runner.next){
//         follower = runner
//         runner =runner.next
//       }
//       console.log(follower.val)
//         //return the value of the second to last node in the list.
//         // a list with 1 node? an empty list?
//     }
 
//     removeVal(num){
//       var follower =this.head
//       var runner = this.head.next
//       while(runner.val != num){ 
//         follower = runner
//         runner =runner.next
//         }
//       follower.next = runner.next
//       console.log("removed: " + num)
//     }
      
        
      
        
        
        
//         //Remove the node that has the matching given value
//         //HINT: The list is constructed by connecting nodes with pointers
//         // Play with the pointers so that you can remove that node from the list. 

//     prepend(newVal, targetVal){
//         //Insert a new node before a node that has the given target value
//         var follower;
//         var runner = this.head;

//         // edge case
//         if (runner == null) {
//           return;
//         }

//         // Find target Node
//         while ((runner != null)
//               && (runner.val != targetVal)) {
//           follower = runner;
//           runner = runner.next;
//         }

//         // If node not found, error out
//         if (runner == null) {
//           return "TargetVal: " + targetVal + "Not found";
//         }
//         var newNode = new Node(newVal);
//         follower.next = newNode;
//         newNode.next = runner;
//     }

//     // My personal favourite on SLL
//     hasLoop(){
//         //determine whether this SLL has a loop
//     }
//     // ------------ END OF Week 1 Day 5 algo ------------

//     printList(){
//         if(!this.head){
//             console.log("Empty list");
//             return
//         }
//         var runner = this.head;
//         while(runner){ // while(runner != null)
//             console.log(runner.val);
//             runner = runner.next;            
//         }
//     }

// }

// var a = new Node(1)
// var b = new Node(2)
// var c = new Node(3)
// var d = new Node(4)
// var e = new Node(5)
// var f = new Node(6)
// var g = new Node(7)
// var h = new Node(8)
// var i = new Node(9)
// var j = new Node(10)
// a.next = b;
// b.next = c; 
// c.next = d; 
// d.next = e; 
// e.next = f; 
// f.next = g; 
// g.next = h; 
// h.next = i; 
// i.next = j; 
// j.next = null; 
// var list1 = new SLL();
// list1.head = a;
// list1.printList();
// console.log("---- second to last ----")
// list1.secondToLast()
// console.log("-------------------")
// console.log("---- remove value ----")

// list1.removeVal(4)
// list1.printList();

// console.log("-------------------");
// console.log("Testing Prepend: prepend(8,5)");
// list1.prepend(8,5)
// list1.printList();


// // Heidi's solution

// secondToLast(){
//     let fast = this.head;
//     let slow = fast;

//     while(fast.next){
//       slow = fast;
//       fast = fast.next;
//     }

//     return slow.val;
//     //return the value of the second to last node in the list.
//     // a list with 1 node? an empty list?
// }

// removeVal(val){
//     while(this.head.val == val){
//       this.head = this.head.next;
//     }   
//     let curr = this.head;
//     let prev = curr;  

//     while(curr){
//       if(curr.val == val){
//         prev.next = curr.next;
//         curr.next = null;
//         curr = prev.next;
//       }else{
//         prev = curr;
//         curr = curr.next;
//       }
//     }
//     //Remove the node that has the matching given value
//     //HINT: The list is constructed by connecting nodes with pointers
//     // Play with the pointers so that you can remove that node from the list. 
// }