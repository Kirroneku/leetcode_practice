# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if( not root ):
            return []
        
        forward = False
        
        queue = [root]
        nextLevel = []
        currentLen = 0
        
        cur = None
        ans = [[root.val]]
        
        while( queue ):
            if( forward ):
                cur = queue.pop()
                if( cur.left):
                    nextLevel.append(cur.left)
                if( cur.right):
                    nextLevel.append(cur.right)
            else:
                cur = queue.pop(currentLen)
                currentLen -= 1
                if( cur.right):
                    nextLevel.append(cur.right)
                if( cur.left ):
                    nextLevel.append(cur.left)
            
            if( not queue ):
                if( not nextLevel ):
                    break
                    
                newArray = []
                for node in nextLevel:
                    newArray.append(node.val)
                ans.append(newArray)
                queue = nextLevel
                currentLen = len(queue)-1
                forward = not forward
                nextLevel = []
                
        return ans
                
            
            
            