// Course Schedule 

// I first did a imple where I passed in a set to check if we have visited that node. 
// I then deleted the node after. Similar to backtracking. However, this was too slow.
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = new Map();
    for(const [course, pre] of prerequisites) {
        if(!graph.has(pre)) graph.set(pre, []);
        graph.get(pre).push(course);
    }

    function dfs(num, path) {
        path.add(num);
        if(graph.has(num)){
            for (const neighbor of graph.get(num)) {
                if(path.has(neighbor) || !dfs(neighbor, path)) return false;
            }
        }
        path.delete(num);
        return true;
    }
    
    for (const [key, _] of graph) {
        if(!dfs(key, new Set())) return false;
    }
    
    return true;
};

// Here, I have two sets, visited and visiting. Within the iteration, I check if I have visited this node.
// If I have, then I am good to skip it. However, visiting will show nodes that create a cycle.
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = new Map();
    for (const [course, pre] of prerequisites) {
        if (!graph.has(pre)) graph.set(pre, []);
        graph.get(pre).push(course);
    }

    const visiting = new Set<number>();
    const visited = new Set<number>();

    function dfs(course: number): boolean {
        if (visited.has(course)) return true;
        if (visiting.has(course)) return false;

        visiting.add(course); // Backtracking path.push(value)

        if (graph.has(course)) {
            for (const neighbor of graph.get(course)!) {
                if (!dfs(neighbor)) return false;
            }
        }

        visiting.delete(course); // We can safely remove as if we see this node again, it is not a cycle.
        visited.add(course);

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};
