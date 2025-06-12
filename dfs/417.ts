function pacificAtlantic(heights: number[][]): number[][] {
   if(!heights || heights.length === 0 || heights[0].length === 0) return [[]]
    const rows = heights.length;
    const cols = heights[0].length;
    const directions: number[][] = [[-1,0], [1,0], [0,-1], [0,1]];
    const cells = [];
    const atlantic = Array.from({length: rows}, () => Array(cols).fill(0));
    const pacific = Array.from({length: rows}, () => Array(cols).fill(0));

    /**
    * The order of operations for the dfs is very important.
    * Usually, the neightbor is checked if visited then marked. This will create an inconsistent state.
    * The previous height is from the previous node and we are comparing it to the neighbor node.
    * Using this order of operations, we are checking the current node versus the last then moving to the neigbor node.
*/
    function dfsP(row: number, col: number, visited, prevHeight: number){
        if(row < 0 || col < 0 || row >= rows || col >= cols) return;
        if(visited[row][col]) return;
        if(heights[row][col] < prevHeight) return;
        visited[row][col] = true;
        for(const [r, c] of directions){
            dfsP(row+r, col+c, visited, heights[row][col]);
        }
    }

    for(let i = 0; i < rows; i++) {
        dfsP(i,0, pacific,0)
        dfsP(i,cols-1, atlantic, 0)
    }

    for(let j = 0; j < cols; j++) {
        dfsP(0,j, pacific, 0)
        dfsP(rows-1,j, atlantic, 0)
    }
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++) {
            if(atlantic[i][j] && pacific[i][j]) {
                cells.push([i,j])
            }
        }
    }

    return cells;
}
