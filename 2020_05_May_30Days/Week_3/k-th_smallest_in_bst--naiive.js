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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let queue = [root];
    let sorted = [];

    while( queue.length ) {
        let cur = queue.pop();

        if( cur.left != null ) {
            queue.push(cur.left);
        }

        if( cur.right != null ){
            queue.push(cur.right);
        }

        sorted.push(cur.val);
    }

    return sorted.sort((a,b) => a-b)[k-1];
};

