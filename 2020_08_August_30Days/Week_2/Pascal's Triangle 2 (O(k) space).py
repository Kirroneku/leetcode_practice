class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        row = [1]
        rowLen = 1
        
        while( rowIndex != 0 ):
            rowIndex -= 1
            curIndex = rowLen-1
           
            while( curIndex > 0 ):
                row[curIndex] = row[curIndex] + row[curIndex-1]
                curIndex-= 1
            row.append(1)
            rowLen+=1
            
        return row