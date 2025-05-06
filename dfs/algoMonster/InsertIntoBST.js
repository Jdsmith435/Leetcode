Insert into BST

function insert(node, val) {
	if(!node) return new Node(val);
	if(node.val < val) node.right = insert(node.right, val);
	else if(node.val > val) node.left = insert(node.left, val);
	return node;
}
