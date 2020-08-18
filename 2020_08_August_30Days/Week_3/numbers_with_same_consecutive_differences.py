class Solution:
    def numsSameConsecDiff(self, N: int, K: int) -> List[int]:
        possible = []
        if( N == 1 ):
            possible.append(0)
            
        for i in range(1, 10):
            self.getAllVariations(i, str(i), N, K, possible)
            
        return possible
    
    def getAllVariations(self, lastNum, s, N, K, possible):
        if( len(s) == N ):
            possible.append(s)
            return
        
        bigger = lastNum + K
        if( bigger <= 9 ):
            self.getAllVariations(bigger, s + str(bigger), N, K, possible)
        
        smaller = lastNum - K
        if( smaller >= 0 and K != 0 ):
            self.getAllVariations(smaller, s + str(smaller), N, K, possible)
        