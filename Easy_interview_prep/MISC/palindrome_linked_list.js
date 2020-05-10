/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if( head == null || head.next == null ) {
        return true;
    }
    
    let fast = head;
    let slow = head;

    while( fast.next != null ) {
        fast = fast.next;
        slow = slow.next;
        if(  fast.next != null ) {
            fast = fast.next;
        }
    }
    
    let prev = new ListNode(slow.val);

    while( slow.next != null ) {
        slow = slow.next;
        let newPrev = new ListNode(slow.val);
        newPrev.next = prev;
        prev = newPrev;
    }

    while( prev != null ) {
        if( prev.val != head.val ) {
            return false;
        }
        prev = prev.next;
        head = head.next;
    }

    return true;
};