// Lexigraphical order is important if there are multiple paths.
// Since this forms a Eulerian path, we can use Hierholzer’s algorithm.

function findItinerary(tickets: string[][]): string[] {
    const results = [];
    const map = new Map();

  // Create the adjency list
    for(const [origin, dest] of tickets) {
        if(!map.has(origin)) map.set(origin, []);
        map.get(origin).push(dest);
    }
    // Sort for lexigraphical order
    for(const [key, value] of map.entries()) {
        value.sort();
    }

    function dfs(node: string) {
        const destList = map.get(node) || [];
        while (destList.length > 0) { 
            // take the next origin (sorted so we try smallest first)
            const next = destList.shift()!;
            dfs(next); // Expore this path
        }
        // once we reach the end (and we know there is a valid path) we add the node to the results.
        results.push(node);
    }

    dfs('JFK');
    return results.reverse();
};
