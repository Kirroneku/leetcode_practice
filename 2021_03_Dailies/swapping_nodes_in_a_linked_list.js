/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let endKCount = k;
    let startKCount = 0;
    
    let traverse = head;
    let startK = null;
    let lastK = head;
    
    while( traverse != null ) {
        endKCount--;
        startKCount++;
        if( endKCount < 0 ) {
            lastK = lastK.next;   
        }
        
        if( startKCount == k ) {
            startK = traverse;
        }
        
        traverse = traverse.next;
    }
    
    let temp = lastK.val;
    lastK.val = startK.val;
    startK.val = temp;
    
    return head;
};