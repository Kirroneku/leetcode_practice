class Solution:
    def longestPalindrome(self, s: str) -> int:
        tracker = set()
        counter = 0
        
        for char in s:
            if( char in tracker ):
                tracker.remove(char)
                counter += 2
            else:
                tracker.add(char)
        
        if len(s) > counter:
            counter += 1
        
        return counter