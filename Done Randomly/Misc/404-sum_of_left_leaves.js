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
var sumOfLeftLeaves = function(root) {
    if( root == null ) {
        return 0;
    }
    
    let queue = [{'node': root, 'left': false }];
    let leftLeafSum = 0;

    while( queue.length != 0 ) {
        let cur = queue.pop();
        let curNode = cur['node'];
        if( curNode.left == null && curNode.right == null ) {
            if( cur['left'] ) {
                leftLeafSum += curNode.val;
            }
        } else {
            if( curNode.left != null ) {
                queue.push({'node': curNode.left, 'left': true });
            }

            if( curNode.right != null ) {
                queue.push({'node': curNode.right, 'left': false });
            }
        }
    }

    return leftLeafSum;
};