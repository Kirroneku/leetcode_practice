class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        splitStr = str.split()
        if( len(splitStr) != len(pattern) ):
            return False
        
        dictionary = {}
        usedWords = set()
        for i, char in enumerate(pattern):
            if( dictionary.get(char) or splitStr[i] in usedWords):
                if( dictionary.get(char) != splitStr[i] ):
                    return False
            else:
                dictionary[char] = splitStr[i]
                usedWords.add(splitStr[i])
                
        return True