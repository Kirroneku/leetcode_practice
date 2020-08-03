# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if( head == None ):
            return head
        
        while( head and head.val == val ):
            head = head.next
            
        gogoNode = head
        
        while gogoNode:
            # print(gogoNode.val)
            prev = gogoNode
            while( gogoNode.next and gogoNode.next.val == val ):
                gogoNode = gogoNode.next
            
            prev.next = gogoNode.next
            gogoNode = gogoNode.next
            
            
        return head