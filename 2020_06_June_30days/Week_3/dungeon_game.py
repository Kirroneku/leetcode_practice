# Intuition for this one is backwards working up the dp tree
# When hp is negative we need that + 1 hp to start, 
# when it overadds hp we simply lose the deficiet hp since we are 
# going backwards. If the hp we start with is enough we dont really
# need any min hp except 1. Else we will see the min at the begining of the dp
class Solution(object):
    def calculateMinimumHP(self, dungeon):
        """
        :type dungeon: List[List[int]]
        :rtype: int
        """
        dp = [ [0 for x in dungeon[0]] for y in dungeon ]
        
        n = len(dungeon) - 1
        m = len(dungeon[0]) - 1
        # print(dp)
        # print(dungeon[n][m])
        dp[n][m] = max(1, 1 - dungeon[n][m])
        
        for i in range(len(dungeon)-1, -1, -1):
            row = dungeon[i]
            
            for j in range(len(row)-1, -1, -1):
                currentBlock = row[j]
                
                if( i + 1 <= n and j + 1 <= m ):
                    dp[i][j] = min(max(1, dp[i+1][j] - dungeon[i][j]), 
                                   max(1, dp[i][j+1] - dungeon[i][j]))
                elif( i + 1 <= n ):
                    dp[i][j] = max(1, dp[i+1][j] - dungeon[i][j])
                elif( j + 1 <= m ):
                    dp[i][j] = max(1, dp[i][j+1] - dungeon[i][j])
                
                

        # print(dp)
        return dp[0][0]
                    