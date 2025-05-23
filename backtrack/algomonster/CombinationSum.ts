// compare to leetcode 39. 

/**
* The idea here is that sorting helps remove duplicates. Additionally,
* in the for loop, starting from the next index helps avoid repeating items. 
*/
function combinationSum(candidates: number[], target: number): number[][] {
    const result = [];
    const path = [];
    function dfs(rem, start) {
        if(rem === 0) {
            result.push([...path]);
            return;
        }
        for(let i = start; i < candidates.length; i++) {
            const n = candidates[i];
            if(rem - n < 0) continue;
            path.push(n);
            dfs(rem - n, i);
            path.pop();
        }
    }
    candidates.sort((a,b) => a - b);
    dfs(target,0);
    return result;
};
