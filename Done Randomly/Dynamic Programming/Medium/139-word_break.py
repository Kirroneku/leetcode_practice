class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        # print("startedToRemoveFromDict")
        possibleWords = [s]
        newPossible = []
        
        onesToRemove = set()
        
        """
        # Here I tried to gimmick it since there were alot of replicated entries
        # in the word dictionary. e.g. there were variants of a, aa, aaa, aaaa, aaaa
        # alot which made duplicated entries in my initial thinking of possible words
        # However, I reached the conclusion that simply multiplying each to fit the 
        # word that we want to create till we cannot was faster /// See below
        """
        
#         for j,match in enumerate(wordDict):
#             for i,otherMatch in enumerate(wordDict[j+1:], j+1):
#                 matchLen = len(match)
#                 otherLen = len(otherMatch)
#                 matchBigger = matchLen%otherLen
#                 otherBigger = otherLen%matchLen
#                 if matchBigger == 0:
#                     if(match == otherMatch*math.floor(matchLen/otherLen)):
#                         onesToRemove.add(match)
#                 elif otherBigger == 0:
#                     if(otherMatch == match*math.floor(otherLen/matchLen)):
#                         onesToRemove.add(otherMatch)

#         wordDict = set(wordDict)   
#         for word in onesToRemove:
#             wordDict.remove(word)
        # print(wordDict)
        
        # Using an almost level-based transversal here
        while possibleWords:
            # print(possibleWords)
            # Making sure that we use all the words that we tried previously
            while possibleWords:
                word = possibleWords.pop()
                for subword in wordDict:
                    l = len(subword)

                    if( l <= len(word) and word[0:l] == subword ):
                        # I started multiplying the words here to fit
                        multi = 1
                        while( l*multi <= len(word) and word[0:l*multi] == subword*multi ):
                            multi+=1
                            
                        multi -= 1
                            
                        if( len(word[l*multi:]) == 0 ):
                            return True
                        newPossible.append(word[l*multi:])
                        # print( word[0:l*multi], subword*multi)
            
            # if we didnt find it yet, we go through
            # if we couldnt match it before - it wouldnt be here - however, I am assuming 
            # that the remaining bit is less long than the dictionary strings I am comparing it to
            # which is incorrect and could lead to an error ** FIXED, but it is slower now
            possibleWords = newPossible
            
            
        return False