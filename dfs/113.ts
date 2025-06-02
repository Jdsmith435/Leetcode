// Used the backtracking path concept to keep track of the current values.
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const results = [];
    const path = [];
    function traverse(node: TreeNode, sum: number): void {
        if(!node) return;
        const rem = sum + node.val;
        if(!node.left && !node.right) {
            if(rem === targetSum ) {
               results.push([...path, node.val]);
               return;
            }
        } else {
            path.push(node.val);
            traverse(node.left, rem);
            traverse(node.right, rem);
            path.pop();
        }
    }


    traverse(root, 0);
    return results;
};
