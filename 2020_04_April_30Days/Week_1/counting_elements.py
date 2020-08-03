class Solution:
    def countElements(self, arr: List[int]) -> int:
        numberCount = {}
        for number in arr:
            if( not number in numberCount ):
                numberCount[number] = 0
            numberCount[number] += 1
            
        count = 0
        for key in numberCount:
            if( key+1 in numberCount):
                count += numberCount[key]
        
        return count