class Solution:
    def addDigits(self, num: int) -> int:
        ans = 0
        # print(num)
        while num >= 10:
            ans = 0
            
            while( num > 0 ):
                ans += num % 10
                num = math.floor(num / 10)
            # print(ans)
                
            num = ans
            
        return num