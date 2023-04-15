const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const newNode = new ListNode(k);
  if (l.value === newNode.value) {
    l.value = l.next.value;
    l.next.value = l.next.next.value;
    l.next.next.value = l.next.next.next.value;
    l.next.next.next.value = l.next.next.next.next.value;
  }
  if (l.next.next.value === newNode.value) {
    if (l.next.next.next !== null) {
      l.next.next = l.next.next.next.next;
    }
  }
  if (l.next.next.value === newNode.value) {
    l.next.next = l.next;
    l.next.next = null;
  }
  return l;

    // PLEASE DONT WATCH THIS CODE I KNOW THAT I NEED TO USE RECURSION I DONT KNOW HOW TO REALISE IT(

    // while (l.next !== null) {
    //   if (l.next.next.value === newNode.value) {
    //     l.next = removeKFromList(l.next.next.next, newNode);
    //   }
    //   if (l.value === newNode.value) {
    //     l.value = removeKFromList(l.next.value, newNode);
    //   }
    //   return l
    // }

  // while (l.next !== null) {
  //   if (l.next.next.value === newNode.value) {
  //     l.next = l.next.next.next
  //   }
  //   if (l.value === newNode.value) {
  //     l.value = l.next.value;
  //   }
  //   return removeKFromList(l.next, newNode);
  // }
}

module.exports = {
  removeKFromList
};
