# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumHelper(self, root: TreeNode, isLeft):
        if( root == None ):
            return 0
        
        if( root.left == None and root.right == None and isLeft):
            return root.val
        
        return self.sumHelper(root.left, True) + self.sumHelper(root.right, False)
        
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        return self.sumHelper(root, False)