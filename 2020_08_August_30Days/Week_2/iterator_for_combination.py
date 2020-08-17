class CombinationIterator:
    # maxLen = 0
    
    def __init__(self, characters: str, combinationLength: int):
        self.charLen = len(characters)-1
        self.currentNumber = 2**len(characters)-1
        self.characters = characters
        self.prevString = self.setBits(self.currentNumber)
        self.combinationLength = combinationLength
        
        
        while( len(self.prevString) != self.combinationLength ):
            # print(self.prevString)
            self.currentNumber -= 1
            self.prevString = self.setBits(self.currentNumber)
            if( self.prevString == None ):
                break
    
    def setBits(self, num):
        if( num < 0):
            return None
        
        count = self.charLen
        comboString = ""
        
        while(num != 0):
            
            # print(num&1, count, num, self.characters[count], comboString)
            if( num&1 == 1):
                comboString += self.characters[count]
                
            count -= 1
            num >>= 1
            
        # print("CHECK: ", comboString)
        return comboString[::-1]

    def next(self) -> str:
        if( self.prevString == None ):
            return
        
        temp = self.prevString
        self.prevString = self.setBits(self.currentNumber-1)
        self.currentNumber-=1
        
        while( len(self.prevString) != self.combinationLength ):
            self.currentNumber -= 1
            self.prevString = self.setBits(self.currentNumber)
            if( self.prevString == None ):
                break
                
        return temp

    def hasNext(self) -> bool:
        if( self.prevString == None ):
            return False
        
        return True


# Your CombinationIterator object will be instantiated and called as such:
# obj = CombinationIterator(characters, combinationLength)
# param_1 = obj.next()
# param_2 = obj.hasNext()