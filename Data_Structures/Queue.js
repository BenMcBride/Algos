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
console.log("isEmpty: " + queue.isEmpty());
console.log("size: " + queue.size());
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
console.log("front: " + queue.front());
console.log("dequeue: " + queue.dequeue());
console.log("front: " + queue.front());
console.log("size: " + queue.size());
console.log("isEmpty: " + queue.isEmpty());
console.log("---");

// LinkedQueue tests
const linkedQueue = new LinkedQueue();

console.log("isEmpty: " + linkedQueue.isEmpty());
console.log("size: " + linkedQueue.size());
linkedQueue.enqueue(11);
linkedQueue.enqueue(12);
linkedQueue.enqueue(13);
console.log("front: " + linkedQueue.front());
console.log("dequeue: " + linkedQueue.dequeue());
console.log("front: " + linkedQueue.front());
console.log("size: " + linkedQueue.size());
console.log("isEmpty: " + linkedQueue.isEmpty());
