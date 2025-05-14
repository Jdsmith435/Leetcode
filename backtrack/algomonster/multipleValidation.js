// Combination of paranthesis

function generateParenthesis(n: number): string[] {
    const results = [];
    const limit = n * 2;
    function dfs(index, open, close, str){
        if(index === limit) {
            results.push(str);
            return;
        }
        if(open < n) {
            dfs(index + 1, open + 1, close, str + '(');
        }
        if(close < open) {
            dfs(index + 1, open, close + 1, str + ')');
        }
    }
    dfs(0,0,0, '');
    return results;
};
