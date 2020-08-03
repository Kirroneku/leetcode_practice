/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if( amount == 0 ) {
        return 1;
    }
    
    var dp = [];
    
    for( let i = 0; i < coins.length; i++ ) {
        let tempArr = [];
        for( let j = 0; j < amount+1; j++ ) {
            tempArr.push(-1);
        }
        dp.push(tempArr);
    }
    
    coins = coins.sort((a,b) => a - b);
    
    var changeHelper = function( amount, coins, curCoin, first) {
        // console.log(amount, curCoin)
        let curCalc = amount - coins[curCoin];
        
        if( amount == 0 ) {
            // console.log("yea");
            return 1;
        }
        
        if( curCoin >= coins.length || amount < 0) {
            return 0;
        }      
        
        if( dp[curCoin][amount] != -1 ) {
            return dp[curCoin][amount];
        }

        return dp[curCoin][amount] = changeHelper(curCalc, coins, curCoin) + 
               changeHelper(amount, coins, curCoin+1)
        
    }
    let total = 0;
    
    // for( let i = 0; i < coins.length; i++ ) {
    //     // console.log(i)
    total += changeHelper(amount, coins, 0);
    // }
    
    return total;
};