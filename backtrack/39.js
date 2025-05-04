//39 Combination Sum
/**
* TODO Study backtracking algorithms.
* The idea is to recurs. work to the last index and work your way back.
* it helps to draw a tree of the paths it can take starting from 0 and [].
*/
function combinationSum(candidates: number[], target: number): number[][] {
    const results = [];
    const sum = [];

    function backtrack(index: number) {
        const current = sum.reduce((acc, val) => acc + val, 0);
        if(current === target) {
            results.push([...sum]);
            return;
        }
        if(current > target || index === candidates.length) return;
        backtrack(index+1);

        sum.push(candidates[index]);
        backtrack(index);
        sum.pop();
    }
    backtrack(0);
    return results;
};
