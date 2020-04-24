/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder.shift());

    for( let node of preorder ) {
        root = addToBst(root, new TreeNode(node));
    }

    return root;
};

var addToBst = function(root, node) {
    let transverse = root;
    while( true ) {
        if( node.val < transverse.val ) {
            if( transverse.left == null ) {
                transverse.left = node;
                break;
            }
            transverse = transverse.left;
        } else {
            if( transverse.right == null ) {
                transverse.right = node;
                break;
            }
            transverse = transverse.right;
        }
    }

    return root;
}