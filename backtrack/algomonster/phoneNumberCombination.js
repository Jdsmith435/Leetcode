//phone number combination

function letterCombinations(digits: string): string[] {
    if(!digits) return [];
    const results = [];
    dfs(0, results, [], digits);
    return results;
};

function dfs(index, results, path, digits){ 
    if(index === digits.length) {
        results.push(path.join(''));
        return;
    }
    const letterIndex = digits.charAt(path.length);
    for(const letter of KEYBOARD[letterIndex]) {
        path.push(letter);
        dfs(index + 1, results, path, digits);
        path.pop();
    }
}
