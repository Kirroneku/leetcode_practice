class Solution(object):
    def findDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ###
        # Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove 
        # that at least one duplicate number must exist. Assume that there is only one duplicate number, find the 
        # duplicate one
        
        # this is true via the pigeonhole principle
        countUp = [0 for x in range(0, len(nums)+1)]
            
        for j in range(0, len(nums)):
            countUp[nums[j]] += 1
            if( countUp[nums[j]] == 2 ):
                return nums[j]

        # correct approact with O(1) space is with Floyd's Tortoise and Hare (Cycle Detection)
        # - fast pointer will enter loop first (Since we have the restriction for 
        # elements to be 1 to n inclusive we will not get an index error) once we enter the loop with
        # both we slow the fast pointer down, after a bunch of cycles