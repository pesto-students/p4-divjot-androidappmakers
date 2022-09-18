// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     let stack=[];
    
//             for (let i = 0; i < s.length; i++) {
//             if (s.charAt(i) == '{' || s.charAt(i) == '(' || s.charAt(i) == '[') {
//                 stack.push(s.charAt(i));
//             } else {
//                 if (stack.length==0) {
//                     return false;
//                 } else if (s.charAt(i) == '}' && stack[stack.length-1] == '{') {
//                     stack.pop();
//                 } else if (s.charAt(i) == ')' && stack[stack.length-1] == '(') {
//                     stack.pop();
//                 } else if (s.charAt(i) == ']' && stack[stack.length-1] == '[') {
//                     stack.pop();
//                 } else {
//                     return false;
//                 }
//             }
//         }
    
//             if (stack.length==0) {
//             return true;
//         } else {
//             return false;
//         }
// };



/*
Problem 7.4: Parenthesis CheckerGiven an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” 
are correct in exp.For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
Example 1:Input:{([])}Output:trueExplanation:{ ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.
Example 2:Input:()Output:trueExplanation:(). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in 
balancedway.Example 3:Input:([]Output:falseExplanation:([]. Here square bracket is balanced but the small bracket is not balanced and 
    Hence , the output will beunbalanced.Expected Time Complexity: O(|x|) Expected Auixilliary Space: O(|x|)
    Constraints: 1 ≤ |x| ≤ 32000

*/

const map = {
    "}": "{",
    "]": "[",
    ")": "("
};

function isValid(text) {
    const queue = [];

    for (let i = 0; i < text.length; i++) {
        if(text[i] === "(" || text[i] === "[" || text[i] === "{") {
            queue.push(text[i]);
            continue;
        }

        const lastElement = queue.pop();

        if(lastElement !== map[text[i]]) {
            return false;
        }
    }

    return !queue.length;
}

//Time Complexity=O(n)
//Space Complexity=O(n)

