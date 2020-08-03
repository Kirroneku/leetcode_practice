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
var oddEvenList = function(head) {
    if( head == null ) {
        return head;
    }
       
    let odds = head;
    let evens = head.next;
    
    let evensBase = evens;
    let oddsBase = odds;
    
    while( evens != null && evens.next != null ) {
        odds.next = odds.next.next;
        odds = odds.next;
        evens.next = evens.next.next;
        evens = evens.next;
    }

    odds.next = evensBase;
    // console.log(evensBase, oddsBase)
    return oddsBase;
};