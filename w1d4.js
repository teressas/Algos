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

    // ----------- Week 1 Day 4 algo ------------
    isEmpty(){
        if(!this.head){
            return true;
        }
        return false;
    }

    contains(val){
        //Determines whether or not the given search value exists in this list.
        //val = 3
        // ( 1 ) --> (2) --> (3) --> null
        // return a boolean
        // check if list is empty
        if(this.isEmpty()){
            return;
        }
        let runner = this.head;
        // have a runner check each node, if node.val equals to val then return true
        // if not, keep moving the runner to check for val and when stop when runner equals to null
        while(runner){
            if(runner.val == val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // containsRecursive(val, curr = this.head){
    //     // Determines the number of nodes that the given search value exists in this list.
    //     // i.e. val = 10, 
    //     //(10) --> (2) --> (10) --> (10) --> null 
    //     // This should return 3
    //     // curr = this.head means curr is the default val of SLL
    //     // have curr search for the value
    //     // as long as curr is null, increment the count and return the sum of the count
    //     while(curr.next){
    //         let count = 1;
    //         if(curr.val == val){
    //             count++; 
    //             //return count
    //         } else {
    //             this.containsRecursive(val, curr.next)
    //         }   
    //     return count;     
    //     // console.log("Count:", count);
    //     }
    // }
    containsRecursive(val, curr = this.head){
        if(!curr){
            console.log("false")
            return false        
        }
        if(curr.val == val){
            console.log("true")
            return true
        }else{
            this.containsRecursive(val, curr.next)
        }
        // Determines the number of nodes that the given search value exists in this list.
        // i.e. val = 10, 
        //(10) --> (2) --> (10) --> (10) --> null 
        // This should return 3
    }

    removeBack(){
        if(!this.head){
            return
        }
        let runner = this.head;
        if(!runner.next){
            this.head=null;
        }
        while(runner.next.next){
            runner = runner.next;
        }
        runner.next =null;
        //remove the last node of a SLL
    }

    // ------------ END OF Week 1 Day 4 algo ------------


    printList(){
        if(!this.head){
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while(runner){ // runner will be null at the end
            console.log(runner.val);
            runner = runner.next;            
        }
        runner  = this.head;
        while(runner.next){ //runner will be the end node
          runner = runner.next;
        }
        var endnode = runner

    }

}

var a = new Node(1)
var b = new Node(2)
var c = new Node(3)
var d = new Node(2)
a.next = b;
b.next = c; 
c.next = d;
var list1 = new SLL();
list1.head = a;
// console.log(list1.contains(2));
list1.removeBack();
list1.printList();
//list1.containsRecursive(2, list1.head);
// list1: (1) --> (2) --> (3) --> null

