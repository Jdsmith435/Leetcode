//508 Most Frequent Subtree Sum
/**
*	Dfs. Keep track of max and a map of sums and their occurences.
*/

function findFrequentTreeSum(root: TreeNode | null): number[] {
    const map = new Map();
    let max = 0;
    function dfs(node): number {
        if(!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        const sum = left + right + node.val;
        map.set(sum, (map.get(sum) || 0) + 1);
        max = Math.max(map.get(sum), max);
        return sum;
    }
    
    dfs(root);

    const results = [];
    for(const [k, v] of map) {
        if(v === max) results.push(k);
    }
    return results;
};
