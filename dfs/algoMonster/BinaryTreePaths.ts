function binaryTreePaths(root: TreeNode | null): string[] {
    const results = [];
    dfs(root, results, []);
    return results;
};

function dfs(node, results, path) {
    if(!node) return;
    if(!node.left && !node.right) {
        path.push(node.val);
        results.push(path.join('->'));
        path.pop();
        return;
    }
    path.push(node.val);
    dfs(node.left, results, path);
    dfs(node.right, results, path);
    path.pop();
}

// Ternary is similar
function dfs(node, results, path) {
        if(!node.children.length) {
            path.push(node.val);
            results.push(path.join('->'));
            path.pop();
            return;
        }
        path.push(node.val);
        for (const n of node.children) {
            if(n) {
                dfs(n, results, path);
            }
        };
        path.pop();
    }

function ternaryTreePaths(root) {
    const results = [];
    dfs(root, results, []);
    return results;
}
