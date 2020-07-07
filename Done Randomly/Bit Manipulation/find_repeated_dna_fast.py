class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        if len(s) < 10:
            return []

        tenLengthSet = set()
        ans = set()
       
            
        for i in range(len(s)-9):
            cur = s[i:i+10]
            
            if( cur in tenLengthSet ):
                ans.add(cur)
                
                
            tenLengthSet.add(cur)

        # print(ans)
        return list(ans)