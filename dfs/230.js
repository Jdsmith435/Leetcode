// Kth smallest
/*
* Simple inorder traversal because of bst. One k count is hit, return.
*
*/
function kthSmallest(root: TreeNode | null, k: number): number {
    const nodes = [];
    function dfs(node) {
        if(!node) return -1;
        const left = dfs(node.left);
        if(left !== -1) return left;
        nodes.push(node.val);
        if(nodes.length === k) return nodes[k-1];
        const right = dfs(node.right);
        if(right !== -1) return right;
        return -1;
    }
    return dfs(root);
};
