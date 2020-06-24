# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def countNodes(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if( root == None ):
            return 0
        
        queue = [ root ]
        total = 0
        
        while (len(queue) != 0):
            current = queue.pop()
            total += 1
            
            if( current.left != None ):
                queue.append(current.left)
                
            if( current.right != None ):
                queue.append(current.right)
                
        return total
            