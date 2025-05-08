function serialize(root: TreeNode | null): string {
    const results = [];
    function dfs(node) {
        if(!node) {
            results.push('x');
            return;
        }
        results.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return results.join(',')
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
   const tokens = data.split(",")[Symbol.iterator]()
   function dfs() {
        const val = tokens.next().value;
        if(val === 'x') return null;
        const left = dfs();
        const right = dfs()
        return new TreeNode(parseInt(val, 10), left, right);
   }
   return dfs();
};  
