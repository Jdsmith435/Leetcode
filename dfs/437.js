// Just iterate over each node and take the path sum of that branch. Not optimal.
function pathSum(root: TreeNode | null, targetSum: number): number {
    let results = 0;
    function traverse(node: TreeNode, sum: number): void {
        if(!node) return;
        const rem = sum + node.val;
        if(rem === targetSum ) {
            results++;
        } 
        if(node.left) {
            traverse(node.left, rem);
        }
        if(node.right) {
            traverse(node.right, rem);
        }
    }

    function dfs(node) {
        if(!node) return;
        traverse(node, 0);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return results;
};
