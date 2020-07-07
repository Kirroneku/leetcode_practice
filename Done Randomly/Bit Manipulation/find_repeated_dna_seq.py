class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        if len(s) < 10:
            return []
        
        buildUp = []
        tenLengthSet = set()
        ans = set()
        
        for i in range(9):
            for j, ss in enumerate(buildUp):
                buildUp[j] = ss + s[i]
                
            buildUp.append(s[i])
            
       
            
        for i in range(9, len(s)):

            for j, ss in enumerate(buildUp):
                buildUp[j] = ss + s[i]
                
            cur = buildUp.pop(0)
            
            if( cur in tenLengthSet ):
                ans.add(cur)
                
                
            tenLengthSet.add(cur)
            
            buildUp.append(s[i])
            
        # print(ans)
        return list(ans)