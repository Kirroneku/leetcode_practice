/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var max = -1 * Number.MAX_VALUE;

var maxPathSum = function(root) {
    if( root == null ) {
        return 0;
    }

    let left = maxPathSum(root.left);
    let right = maxPathSum(root.right);
    let lr = Math.max(left, right);
    if( left == 0 && right == 0 ) {
        lr = -1 * Number.MAX_VALUE;
    } else if( left == 0 ) {
        lr = right;
    } else if ( right == 0 ) {
        lr = left;
    }
    let curMax = Math.max(root.val, Math.max(root.val+left+right, Math.max(root.val + left, Math.max(root.val + right, lr))));
    max = Math.max(max, curMax)
    // console.log(maxCombo);
    return curMax;
};

