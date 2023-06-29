const Stack = require("./Stack");

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Determines whether the sum of the left half of the queue items is equal to
   * the sum of the right half. Avoid indexing the queue items directly via
   * bracket notation, use the queue methods instead for practice.
   * Use no extra array or objects.
   * The queue should be returned to it's original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Whether the sum of the left and right halves is equal.
   */
  isSumOfHalvesEqual() {
    if (this.isPalindrome()) {
      return true;
    }
    let sum1 = 0;
    let sum2 = 0;
    const halfSize = Math.floor(this.length / 2);
    let count = 0;
    let current = this.head;
    while (count < halfSize) {
      sum1 += current.data;
      current = current.next;
      count++;
    }
    if (this.length % 2 !== 0) {
      current = current.next;
    }
    while (current !== null) {
      sum2 += current.data;
      current = current.next;
    }
    return sum1 === sum2;
  }

  /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  compareQueues(q2) {
    if (this.size() !== q2.size()) {
      return false;
    }
    let isEqual = true;
    for (let i = 0; i < this.size(); i++) {
      const item1 = this.dequeue();
      const item2 = q2.dequeue();
      if (item1 !== item2) {
        isEqual = false;
      }
      this.enqueue(item1);
      q2.enqueue(item2);
    }
    return isEqual;
  }

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isPalindrome() {
    if (this.isEmpty()) {
      return false;
    }
    const stack = new Stack();
    for (let i = 0; i < this.size(); i++) {
      const item = this.dequeue();
      stack.push(item);
      this.enqueue(item);
    }
    for (let i = 0; i < this.size(); i++) {
      const queueItem = this.dequeue();
      const stackItem = stack.pop();
      if (queueItem !== stackItem) {
        return false;
      }
      this.enqueue(queueItem);
    }
    return true;
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    this.items.push(item);
    return this.items.length;
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    return this.items.shift();
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    return this.items[0];
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.items.length;
  }
}

/* Rebuild the above class using a linked list instead of an array. */
class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    const node = new Node(item);
    // if LinkedQueue is empty, set new node to be head and tail
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // if LinkedQueue isn't empty, put new node at end of LinkedQueue
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this.length;
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const head = this.head;
    this.head = head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    this.length--;
    return head.data;
  }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.head.data;
  }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    return this.length;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Queue tests
const queue = new Queue();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
const queue2 = new Queue();
queue2.enqueue(11);
queue2.enqueue(14);
queue2.enqueue(14);
console.log("---");
queue2.enqueue(12);
queue2.enqueue(13);
console.log(queue2.items);
console.log(queue2.isSumOfHalvesEqual());
console.log(queue2.isPalindrome());
// // LinkedQueue tests
// const linkedQueue = new LinkedQueue();

// console.log("isEmpty: " + linkedQueue.isEmpty());
// console.log("size: " + linkedQueue.size());
// linkedQueue.enqueue(11);
// linkedQueue.enqueue(12);
// linkedQueue.enqueue(13);
// console.log("front: " + linkedQueue.front());
// console.log("dequeue: " + linkedQueue.dequeue());
// console.log("front: " + linkedQueue.front());
// console.log("size: " + linkedQueue.size());
// console.log("isEmpty: " + linkedQueue.isEmpty());
