// https://leetcode.com/problems/consecutive-characters/

class Solution {
    public int maxPower(String s) {
        if ( s.length() < 1 ) {
            return 0;
        }
        
        int maxPow = 1;
        int curPow = 1;
        
        for( int i = 1; i < s.length(); i++ ) {
            if( s.charAt(i-1) == s.charAt(i) ) {
                curPow ++;
            } else {
                maxPow = Math.max(maxPow, curPow);
                curPow = 1;
            }
        }
        
        return Math.max(maxPow, curPow);
    }
}