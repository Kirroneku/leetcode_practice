class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        n, m = len(grid), len(grid[0])
        perim = 0
        islandQueue = set()
        islandVisited = set()
        
        foundStarter = False
        for i, row in enumerate(grid):
            for j, cell in enumerate(row):
                if( cell == 1 ):
                    islandQueue.add((i, j))
                    foundStarter = True
                    break
                    
            if( foundStarter ):
                break
            
        
        while islandQueue:
            i, j = islandQueue.pop()
            
            left = (i-1, j)
            right = (i+1, j)
            up = (i, j-1)
            down = (i, j+1)
            
            if( i-1 < 0 or (i-1 >= 0 and grid[i-1][j] == 0) ):
                perim += 1
                
            elif( left not in islandVisited ):
                islandQueue.add(left)
                
            if( j-1 < 0 or (j-1 >= 0 and grid[i][j-1] == 0) ):
                perim += 1
            elif( up not in islandVisited ):
                islandQueue.add(up)
                
            if( i+1 == n or (i+1 < n and grid[i+1][j] == 0) ):
                perim += 1
            elif( right not in islandVisited ):
                islandQueue.add(right)
                
            if( j+1 == m or (j+1 < m and grid[i][j+1] == 0) ):
                perim += 1    
            elif( down not in islandVisited ):
                islandQueue.add(down)
                
            islandVisited.add((i, j))
            # print((i, j))
                
        return perim