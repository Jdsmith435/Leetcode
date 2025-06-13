// Surrounded regions. First impl.
// This however will change the board on branches that are surrounded but 
// if another branch is not surrourned, we cant undo those changes.
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

// The right impl is to iterate on the border and mark those as safe. Then change all the
// other O to X
function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;

    const dfs = (r: number, c: number) => {
        if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== 'O') return;

        board[r][c] = 'T';

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') dfs(i, 0);
        if (board[i][n - 1] === 'O') dfs(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') dfs(0, j);
        if (board[m - 1][j] === 'O') dfs(m - 1, j);
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === 'O') board[r][c] = 'X';
            if (board[r][c] === 'T') board[r][c] = 'O'; 
        }
    }
}


// Tried it again with the node first dfs pattern and it works 
function findSafe(sr,sc) {
        if(sr < 0 || sr >= height || sc < 0 || sc >= width) return;
        if(visited[sr][sc]) return;
        if(board[sr][sc] === 'X') return;
        visited[sr][sc] = 1;
        board[sr][sc] = '%';
        for( const [dr, dc] of directions) {
            const nr = dr + sr, nc = dc + sc;
            findSafe(nr,nc);
        }


    }
