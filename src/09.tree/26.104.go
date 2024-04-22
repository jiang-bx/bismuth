package tree

func MaxDepth1(root *TreeNode) int {
	if root == nil {
		return 0
	}

	var dfs func(node *TreeNode, cur int)
	max := 1
	dfs = func(node *TreeNode, cur int) {
		if node == nil {
			return
		}

		if max < cur {
			max = cur
		}

		dfs(node.Left, cur+1)
		dfs(node.Right, cur+1)
	}

	dfs(root, 1)

	return max
}

func MaxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	lMax := MaxDepth(root.Left) + 1
	rMax := MaxDepth(root.Right) + 1

	if lMax > rMax {
		return lMax
	}

	return rMax
}
