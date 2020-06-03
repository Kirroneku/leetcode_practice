/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // console.log(node);
    let fast = node.next;
    let slow = node;

    while( true ) {
        slow.val = fast.val;
        fast = fast.next;
        if( fast != null ) {
            slow = slow.next;
        } else {
            slow.next = null;
            break;
        }
    }

};