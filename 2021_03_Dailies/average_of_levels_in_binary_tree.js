/**
 * https://i.imgur.com/EBO1EVb.png
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let curLevel = [root];
    let nextLevel = [];
    let averages = [];
    
    while( curLevel.length != 0 ) {
        let sum = 0;
        
        for( let node of curLevel ) {
            sum += node.val;
            if( node.left != null ) {
                nextLevel.push(node.left);
            }
            
            if( node.right != null ) {
                nextLevel.push(node.right);
            }
        }
        
        averages.push(sum/curLevel.length)
        
        curLevel = nextLevel;
        nextLevel = [];
    }
    
    return averages;
};