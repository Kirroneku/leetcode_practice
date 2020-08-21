class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        even = []
        odd = []
        
        for thing in A:
            if( thing % 2 == 0 ):
                even.append(thing)
            else:
                odd.append(thing)
        
        even.extend(odd)
        
        return even

# a very pythonic answer
# return [x for x in A if x%2 == 0] + [x for x in A if x%2 == 1]