// function findPair(arr, n) {
//   let i = 0;
//   let j = 1;
//   let newarr = arr.sort();
//   let size = arr.length;
//   while (i < size && j < size) {
//     console.log("1");
//     if (i != j && newarr[j] - newarr[i] == Math.abs(n)) {
//       console.log("reached here");
//       return true;
//     } else if (newarr[j] - newarr[i] < n) j++;
//     else i++;
//   }

//   return false;
// }


/*
Problem 6.5: Pair With Given DifferenceGiven an one-dimensional unsorted array A containing N integers.You are also given aninteger B, 
find if there exists a pair of elements in the array whose difference is B.Return1 if any such pair exists else return 0. 
Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105Input Format First argument is an integer array A of size N. 
Second argument is aninteger B.Output Format Return 1 if any such pair exists else return 0.
Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Input 2: A = [-10, 20] B = 30Example Output Output 1: 1 
Output 2: 1Example Explanation Explanation 1: Pair (80, 2) gives a difference of 78. 
Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30


*/

var findPair = function(nums, k) {
    const map = new Map();
    for(let i of nums){
        let val = map.has(i) ? map.get(i) : 0;
        map.set(i, val+1);
    }
    for(let i of map.keys()){
        if((k == 0 && map.get(i) > 1) || (k > 0 && map.has(i+k))){
            return 1;
        }
    }
    return 0;
};



console.log(findPair([5, 10, 3, 2, 50, 80],78));

//time complexity- O(n);
//space complexity=O(n)
