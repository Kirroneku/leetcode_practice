# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumRootToLeaf(self, root: TreeNode) -> int:
        def helper(string, node):
            newString = string + str(node.val)
            
            if( node.left == None and node.right == None ):
                return int(newString, 2)
            
            left = right = 0            
            if( node.left != None ):
                left = helper(newString, node.left)
                
            if( node.right != None ):
                right = helper(newString, node.right)
            
            return left + right
        
        return helper( "", root )