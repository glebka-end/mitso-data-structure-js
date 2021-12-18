const { NotImplementedError } = require('../extensions/index.js');
const {ListNode} = require("../extensions");

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
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let current = l;
  let root = new ListNode(null);
  let tempRoot = root;
  while (current.next) {
    if (current.value !== k) {
      if (root.value === null) {
        tempRoot.value = current.value;
      } else {
        tempRoot.next = new ListNode(current.value);
        tempRoot = tempRoot.next;
      }
    }
    current = current.next;
  }
  if (current.value !== k ) {
    if (root.value === null) {
      tempRoot.value = current.value;
    } else {
      tempRoot.next = new ListNode(current.value);
    }
  }
  return root;
}