// Multi source bfs
// double for loop and find sources. Start them in the queue.
function mapGateDistances(dm) {
    const r = dm.length;
    const c = dm[0].length;
    
    function getNeighbor(sr,sc) {
    const res = [];
    const dr = [1,-1,0,0]
    const dc = [0,0,1,-1];
    for(let i = 0; i < dr.length; i++) {
        const row = dr[i] + sr;
        const col = dc[i] + sc;
        if(row < 0 || row >= r || col < 0 || col >= c) continue;
        res.push([row,col]);
    }
    return res;
}
    
    const queue = []; // Build queue here
    for (let row = 0; row < r; row++) {
        for (let col = 0; col < c; col++) {
            if (dm[row][col] === 0) {
                queue.push([row, col]);
            }
        }
    }
    
    while(queue.length) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const [row,col] = queue.shift();
            for(const [nr,nc] of getNeighbor(row,col)){
                if(dm[nr][nc] === 2147483647) {
                    dm[nr][nc] = dm[row][col] + 1; // Since we are moving from 0, just add 1.
                    queue.push([nr,nc]);
                }
            }
        }
    }
    
    return dm;
}
