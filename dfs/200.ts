// 200. Number of Islands
const directions = [
    [0,1],
    [-1,0],
    [0,-1],
    [1,0]
]
function numIslands(grid: string[][]): number {
    const height = grid.length;
    const width = grid[0].length;

    const visited = Array.from({length: height}, () => Array(width).fill(0));
    function dfs(sr, sc){ 
        for(const [dr, dc] of directions) {
            const nr = dr + sr, nc = dc + sc;
            if(nr >= 0 && nr < height && nc >= 0 && nc < width && grid[nr][nc] === "1" && !visited[nr][nc]) {
                visited[nr][nc] = 1;
                dfs(nr,nc);
            }
        }
    }

    let islands = 0
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if (grid[i][j] === "1" && !visited[i][j]) {
                dfs(i,j);
                islands++;
            }
        }
    }
    return islands;
};
