class Solution:
    def isPalindrome(self, s: str) -> bool:
        strippedStr = ''.join(i for i in s if i.isalnum())
        strippedStr = strippedStr.replace(" ", "").lower()
        reverse = strippedStr[::-1]
        
        return strippedStr == reverse