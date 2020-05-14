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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let nodesToCheck = [root];
    let nextLevel = [];
    let foundCousin = false;
    let parentMap = new Map();
    
    while( nodesToCheck.length != 0 ) {
        let curNode = nodesToCheck.pop();

        if( curNode.val == x || curNode.val == y ) {
            if( foundCousin ) {
                if( parentMap.get(x) == parentMap.get(y) ) {
                    return false;
                }

                return true;
            }
            foundCousin = true;
        }

        if( curNode.left != null ) {
            parentMap.set( curNode.left.val, curNode.val );
            nextLevel.push(curNode.left);
        }

        if( curNode.right != null ) {
            nextLevel.push(curNode.right);
            parentMap.set( curNode.right.val, curNode.val );  
        }

        if( nodesToCheck.length == 0 ) {
            if( foundCousin ) {
                return false;
            }

            nodesToCheck = nextLevel;
            nextLevel = [];
        }
    }

};