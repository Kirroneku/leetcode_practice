# This soln is much better since, we dont actually care about other patterns except if the first one
# of the length is repeated...

# Thus saving so much more compute time

class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        stringLen = len(s)
        if stringLen == 1:
            return False
        
        for i in range(1, math.ceil((stringLen+1)/2)):
            if( stringLen%i == 0 ):
                endIndex = i
                cur = s[:endIndex]
                while( endIndex < stringLen ):
                    if( s[endIndex:endIndex+i] != cur ):
                        break
                    else:
                        endIndex += i
                    
                if( endIndex == stringLen ):
                    return True
            
        return False