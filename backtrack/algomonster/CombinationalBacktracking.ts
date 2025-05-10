// base combination backtracking algorithm


function dfs(index, results, path, count){
    if(index === count) {
        results.push(path.join(''));
        return;
    }
    
    for(const letter of ['a','b']) {
        path.push(letter);
        dfs(index + 1, results, path, count);
        path.pop();
    }
}

function letterCombination(n) {
    const results = [];
    dfs(0, results, [], n);
    return results;
}
