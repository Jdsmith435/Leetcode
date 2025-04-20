// 200 Number of Islands
/**
*	Simple bfs. Use original array as visited structure.
*
*/

function numIslands(grid: string[][]): number {
    if(!grid.length || !grid[0].length) return 0;
    const height = grid.length;
    const width = grid[0].length;
    const directions = [
        [0,1],
        [-1,0],
        [0,-1],
        [1,0]
    ];

    function bfs(sr, sc) {
        const queue = [[sr,sc]];
        grid[sr][sc] = '0';
        while(queue.length) {
            const [r,c] = queue.shift();
            for(const [dr, dc] of directions) {
                let nr = dr + r, nc = dc + c;
                if(nr < 0 || nr >= height || nc < 0 || nc >= width || grid[nr][nc] === '0') continue;
                grid[nr][nc] = '0';
                queue.push([nr,nc]);
            }
        }
    }

    let islands = 0;
    for(let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if(grid[i][j] === '1') {
                bfs(i,j);
                islands++;
            }
        }
    }
    return islands;
};
