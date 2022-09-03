/*

Problem 6.2 Spiral Order Matrix IIProblem Description Given a matrix of m * n elements (m rows, n columns), 
return allelements of the matrix in spiral order.Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  var nums=[];
  
  if(matrix==null||matrix.length==0)return nums;
  
      var top=0;
      var bottom=matrix.length-1;
      var left=0;
      var right=matrix[0].length-1;
      var size=matrix.length*matrix[0].length;
  
  
          while(nums.length < size){
          for(var i=left;i<=right && nums.length<size;i++){
              nums.push(matrix[top][i]);
          }
          top++;
          
          for(var i=top;i<=bottom && nums.length<size;i++){
              nums.push(matrix[i][right]);
          }
          right--;
          
          for(var i=right;i>=left && nums.length<size;i--){
              nums.push(matrix[bottom][i]);
          }
          bottom--;
          
          for(var i=bottom;i>=top && nums.length<size;i--){
              nums.push(matrix[i][left]);
          }
          left++;
      }
  return nums;
  
};

console.log(spiralOrder([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] ));

//time complexity- O(n*n*m);
//space complexity=O(n*m)