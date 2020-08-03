# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return root
        
        queue = [root]
        ans = [[root.val]]
        
        while queue:
            
            nextLevel = []
            
            for i, node in enumerate(queue):
                if( node.left ):
                    nextLevel.append(node.left)

                if( node.right ):
                    nextLevel.append(node.right)
                
                
            if nextLevel:
                ans.append([node.val for node in nextLevel])
            
            queue = nextLevel
                
        return ans[::-1]
            