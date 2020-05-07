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
    let queue = [{'root': root, 'prev': 0}];
    let next = [];
    let mustBeOnLevel = false;
    let mustBeOnPrev = 0;
    while( queue.length != 0 ) {
        let currentRoot = queue.pop();

        if( currentRoot['root'].left != null ) {
            next.push({'root': currentRoot['root'].left,  'prev': currentRoot['root'].val});
        } 

        if( currentRoot['root'].right != null ) {
            next.push({'root': currentRoot['root'].right,  'prev': currentRoot['root'].val});
        }

        if( currentRoot['root'].val == x || currentRoot['root'].val == y ) {
            if ( mustBeOnLevel ) {
                if( currentRoot['prev'] != mustBeOnPrev ) {
                    return false;
                }
                return true;
            }
            mustBeOnPrev = cur;
            mustBeOnLevel = true;
        }

        if( queue.length == 0 ) {
            if( mustBeOnLevel ) {
                return false;
            }
            queue = next;
            next = [];
        }

        cur++;
    }

    return false;
};