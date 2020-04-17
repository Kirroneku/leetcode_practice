class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        allGrams = []
        
        orderedString = {}
        for string in strs:
            curLen = len(string)
            if not curLen in orderedString:
                orderedString[curLen] = []
            orderedString[curLen].append(string)
        
        for curSet in orderedString:
            grams = []
            anagrams = {}
            anagramLength = 0
            while(len(orderedString[curSet]) != 0):
                for char in orderedString[curSet][0]:
                    if( not char in anagrams ):
                        anagrams[char] = 0
                    anagrams[char] += 1
                    anagramLength += 1

                for string in orderedString[curSet]:
                    anaCount = {}
                    if( len(string) != anagramLength ) :
                        continue

                    for char in string:
                        if( not char in anaCount ):
                            anaCount[char] = 0
                        anaCount[char] += 1

                    isAnagram = True
                    for char in anaCount:
                        if( not char in anagrams or anaCount[char] != anagrams[char] ):
                            isAnagram = False
                            break

                    if(isAnagram):
                        grams.append(string)
            
            for string in grams:
                orderedString[curSet].remove(string)

            allGrams.append(grams)
            
        return allGrams