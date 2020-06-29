class Solution:
    def reverseBits(self, n: int) -> int:
        binaryString = bin(n)[2:][::-1]
        
        while len(binaryString) < 32:
            binaryString += '0'
            
        return int(binaryString, 2)
        