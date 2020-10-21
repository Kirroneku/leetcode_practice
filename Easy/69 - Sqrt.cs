public class Solution {
    public int MySqrt(int x) {
        int l = 0, r = x;
        while( l < r ) {
            int m = (l+r+1)/2;
            if( m > x/m ) {
                r = m - 1;
            } else {
                l = m;
            }
        }
        
        return r;
    }
}