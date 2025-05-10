function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const val = root.val;
    if(val < p.val && val < q.val) return lowestCommonAncestor(root.right, p, q)
    if(val > p.val && val > q.val) return lowestCommonAncestor(root.left, p, q)
    return root;
};
