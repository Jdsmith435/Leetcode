// Sum root to leaf numbers

function sumNumbers(root: TreeNode | null): number {
    function dfs(node, str) {
        if(!node) return 0;
        if(!node.left && !node.right) return parseInt(str + node.val);
        const left = dfs(node.left, str + node.val);
        const right = dfs(node.right, str + node.val);
        return left + right;
    }
    dfs(root, '');
    return root.val === 0 ? 
    dfs(root.left, '') + dfs(root.right, '') : dfs(root, '');
};

// Simple dfs but just return the number instead of having result array.
