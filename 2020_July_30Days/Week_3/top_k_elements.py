class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        if( len(nums) == 0 ):
            return []
        
        dictt = {}
        maxCount = 1
        
        for num in nums:
            if( not dictt.get(num) ): 
                dictt[num] = 1
            else : 
                dictt[num] = dictt[num] + 1
                maxCount = max(maxCount, dictt[num])
                
        
        # print( dictt )
        
        counter = {}
        
        for key in dictt:
            val = dictt[key]
            # print(val)
            if( counter.get(val) == None ):
                counter[val] = [key]
            else:
                counter[val].append(key)
                
        # print( counter )
        ans = []
        
        for i in range(maxCount, -1, -1):
            # print(maxCount, len(ans), k)
            if len(ans) >= k:
                break
                
            ans.extend(counter.get(i, []))
            
        return ans
            
            