var maxProfit = function(prices) {
    if(prices.length == 0) return 0;
    
    var maxProfit = 0;
    var minNum = prices[0];
    
    for(var i = 1; i < prices.length;i++) {
        if(prices[i] < minNum) {
            minNum = prices[i];
        }
        
        maxProfit = Math.max(maxProfit, prices[i] - minNum);
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));