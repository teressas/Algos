class Stack{
    constructor(){
        this.items=[]
        this.capacity= 10
    }

    push(item){
        //add an item at the top
        this.items.push(item);
    }

    pop(){
        //remove the top/last item from the stack 
        //return the removed item
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        // check if the stack is empty
        if(!this.items.length) {
            return "empty"
        }
    }

    isFull(){
        if(this.items.length == this.capacity) {
            return "full"
        }
    }
    
    printStack(){
        console.log("TOP");
        for(var i=this.items.length-1; i >= 0; i--){
            console.log(this.items[i])
        }
    }
}

var stack1 = new Stack()
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.push(6);
stack1.push(7);
stack1.push(8);
stack1.push(9);
stack1.push(10);
// console.log(stack1.items.reverse().toString());
stack1.printStack() //expected: top 5,4,3,2,1
stack1.pop();
stack1.printStack(); //expected: top 4,3,2,1
console.log(stack1.peek()); 
console.log(stack1.size());
console.log(stack1.isEmpty()); 
console.log(stack1.isFull());
