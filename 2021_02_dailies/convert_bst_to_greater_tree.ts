/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function convertBST(root: TreeNode | null): TreeNode | null {
    var pre = 0;
    if( root == null ) {
        return root;
    }
    
    let bstTraverse = (root) => {
        if( root.right != null ) {
            bstTraverse(root.right);
        }
        root.val = pre + root.val;
        pre = root.val;
        if( root.left != null ) {
            bstTraverse(root.left);
        }
        
        return root;
    };

    
    return bstTraverse(root);
};