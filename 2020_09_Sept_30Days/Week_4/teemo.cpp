class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        if( timeSeries.size() == 0 ) {
            return 0;
        }
        
        int curDuration = timeSeries.at(0) + duration;
        int ans = 0;
        for ( int i = 1; i < timeSeries.size(); i++ ) {
            int curStart = timeSeries.at(i);
            if( curDuration <= curStart ) {
                ans += duration;
            } else {
                ans += curStart - timeSeries.at(i-1);
            }
            
            curDuration = curStart + duration;
        }
        
        return ans + duration;
    }
};