// Populating next right node in perfect bst

// simple bfs, however, track previous and at the end of the current level set previous.next to null.
// also works for unbalanced binary trees.
function connect(root: _Node | null): _Node | null {
    if(!root) return null;
    const queue = [root];
    while(queue.length) {
        const length = queue.length;
        let prev = null;
        for(let i = 0; i < length; i++) {
            const n = queue.shift();
            if(n.left) queue.push(n.left);
            if(n.right) queue.push(n.right);
            if(prev) {
                prev.next = n;
            }
            prev = n; 
        }
        prev.next = null;
    }
    return root;
};


function connect(root: _Node | null): _Node | null {
    if(!root) return null;
    const queue = [root];
    while(queue.length) {
        const length = queue.length;
        let prev = null;
        for(let i = 0; i < length; i++) {
            const n = queue.shift();
            if(n.left) queue.push(n.left);
            if(n.right) queue.push(n.right);
            if(prev) {
                prev.next = n;
            }
            prev = n; 
        }
        prev.next = null;
    }
    return root;
};
