package tree

func BuildTree1(inorder []int, postorder []int) *TreeNode {
	var dfs func(left, right int) *TreeNode
	m := map[int]int{}
	for i, v := range inorder {
		m[v] = i
	}

	postIndex := len(inorder) - 1

	dfs = func(left, right int) *TreeNode {
		if left > right {
			return nil
		}

		node := &TreeNode{Val: postorder[postIndex]}
		i := m[postorder[postIndex]]
		postIndex--

		node.Right = dfs(i+1, right)
		node.Left = dfs(left, i-1)

		return node
	}

	return dfs(0, len(inorder)-1)
}
