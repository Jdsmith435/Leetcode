// Valid Arrangement of Pairs 
// Given an array of pairs, chain em up
// Inward and outward maps are to simply find the start.
// If outward[start] has a member appear more times than inward[end] then that is the start of the chain.  

function validArrangement(pairs: number[][]): number[][] {
    const graph = new Map();  // adjacency graph (used for dfs)
    const inward = new Map(); // end member of pair + quantity
    const outward = new Map(); // start member of pair + quantity

    // Step 1: populate the graphs
    for(const [u,v] of pairs) {
        if(!graph.has(u)) graph.set(u, []);
        graph.get(u).push(v);
        outward.set(u, (outward.get(u) || 0)+1); 
        inward.set(v, (inward.get(v) || 0)+1);
    }

    // Step 2: Find start (start member that has more occurences tahn end member)
    let start = pairs[0][0];
    for(const [member, quantity] of outward ) {
        const innieCount = inward.get(member) || 0;
        if(quantity > innieCount) {
            start = member;
            break;
        }
    }

    // Step 3: Dfs to find create chains
    const results = [];
    function dfs(node) {
        const neighbors  = graph.get(node);
        while(neighbors && neighbors.length) {
            const n = neighbors.pop();
            dfs(n);
            results.push([node, n]);
        }
    }

    dfs(start);
    return results.reverse();
};
