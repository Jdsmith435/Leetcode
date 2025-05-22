// Binary Tree Level Order Traversal 2
// Results in reverse
// My impl. Add level to queue and just reset the collection when level changes.
function levelOrderBottom(root: TreeNode | null): number[][] {
    if(!root) return [];
    const results = [];

    const queue: [TreeNode, number][] = [[root, 0]];
    let level = 0;
    let set = [];
    while(queue.length) {
        const [node, lvl] = queue.shift();
        if(node) {
            if(lvl !== level) {
                level = lvl;
                results.unshift(set);
                set = [];
            }
            set.push(node.val);
            queue.push([node.left, level + 1]);
            queue.push([node.right, level + 1]);
        }
    }
    results.unshift(set);

    return results;
};

// Fast impl
// Keep track of level at loop iteration level.
// For loop until number of nodes in current queue is reached.
// Add thoseto a set and push. numNodes is set.
function levelOrderBottom(root: TreeNode | null): number[][] {
    if(!root) return [];
    const results = [];

    const queue = [root];
    while(queue.length) {
        const set = [];
        const numNodes = queue.length;
        for(let i = 0; i < numNodes; i++) {
            const node = queue.shift();
            set.push(node.val);
            const l = node.left;
            const r = node.right;
            if(l) queue.push(l);
            if(r) queue.push(r);
        }
        results.unshift(set);
    }

    return results;
};
