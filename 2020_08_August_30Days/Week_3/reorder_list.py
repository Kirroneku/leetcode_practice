# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: ListNode) -> None:
        if( not head ):
            return head
        """
        Do not return anything, modify head in-place instead.
        """
        root = head
        head = head.next
        
        reorder = []
        
        while head != None:
            reorder.append(head)
            head = head.next
            
        lengthRe = len(reorder)-1
        
        last = root
        for i in range(0, math.ceil((lengthRe+1)/2)):
            last.next = reorder[lengthRe - i]
            last = last.next
            
            last.next = reorder[i]
            last = last.next
        
        last.next = None
        return root
            