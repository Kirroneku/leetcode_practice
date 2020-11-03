public class insertion_sort_list {
    public ListNode insertionSortList(ListNode head) {
        if( head == null ) {
            return head;
        }
        
        ListNode sorted = new ListNode();
        
        while( head != null ) {
            ListNode sortIter = sorted;
            while(sortIter.next != null && 
                  head.val > sortIter.next.val ) 
            {
                sortIter = sortIter.next;
            }
            
            ListNode temp = sortIter.next;
            sortIter.next = new ListNode(head.val, temp);
            
            head = head.next;
        }
        
        return sorted.next;
    }
}
