/*
Problem 7.2: Rotate Linked ListGiven a singly linked list of size N. The task is to left-shift the linked list by k nodes,where k is a 
given positive integer smaller than or equal to length of the linked list.Example 1:Input:N = 5value[] = {2, 4, 7, 8, 9}k = 3
Output: 8 9 2 4 7Explanation:Rotate 1: 4 -> 7 -> 8 -> 9 -> 2Rotate 2: 7 -> 8 -> 9 -> 2 -> 4

Rotate 3: 8 -> 9 -> 2 -> 4 -> 7Example 2:Input:N = 8value[] = {1, 2, 3, 4, 5, 6, 7, 8}k = 4Output: 5 6 7 8 1 2 3 4
Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 103 1 <= k <= N


*/


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if(head==null||head.next==null||k==0)return head;
      
      let cur=head;
      let len=1;
      while(cur.next!=null){
          len++;
          cur=cur.next;
      }
      
      cur.next=head;
      k=k%len;
      k=len-k;
      while(k-- >0){
          cur=cur.next;
      }
      
      head=cur.next;
      cur.next=null;
      
      return head;
  };

  //Time Complexity=O(n)
//Space Complexity=O(n)