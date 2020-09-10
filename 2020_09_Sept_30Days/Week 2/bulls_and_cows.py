class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        rest = {}
        guessRest = {}
        bulls = 0
        cows = 0
        for i, x in enumerate(secret): 
            if x == guess[i]:
                bulls += 1
            else:
                if( rest.get(x) ):
                    rest[x] += 1
                else:
                    rest[x] = 1
                if( guessRest.get(guess[i]) ):
                    guessRest[guess[i]] += 1
                else:
                    guessRest[guess[i]] = 1
        
        for gue in guessRest:
            if( rest.get(gue) and guessRest.get(gue) ):
                cows += min(rest[gue], guessRest[gue])
        
        return str(bulls) + "A" + str(cows) + "B"