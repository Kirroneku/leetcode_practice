# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        if not root: return 0 
        
        ans = 0
        queue = [(root, 0)]
        
        while queue: 
            # Last and first in the queue
            ans = max(ans, queue[-1][1] - queue[0][1] + 1)
            
            # We make the new level the queue
            temp = []
            for node, i in queue: 
                if node.left: # If it's null we still track the node number it's on
                    temp.append((node.left, 2*i))
                if node.right: 
                    temp.append((node.right, 2*i+1))
            queue = temp
            
            
        return ans 