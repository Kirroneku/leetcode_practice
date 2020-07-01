import math

class Solution:
    def arrangeCoins(self, n: int) -> int:
        #         iterative
        #         currentStairs = 0;
                
                
        #         while n >= 0:
        #             currentStairs+=1
        #             n -= currentStairs
                
                
        #         return currentStairs-1
        # Mathematical
        return math.floor((math.sqrt(8*n+1) - 1)/2)
        