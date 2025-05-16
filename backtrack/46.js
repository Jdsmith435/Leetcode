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

// Faster impl. Not much changed but this is 100% faster
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

// algomonster has a similar approach. But used a 'visited' array.
// Note: this used an array as the return type.
function permute(nums: number[]): number[][] {
    const results = [];
    const used = [];
    function dfs(path) {
        if(path.length === nums.length) {
            results.push([...path]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(used[i] !== 1) {
                used[i] = 1;
                path.push(nums[i]);
                dfs(path);
                path.pop();
                used[i] = 0;
            }
        }
    }
    dfs([]);
    return results;
};
