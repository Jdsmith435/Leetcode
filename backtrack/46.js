// Permutations

/*
*  This was weird because we want distinct numbers in the results.
* This forced me to add like 1000 params in the signature
*/
// My impl
function permute(nums: number[]): number[][] {
    const results = [];
    const n = nums.length;
    dfs(0,results, [], nums, n);
    return results;
};

function dfs(index, results, path, nums, n){
    if(index === n) {
        results.push([...path]);
        return;
    }
    for(const num of nums) {
        path.push(num);
        dfs(index + 1, results, path, nums.filter(x => x !== num), n);
        path.pop();
    }
}

// Faster impl
function permute(nums: number[]): number[][] {
    const backtrack = (curr) => {
        if (curr.length === nums.length) {
            ans.push([...curr]);
            return;
        }

        for (let num of nums) {
          // Simply skip the number (similar to the filter.)
            if (!curr.includes(num)) {
                curr.push(num);
                backtrack(curr);
                curr.pop();
            }
        }
    }

    let ans = [];
    backtrack([]);
    return ans;
};
