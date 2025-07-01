// Equivelant to directions
function getNeighbors(x,y) {
    const res = [];
    const deltaRow = [-2, -2, -1, 1, 2, 2, 1, -1];
    const deltaCol = [-1, 1, 2, 2, 1, -1, -2, -2];
    for (let i = 0; i < deltaRow.length; i++) {
        const r = y + deltaRow[i];
        const c = x + deltaCol[i];
        res.push([r, c]);
    }
    
    return res;
}

// Follow algomoster template. Honestly this template doesnt change. 
// Use visited because the board is infinite. 
// Use bfs to find all options at current distance.
function bfs(start, x, y) {
    let steps = 0;
    const visited = new Set();
    const queue = [start];
    
    while(queue.length){
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const [r,c] = queue.shift();
            if(r === y && c === x) return steps;
            for(const [dr,dc] of getNeighbors(r,c)) {
                if(visited.has(`${dr}.${dc}`)) continue;
                queue.push([dr,dc]);
                visited.add(`${dr}.${dc}`);
            }
        }
        steps++;
    }
    
    return steps;
}

function getKnightShortestPath(x, y) {
    
    return bfs([0,0],x,y);
}
