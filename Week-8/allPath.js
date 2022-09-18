/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    const n=graph.length-1;
    const result=[];
    const path=[];
    dfs(0);
    return result;
    
    function dfs(pos){
        path.push(pos);
        
        if(pos==n){
            result.push([...path]);
        }
        const nextNode=graph[pos];
        for(let i=0;i<nextNode.length;i++){
            dfs(nextNode[i]);
        }
        path.pop();
    }
};
