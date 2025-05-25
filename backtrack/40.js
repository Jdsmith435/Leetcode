// combination sum 2
// Dont use a set, they are slow. Prune branches beforehand.
function combinationSum2(can: number[], target: number): number[][] {
    const results = [];
    const path = [];
    function dfs(rem, start) {
        if(rem === 0) {
            results.push([...path]);
            return;
        }
        for(let i = start; i < can.length; i++) {
            if (i > start && can[i] === can[i - 1]) continue; // This is important to skip duplicates at the same level.
            const n = can[i];
            if(rem - n < 0 ) continue;
            path.push(n);
            dfs(rem - n, i  + 1);
            path.pop();
        }
    }

    can.sort((a,b) => a - b);
    dfs(target,0);
    return results;
};
