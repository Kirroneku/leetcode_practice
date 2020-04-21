/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if( root == null ) {
        return 0;
    }

    let ans = 0;
    
    var heightOfTree = function( root ) {
        if (root == null) {
            return 0
        }

        let left = heightOfTree(root.left)
        let right = heightOfTree(root.right)
        
        ans = Math.max(ans, left + right);

        return 1 + Math.max(left, right);
    }

    heightOfTree(root);

    return ans;
};
