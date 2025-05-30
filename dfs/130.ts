// Surrounded regions. First impl.
function solve(board: string[][]): void {
    const height = board.length;
    const width = board[0].length;
    const directions = [
        [0,1],
        [-1,0],
        [0,-1],
        [1,0]
    ];
    
    const visited = Array.from({length: height}, () => Array(width).fill(0));
    function dfs(sr, sc) {
        if(sr === 0 || sr === height - 1 || sc === 0 || sc === width - 1) {
            return false;
        }
        for(const [dr, dc] of directions) {
            const nr = dr + sr, nc = dc + sc;
            if(nr >= 0 && nr < height && nc >= 0 && nc < width && !visited[nr][nc] && board[nr][nc] === 'O') {
                visited[nr][nc] = 1;
                if(!dfs(nr, nc)) return false;
            }
        }
        board[sr][sc] = 'X'
        return true;
    }

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(board[i][j] === 'O') {
                dfs(i,j);
            }
        }
    }
};
