//phone number combination

const KEYBOARD = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

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
