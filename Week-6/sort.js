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