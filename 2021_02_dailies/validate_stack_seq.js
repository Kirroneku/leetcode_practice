/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let index = 0;

    for( let i = 0; i < pushed.length; i++ ) {
        stack.push(pushed[i]);
        let len = stack.length-1;
        while( stack[len] == popped[index] && len >= 0 && index < popped.length  ) {
            stack.pop();
            len = stack.length-1;
            index ++;
        }
    }
    
    return stack.length == 0;
};