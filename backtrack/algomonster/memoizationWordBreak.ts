/**
* The idea is to cache your work. Memo is where is it cached.
* Uhh not much
*/

function wordBreak(s: string, wordDict: string[]): boolean {
    const memo = {};

    function dfs(index) {
        if (index === s.length) return true;
        if (index in memo) return memo[index];
        let ans = false;
        for (const word of wordDict) {
            if(s.slice(index).startsWith(word)) {
                if (dfs(index + word.length)) {
                    ans = true;
                    break;
                }
            }
        }
        memo[index] = ans;
        return ans;
    }

    return dfs(0);
};
