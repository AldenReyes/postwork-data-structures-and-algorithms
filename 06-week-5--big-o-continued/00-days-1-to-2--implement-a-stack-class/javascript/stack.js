class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (!this.isFull()) {
      this.stack.push(item);
    } else {
      throw new Error('Stack is full');
    }
  }

  // remove item from top of stack and return it
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }
  }

  // return item at top of stack without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    return this.stack.length === 0;
  }

  // return true if stack is full, otherwise false
  isFull() {
    return this.stack.length === this.limit;
  }

  // return number of items in stack
  size() {
    return this.stack.length;
  }

  // return -1 if item not in stack, otherwise integer representing
  // how far it is from the top
  search(target) {
    let counter = this.stack.length - 1;
    for (const element of this.stack) {
      if (element === target) {
        return counter;
      }
      counter--;
    }
    return -1;
  }

  // print contents of stack: do not return the stack itself!
  print() {
    this.stack.forEach((element) => {
      console.log(element);
    });
  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = Stack;
