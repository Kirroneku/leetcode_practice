class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        int i = 0;
        vector<vector<int>>ans;
        for ( ; i < intervals.size(); ++i ) {
            if( newInterval[0] <= intervals[i][1] ) {
                break;
            }
            ans.push_back(intervals[i]);
        }
        
        for( ; i < intervals.size(); ++i ) {
            if( intervals[i][0] <= newInterval[1] ) {
                newInterval = {min(intervals[i][0], newInterval[0]),
                               max(intervals[i][1], newInterval[1])};
            } else {
                break;
            }
        }
        
        ans.push_back(newInterval);
        
        for ( ; i < intervals.size(); ++i ) {
            ans.push_back(intervals[i]);
        }
        
        return ans;
    }
    
    
};