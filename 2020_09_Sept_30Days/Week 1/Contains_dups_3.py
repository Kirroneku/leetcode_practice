class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        if t == 0 and len(set(nums)) == len(nums):
            return False
        
        termination = len(nums)
        
        for i, num in enumerate(nums):
            for j in range(i+1, min(i+k+1, termination)):
                if( abs(num - nums[j]) <= t ):
                    return True
        return False
