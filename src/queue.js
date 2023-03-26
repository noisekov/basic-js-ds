const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.queue = [];
  }
  getUnderlyingList() {
    let resultObj = {};
    for (let prop in this.queue) {
      resultObj['value'] = this.queue[prop];
      resultObj['next'] = null;
    }
    return resultObj;
  }
  enqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    const topEl = this.queue[0];
    this.queue.shift();
    return topEl;
  }
}

module.exports = {
  Queue
};
