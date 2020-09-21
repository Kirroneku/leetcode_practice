class Solution {   
public:
    bool isValid(string s) {
        vector<char> openBrackets;
        
        for( int i = 0; i < s.length(); i++ ) {
            char cur = s.at(i);
            if( cur == '(' ||  cur == '{' || cur == '[') {
                openBrackets.push_back(cur);
            } else {
                if( openBrackets.size() == 0 || oppositeBracket(cur) != openBrackets.back() ) {
                    return false;
                } 
                openBrackets.pop_back();
            }
        }
        
        if( openBrackets.size() != 0 ) {
            return false;
        }
        
        return true;
    }
    
    char oppositeBracket( char b ) {
        if( b == ')' ) {
            return '(';
        } else if ( b == '}' ) {
            return '{';
        } 
            
        return '[';
    }
};