class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        paths = [[0 for y in range(0, n)] for x in range(0, m)]
        paths[0][0] = 1
        
        for i in range(0, m):
            for j in range(0, n):
                if( i+1 != m ):
                    paths[i+1][j] += paths[i][j]
                
                if( j+1 != n ):
                    paths[i][j+1] += paths[i][j]

        return paths[m-1][n-1]