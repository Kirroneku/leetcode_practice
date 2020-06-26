# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def sumNumbers(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if( root == None ):
            return 0
        
        queue = [(root, 0)]
        nextLevel = []

        total = 0
        
        while len(queue) != 0:
            current = queue.pop()
            curNode = current[0];
            curNum = current[1];
            
            if( curNode.left == None and curNode.right == None ):
                total += curNum*10 + curNode.val
            else:
                curNum = curNum*10 + curNode.val
                
                if( curNode.left != None ):
                    queue.append((curNode.left, curNum))
                    
                if( curNode.right != None):
                    queue.append((curNode.right, curNum))
                    
        return total