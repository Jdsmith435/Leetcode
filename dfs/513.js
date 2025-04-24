//513 Find Bottom Left Tree Value

function findBottomLeftValue(root: TreeNode | null): number {
    let maxLevel = 0;
    let val = root.val;

    function dfs(node, level): void {
        if(!node) return;
        if(level > maxLevel) {
            maxLevel = level;
            val = node.val;
        }
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root, 0);
    return val;
};
