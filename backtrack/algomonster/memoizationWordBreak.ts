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

// Decode Message example. 
function numDecodings(s: string): number {
    const memo = {};

    function dfs(i) {
        if(i === s.length) return 1;
        if(i in memo) return memo[i];

        let w = 0;
        if(s[i] === '0') return w;
        // single digit string
        w += dfs(i+1);
        // two digit string
        if(i + 2 <= s.length && s.substring(i, i + 2) <= '26') {
            w += dfs(i+2);
        }
        memo[i] = w;
        return w;
    }

    return dfs(0);
};
