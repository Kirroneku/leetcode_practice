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
    let baseHead = head;

    let onEven = false;
    
    let odds = new ListNode(0);
    let evens = new ListNode(0);
    let evensBase = evens;
    let oddsBase = odds;
    
    while( head != null ) {
        if( !onEven ) {
            odds.next = new ListNode(head.val);
            odds = odds.next;
        } else {
            evens.next = new ListNode(head.val);
            evens = evens.next;
        }

        onEven = !onEven;

        head = head.next;
    }

    evens = oddsBase;
    console.log(evensBase, oddsBase)
    return evensBase.next;
};