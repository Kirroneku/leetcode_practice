class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        myDict = set([])
        thisset = set([])
        
        for num in nums:
            if( not num in myDict ):
                myDict.add(num)
                thisset.add(num)
            else:
                thisset.discard(num)
                
        for i in thisset:
            return i