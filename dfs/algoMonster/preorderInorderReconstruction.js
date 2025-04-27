//Reconstruct Binary Tree from Preorder and Inorder Traversal
/**
* The start index of preorder will always be the root.
* the left and right sides of root in the inorder array will be the subtrees.
* Recusively take the root (preorder start pst) to get the index into inorder start (ist)
* 
* Params for the left & right functions
* - The start for preorder left will just be the next node. 
* - The start for preorder right will be preorder + 1 + leftLength. Left length is the size of root index in inorder - the start.
* 	(So all then nodes in between) 
* - Inorder left is the same start
* - Inorder right is the next node after index. 
* - Size for left is the leftSize already calculated.
* - Size for right is the length of the array - 1 - the nodes not included (leftSize)
*/

function helper(preorder, indexes, pst, ist, len) {
    if (len <= 0) return null;
    const root = preorder[pst];
    const index = indexes.get(root);
    const leftSize = index - ist;
    const left = helper(preorder, indexes, pst + 1, ist, leftSize);
    const right = helper(preorder, indexes, pst + 1 + leftSize, index + 1, len - 1 - leftSize);
    return new Node(root, left, right);
}

function constructBinaryTree(preorder, inorder) {
    const valueToIndex = new Map();
    inorder.forEach((val, inx) => {
        valueToIndex.set(val, inx);
    });
    
    return helper(preorder, valueToIndex, 0, 0, preorder.length);
}
