class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        if( len(word) <= 1 ):
            return True
        
        restCapitals = False
        
        if( word[0].isupper() and word[1].isupper() ):
            restCapitals = True
        
        for i in range(1, len(word)):
            cur = word[i]
            if( cur.isupper() != restCapitals ):
                return False
            
        return True
