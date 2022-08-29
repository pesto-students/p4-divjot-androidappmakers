 /*Problem 6.3 Sort array of 0's,1's and 2'sGiven an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder.
  Example 1:Input:N = 5arr[]= {0 2 1 2 0}Output:0 0 1 2 2Explanation: 0's 1's and 2's are segregated into ascending order.
  Example 2:Input:N = 3arr[] = {0 1 0}Output:0 0 1Explanation: 0s 1s and 2s are segregated into ascending order. 
  Time Complexity: O(N)Expected Auxiliary Space: O(1)Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2
 
 
 */
 var sortColors = function(nums) {
    if(nums.length==0||nums.length==1)return;
    
    var start =0;
    var end=nums.length-1;
    var index=0;
    
    while(index<=end && start <end){
        if(nums[index]==0){
            nums[index]=nums[start];
            nums[start]=0;
            index++;
            start++;
        }
        else if(nums[index]==2){
            nums[index]=nums[end];
            nums[end]=2;
            end--;
        }
        else{
            index++;
        }
    }
    console.log(nums);
};

sortColors([0,2,1,2,0]);

//time complexity- O(n);
//space complexity=O(1)