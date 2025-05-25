// Given distinct numbers, return a distinct set of number combinations.

function subsets(nums) {
    const results = [];
    function dfs(start, path) {        
        if(start === nums.length) { 
            results.push([...path]);
            return;
        }
        path.push(nums[start]); // Path with the number included.
        dfs(start + 1, path);
        path.pop(); // Path without the current number included.
        dfs(start + 1, path);
     }

    dfs(0, []);
    return results;
}
