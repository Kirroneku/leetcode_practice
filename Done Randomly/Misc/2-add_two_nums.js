/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryOver = 0;
    let ansBase = new ListNode();
    var ans = ansBase;

    while( l1 != null && l2 != null ) {
        let sum = l1.val + l2.val + carryOver;
        carryOver = 0;

        ans.next = new ListNode(sum%10);
        ans = ans.next;

        l1 = l1.next;
        l2 = l2.next;

        if( sum >= 10 ) {
            carryOver = 1;
        }
    }
    
    var sumTilEnd = function( node, carryOver ) {
        
        while( node != null ) {
            
            let sum = node.val + carryOver;
            carryOver = 0;
    
            ans.next = new ListNode(sum%10);
            ans = ans.next;
            console.log(sum)
    
            node = node.next;
    
            if( sum >= 10 ) {
                carryOver = 1;
            }
            
        }
        return carryOver;
    }

    // console.log(l1)
    carryOver = sumTilEnd(l1, carryOver);
    // console.log(l1)
    carryOver = sumTilEnd(l2, carryOver);
    // console.log(l2)
    if( carryOver == 1 ) {
        ans.next = new ListNode(1);
    }

    return ansBase.next;
};