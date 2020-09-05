# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:
        def getNodesFromTree(array, root):
            if( root == None ):
                return
            array.append(root.val)
            if( root.left != None ):
                getNodesFromTree(array, root.left)
            if( root.right != None):
                getNodesFromTree(array, root.right)
        
        sortArray = []
        getNodesFromTree(sortArray, root1)
        getNodesFromTree(sortArray, root2)
        
        sortArray.sort()
        
        return sortArray