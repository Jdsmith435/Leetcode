// Sum of distances. WTF this one sucked 

// Two pass dfs for optimal results.

function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    const graph = Array.from({ length: n }, () => []);
  // make undirected graph (no visited set needed, use parent param).
    for(const [u,v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const count:number[] = Array(n).fill(1); // Number of children in sub tree.
    const res:number[] = Array(n).fill(0); // Distance to each node in sub tree.

    function dfs1(node, parent) {
        for(const c of graph[node]) {
            if (c === parent) continue; // AKA visited
            dfs1(c,node); // Post order
            count[node] += count[c]; // Already at 1, so plus the children
            res[node] += res[c] + count[c]; // Take the distance sum of child + the amount of children nodes.
        }
    }
    dfs1(0, -1)

    function dfs2(node, parent) {
        for(const c of graph[node]) {
            if (c === parent) continue;
            res[c] = res[node] - count[c] + (n - count[c]) // weird math dont make me explain
            dfs2(c,node);
        }
    }

    dfs2(0, -1);
    return res;
};
