//Cut Off Trees for Golf Event
/**
* Get the cells that need to be visited in a sorted array (i,j > 1).
* Iterate over each target row and column from that array. Bfs from last spot to target cell.
* In the bfs, check visited, go over directions, mark as visited before recursing on that cell.
*/


function cutOffTree(forest: number[][]): number {
    if(!forest && !forest[0]) return 0;

    const height = forest.length;
    const width = forest[0].length;
    const directions = [
        [0,1],
        [-1,0],
        [0,-1],
        [1,0]
    ];
    const trees = [];
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(forest[i][j] > 1) {
                trees.push([forest[i][j], i, j]);
            }
        }
    }
    // This will be our order of cells to visit/find.
    trees.sort((a,b) => a[0] - b[0]);

    function bfs(sr, sc, tr, tc): number {
        if(sr === tr && sc === tc) return 0;
        const visited = Array.from({length: height}, () => Array(width).fill(0));
        const queue = [[sr, sc, 0]];
        while(queue.length) {
            const [r, c, steps] = queue.shift();
            for(const [dr, dc] of directions) {
                const newRow = r + dr;
                const newCol = c + dc;
                if(newRow < 0 || newRow >= height || newCol < 0 || newCol >= width || visited[newRow][newCol] || !forest[newRow][newCol]) continue;
                visited[newRow][newCol] = 1;
                if(newRow === tr && newCol === tc) return steps + 1;
                queue.push([newRow, newCol, steps + 1]);
            }
        }
        return -1;
    }

    let totalSteps = 0;
    let currentRow = 0;
    let currentCol = 0;
    for(const [_,r,c] of trees) {
        const steps = bfs(currentRow, currentCol, r, c);
        if(steps === -1) return -1;
        totalSteps += steps;
        currentRow = r;
        currentCol = c;
    }

    return totalSteps;
};
