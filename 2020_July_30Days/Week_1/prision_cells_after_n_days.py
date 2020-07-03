
class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        rotate = []
        rotateIndex = 0
        rotateMax = 0
        
        foundPattern = False
        
        totalCells = len(cells)
        
        for j in range(N):
            if( not foundPattern ):
                prev = -1
                for i, occ in enumerate(cells):
                    # print(i, occ)
                    if( i+1 != totalCells and prev == cells[i+1]):
                        cells[i] = 1
                    else:
                        cells[i] = 0

                    prev = occ
                
                # print(rotate)
                if( rotate and cells == rotate[0] ):
                    foundPattern = True
                    rotateIndex = (N - (j+1)) % len(rotate)
                    break
                    
                rotate.append(list(cells))
                
        # print(rotate, rotateIndex)
        if( foundPattern ):
            return rotate[rotateIndex]
        
        return cells