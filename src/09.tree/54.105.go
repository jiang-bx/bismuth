package tree

func BuildTree(preorder []int, inorder []int) *TreeNode {
	var dfs func(cur, left, right int) *TreeNode
	m := map[int]int{}
	for i, v := range inorder {
		m[v] = i
	}

	dfs = func(cur, left, right int) *TreeNode {
		if left > right {
			return nil
		}

		node := &TreeNode{Val: preorder[cur]}
		i := m[preorder[cur]]

		node.Left = dfs(cur+1, left, i-1)
		node.Right = dfs(cur+(i-left)+1, i+1, right)

		return node
	}

	return dfs(0, 0, len(inorder)-1)
}
