/*
Problem 6.6 : 3 sumGiven an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.
Return the sum of the three integers.Assume that there will only beone solutionExample: given array S = {-1 2 1 -4}, and target = 1. 
The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)Assignment Introduction:●Calculate the time and space complexity for the set
 of questions●A set of  Problem statement based on array that would help student how toiterate and process an arrayBenchmarks●All 
 the problem should have an optimize solutions●All the problem statement should have the time and space complexity mention inthe code 
 comment●The code should be readable and must follow good coding practice.●Keep the code as modular as you can.

 */


var threeSumClosest = function (nums, target) {
  let ans = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < target) left++;
      else right--;
      if (Math.abs(sum - target) < Math.abs(ans - target)) ans = sum;
    }
  }
  return ans;
};


console.log(threeSumClosest([-1,2,1,4],1));

//time complexity- O(nlogn);
//space complexity=O(1)