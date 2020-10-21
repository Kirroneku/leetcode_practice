/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode DeleteDuplicates(ListNode head) {
        ListNode last = null;
        ListNode curNode = head;
        
        while( curNode != null ) {
            if( last != null ) {
                if( last.val != curNode.val ) {
                    last.next = curNode;
                    last = curNode;
                } else {
                    last.next = null;
                }
            } else {
                last = curNode;
            }
            
            curNode = curNode.next;
        }
        
        return head;
    }
}