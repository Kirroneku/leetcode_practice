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
    let diameter = heightOfTree(root.left) + heightOfTree(root.right);

    return Math.max(diameter, Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right)));
};

var heightOfTree = function( root ) {
    if (root == null) {
        return 0
    }

    return 1 + Math.maxheightOfTree(root.left) + heightOfTree(root.right);
}