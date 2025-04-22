//1372 Longest ZigZag in a Binary Tree
// The idea here is to pass whether the branch is left or right.
// Proves the concept of postorder.
// Take the max of left or right but then return the opposite of the branch.

function longestZigZag(root: TreeNode | null): number {
    let max = 0;
    function dfs(node, isRight): number {
        if(!node) return 0;
        const left = dfs(node.left, false);
        const right = dfs(node.right, true);
        max = Math.max(left, right, max);
        return (isRight ? left : right) + 1;
    }
    const left = dfs(root.left, false);
    const right = dfs(root.right, true);
    max = Math.max(max, left , right);
    return max;
};
