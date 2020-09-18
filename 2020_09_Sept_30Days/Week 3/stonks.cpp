class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minSoFar = INT_MAX;
        int profit = 0;
        
        for( int i = 0; i < prices.size(); i++ ) {
            minSoFar = min(minSoFar, prices[i]);
            profit = max(profit, prices[i] - minSoFar);
        }
        
        return profit;
        
            
    }
};