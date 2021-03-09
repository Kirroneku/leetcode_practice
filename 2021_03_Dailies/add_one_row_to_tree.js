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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if( d == 1 ) {
        return new TreeNode(v, root, null);
    }
    let depth = 1;
    let currentLevel = [root];
    let nextLevel = [];
    while( depth != d ) {
        for( let node of currentLevel ) {
            
            if( depth + 1 == d ) {
                let left = node.left;
                let right = node.right;
                
                node.left = new TreeNode(v, left, null);
                node.right = new TreeNode(v, null, right);
            } else {
                if( node.left != null ) {
                    nextLevel.push(node.left);
                } 
                
                if( node.right != null) {
                    nextLevel.push(node.right);
                }
            }
        }
        
        depth++;
        
        currentLevel = nextLevel;
        nextLevel = [];
    }
    
    return root;
};