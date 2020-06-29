# using bitwise and and shifting to think more 
# bit-wise rather than normally
class Solution:
    def hammingWeight(self, n: int) -> int:
        setBits = 0
        
        while n:
            setBits += n & 1
            n >>= 1
        
        return setBits