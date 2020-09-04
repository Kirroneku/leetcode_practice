class Solution:
    def partitionLabels(self, S: str) -> List[int]:
        
        partition = []
        letterIndex = 0
        
        lastSeen = {}
        
        for i, char in enumerate(S):
            lastSeen[char] = i
        print(lastSeen)
        
        while( letterIndex < len(S) ):
            findLetter = S[letterIndex]            
            lettersInParition = set()
            lastTermination = lastSeen[findLetter]
            termination = -1
            parition = 0
            
            while( termination != lastTermination):
                termination = lastTermination
                
                for i in range(letterIndex, termination+1):
                    lastTermination = max(lastTermination, lastSeen[S[i]])
                    parition += 1
                    
                letterIndex = termination+1

            partition.append(parition)
            letterIndex = lastTermination+1
        
        return partition
            