/**
 * https://i.imgur.com/ipLw4BV.png
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let mapping = new Map();
    
    while( headA != null ) {
        if( mapping.has(headA.val) ) {
            mapping.get(headA.val).push(headA);
        } else {
            mapping.set(headA.val, [headA]);
        }
        
        headA = headA.next;
    }
    
    while( headB != null ) {
        if( mapping.has(headB.val) ) {
            for( let node of mapping.get(headB.val) ) {
                if( node == headB ) {
                    return node;
                }
            }
        }
        
        headB = headB.next;
    }
    
    return null;
};

var getIntersectionNode = function(headA, headB) {
    let mapping = new Map();
    
    while( headA != null ) {
        if( mapping.has(headA.val) ) {
            mapping.get(headA.val).push(headA);
        } else {
            mapping.set(headA.val, [headA]);
        }
        
        headA = headA.next;
    }
    
    while( headB != null ) {
        if( mapping.has(headB.val) ) {
            for( let node of mapping.get(headB.val) ) {
                if( node == headB ) {
                    return node;
                }
            }
        }
        
        headB = headB.next;
    }
    
    return null;
};

/*
Done using set instead
var getIntersectionNode = function(headA, headB) {
    let ANodes = new Set();
    
    while( headA != null ) {
        ANodes.add(headA);        
        headA = headA.next;
    }
    
    while( headB != null ) {
        if( ANodes.has(headB) ) {
            return headB;
        }
        
        headB = headB.next;
    }
    
    return null;
};

*/