class Solution:
    
    def toGoatLatin(self, S: str) -> str:
        vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

        sentenceArray = S.split()
        pigSentence = []
        curIndex = 1
        
        for word in sentenceArray:
            curWord = word
            
            if( word[0] in vowel ):
                curWord += "ma"
            else:
                curWord = curWord[1:]
                curWord += word[0] + "ma"
            
            for i in range(0, curIndex):
                curWord += "a"
            
            pigSentence.append(curWord)
            curIndex += 1
            
        return ' '.join(pigSentence)