class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        stringLen = len(s)
        if stringLen == 1:
            return False
        
        print(stringLen)
        for i in range(1, math.ceil(stringLen/2)+1):
            if( stringLen%i == 0 ):
                ssSet = set()
                startIndex = 0
                endIndex = i
                canRepeat = True
                while( endIndex != stringLen+1 ):
                    cur = s[startIndex:endIndex]
                    if( not cur in ssSet ):
                        ssSet.add(cur)
                    if( len(ssSet) == i+1 ):
                        canRepeat = False
                        break
                    startIndex += 1
                    endIndex += 1
                if( canRepeat ):
                    for ss in ssSet:
                        if ss * int(stringLen/i) == s:
                            return True
            
        return False