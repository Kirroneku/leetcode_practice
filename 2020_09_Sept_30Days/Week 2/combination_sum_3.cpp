class Solution {
private:
    vector<vector<int>> ans;
    
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        vector<int> tempVector;
        helper(k, n, tempVector);
        
        return this->ans;        
    }
    
    bool inVector( vector<int> prev, int checker ) {
        for ( int i = 0; i < prev.size(); i++ ) {
            if( prev.at(i) == checker ) {
                return true;
            }   
        }
        
        return false;
    }
    
    void helper(int k, int n, vector<int> prev) {
        // for( int i = 0; i < prev.size(); i++ ){
        //     cout << prev.at(i) << " ";
        // }
        // cout << '\n';
        if ( k <= 0 || n <= 0 ) {
            if ( k == 0 && n == 0 ) {
                // vector<int> temp = prev;
                this->ans.push_back(prev);
            } 
            return;
        } 
        int start = 1;
        if( prev.size() != 0 ) {
            start = prev.at(prev.size()-1);
        }
        for( ; start < 10; ++start ) {
            if ( !inVector(prev, start) ) {
                prev.push_back(start);
                helper( k - 1, n - start, prev);
                prev.pop_back();
            }

        }
    }
};