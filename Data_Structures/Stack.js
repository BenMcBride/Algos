/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
  /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
  constructor() {
    this.items = [];
  }

  /**
   * Adds a new given item to the top / back of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {number} The new length of this stack.
   */
  push(item) {
    this.items[this.items.length] = item;
    return this.items.length;
  }

  /**
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const lastItem = this.items[this.items.length - 1];
    this.items.length--;
    return lastItem;
  }

  /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top / last item of this stack.
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  /**
   * Returns whether or not this stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the size of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }
}

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
  }

  /**
   * Adds a new item to the top of the stack (the head).
   * - Time: O(1) constant.
   * - Space: O(1).
   * @param {any} val The val to add.
   * @returns {void}
   */
  push(val) {
    const newNode = new StackNode(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Removes the top item (the head).
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {any} The top item of the stack.
   */
  pop() {
    if (this.head === null) {
      return null;
    }

    const removed = this.head;
    this.head = this.head.next;

    return removed.data;
  }

  /**
   * Returns the top item of the stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {any} The top item.
   */
  peek() {
    return this.head ? this.head.data : null;
  }

  /**
   * Determines if the stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Gets the count of items in the stack.
   * - Time: O(n) linear, n = list length.
   * - Space: O(1).
   * @returns {number} The total number of items.
   */
  size() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(11);
stack.push(12);

console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

const node1 = new StackNode(10);
const node2 = new StackNode(11);
const node3 = new StackNode(12);
node1.next = node2;
node2.next = node3;

const linkedListStack = new LinkedListStack();
linkedListStack.head = node1;

console.log(linkedListStack.head.data);
console.log(linkedListStack.head.next.data);
console.log(linkedListStack.head.next.next.data);
