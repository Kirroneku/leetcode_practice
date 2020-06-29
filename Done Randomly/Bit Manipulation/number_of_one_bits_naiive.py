class Solution:
    def hammingWeight(self, n: int) -> int:
        binaryRep = bin(n)[2:]
        setBits = 0
        
        for char in binaryRep:
            setBits += 1 if char == '1' else 0
        
        return setBits