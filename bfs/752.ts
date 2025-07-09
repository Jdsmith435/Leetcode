// bfs. Same template

function openLock(trappedCombos: string[], targetCombo: string): number {
    const bad = new Set([...trappedCombos]);
    if (bad.has('0000')) return -1;
    if (targetCombo === '0000') return 0;
    const nextInt = new Map();
    const prevInt = new Map();
    for(let i = 0; i < 10; i++) {
        nextInt.set(i.toString(), ((i + 1) % 10).toString());
    }
    for(const [index,val] of nextInt.entries()) {
        prevInt.set(val, index);
    }
    
    const visited = new Set(['0000']);
    const queue = ['0000'];
    function getNeighbors(node) {
        const res = [];
        for(let i = 0; i < 4; i++) {
            const next = node.slice(0,i) + nextInt.get(node[i]) + node.slice(i + 1);
            const prev = node.slice(0,i) + prevInt.get(node[i]) + node.slice(i + 1);
            if(!bad.has(next)) res.push(next);
            if(!bad.has(prev)) res.push(prev);
        }
        return res;
    }
    
    let steps = 0;
    while(queue.length) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const node = queue.shift();
            if(node === targetCombo) return steps;
            for(const n of getNeighbors(node)) {
                if(visited.has(n)) continue;
                visited.add(n);
                queue.push(n);
            }
        }
        steps++;
    }
    return -1;
}
