/*
Problem 7.1 : Reverse the Linked listGiven a linked list of N nodes. The task is to reverse this list.
Example 1:Input:LinkedList: 1->2->3->4->5->6Output: 6 5 4 3 2 1Explanation: After reversing the list,elements are 6->5->4->3->2->1.
Example 2:Input:LinkedList: 2->7->8->9->10Output: 10 9 8 7 2Explanation: After reversing the list,elements are 10->9->8->7->2.
Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 104

*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let prev=null;
  
  while(head!=null){
      let next_node=head.next;
      head.next=prev;
      prev=head;
      head=next_node;
  }
  return prev;
};

//Time Complexity=O(n)
//Space Complexity=O(1)