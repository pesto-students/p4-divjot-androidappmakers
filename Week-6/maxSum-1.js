//Kadane's Algo
var maxSubArray = function(nums) {
  var maxSum=nums[0];
  var currentSum=maxSum;
  for(var i=1;i<nums.length;i++){
      currentSum=Math.max(nums[i]+currentSum,nums[i]);
      maxSum=Math.max(currentSum,maxSum);
  }
  return maxSum;

};

console.log(maxSubArray([4,-1,2,1]));


//time complexity- O(n);
//space complexity=O(1)