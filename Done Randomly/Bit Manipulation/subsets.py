# https://leetcode.com/problems/subsets/

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:       
        if( len(nums) == 1 ):
            return [[], [nums[0]]]
        
        ans = [[]]           
        
        for i in range(1, 2**len(nums)):
            curBin = i
            newSubset = []
            j = 0

            while curBin:
                newSubset.append(nums[j]) if curBin & 1 else None
                curBin >>= 1
               
                j += 1

            ans.append(newSubset)
            
        return ans