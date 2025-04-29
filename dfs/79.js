//79 Word Search
/**
* Dfs. Need to match all characters. 
* The first two conditions are interesting. Check if mismatch, because after we know its a match so then check length.
* Mark visited and keep moving deeper.
* If false, we need to mark it as not found.
*/
function exist(board: string[][], word: string): boolean {
    if(!board.length && !board[0].length) return false;
    const height = board.length;
    const width = board[0].length;
    if(height * width < word.length ) return false;
    const directions = [
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ];
    
    function dfs(r, c, index, visited) {
        if (board[r][c] !== word[index]) return false;
        if (index === word.length - 1) return true;
        visited[r][c] = 1;

        if(index === word.length - 1 && word[index] === board[r][c]) return true;
        for(const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if(nr < 0 || nr >= height || nc < 0 || nc >= width || visited[nr][nc] || board[nr][nc] !== word[index + 1]) continue;
            if(dfs(nr, nc, index + 1, visited)) return true;
        }
        visited[r][c] = 0;
        return false;
    }

    for(let i = 0; i < height; i++ ) {
        for(let j = 0; j < width; j++) {
            if(board[i][j] === word[0]) {
                const visited = Array.from({length: height}, () => Array(width).fill(0));
                if(dfs(i,j,0,visited)) return true;
            }
        }
    }
    return false;
};
