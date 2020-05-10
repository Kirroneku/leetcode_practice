/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if ( head == null || head.next == null) {
        return head;
    }
    
    let newList = null;
    let newHead = null;

    let prev = head.val;
    head = head.next;
    let count = 1;
    while( head != null ) {
        if( prev != head.val ) {
            if( count == 1 ) {
                if( newList == null ) {
                    newList = new ListNode(prev);
                    newHead = newList;
                } else {
                    newList.next = new ListNode(prev);
                    newList = newList.next;
                }
            }
            prev = head.val;
            count = 0;
        }
        count ++;
        head = head.next;
    }
    // console.log(count, prev)
    if( newList == null && count == 1) {
        newList = new ListNode(prev);
        newHead = newList;
    } else if( count == 1 ){
        newList.next = new ListNode(prev);
    }

    return newHead;
};

    // let map = new Map();
    // let slow = head;
    // while( slow != null ) {
    //     if( map.has(slow.val) ) {
    //         map.set(slow.val, map.get(slow.val) + 1);
    //     } else {
    //         map.set(slow.val, 1);
    //     }

    //     slow = slow.next;
    // }

    // let newList = null;
    // let newHead = null;

    // while( head != null ) {
    //     if( map.get(head.val) == 1) {
    //         if( newList == null ) {
    //             newList = new ListNode(head.val);
    //             newHead = newList;
    //         } else {
    //             newList.next = new ListNode(head.val);
    //             newList = newList.next;
    //         }
    //     }
    //     head = head.next;
    // }