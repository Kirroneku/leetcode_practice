class Solution(object):
    def numSquares(self, n):
        """
        :type n: int
        :rtype: int
        """
        pSquares = []
        i = 1
        while i * i <= n:
            pSquares.append( i * i )
            i += 1

        ans = 0
        checkFit = {n} # set is fast
        
        while checkFit:
            ans += 1
            temp = set()
            
            for x in checkFit:
                for y in pSquares:
                    if x == y:
                        return ans
                    if x < y:
                        break
                    temp.add(x-y)
                    
            checkFit = temp

        return ans