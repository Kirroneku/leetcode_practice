class Solution {
public:
    int lengthOfLastWord(string s) {
        string delim = " ";
        string last = "";
        
        while ( s.length() != 0 ) {
            int findDelim = s.find(delim);
            string cur = s.substr(0, findDelim+1);
            s = s.substr(findDelim+1);
            if( cur != " " ) {
                last = cur;
            }
            
            if( findDelim == -1 ){
                cur = s;
                if( cur != " " ) {
                    last = cur;
                }
                break;
            }
        }
        
        cout << last;
        
        int ans = last.length();
        for( int i = 0; i < last.length(); i ++) {
            if( last.at(i) == ' ') {
                ans --;
            }
        }
        
        return ans;
        
       
    }
};