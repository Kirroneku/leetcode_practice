# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        t1 = [p]
        t2 = [q]
        
        while t1:
            root1 = t1.pop()
            root2 = t2.pop()
            if( root1 != None and root2 != None ):
                if( root1.val != root2.val ):
                    return False
            else: 
                if( root1 != root2 ):
                    return False
                
                continue
                
            t1.extend([root1.left, root1.right])
            t2.extend([root2.left, root2.right])
            
        return True