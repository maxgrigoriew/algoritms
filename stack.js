class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.root = null;
        this.counter = 0;
    }

    isEmpty() {
        return this.counter === 0;
    }

    sizeStack() {
        return this.counter;
    }

    push(value) {
        const oldValue = this.root;
        this.root = new StackNode(value);
        this.root.next = oldValue;
        this.counter++;
    }

    pop() {
        if (this.isEmpty()) return null;
        const oldValue = this.root;
        this.root = oldValue.next;
        this.counter--;

        return oldValue.value;
    }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
