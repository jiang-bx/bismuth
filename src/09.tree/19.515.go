package tree

// BFS
func LargestValues1(root *TreeNode) []int {
	ans := []int{}
	if root == nil {
		return ans
	}

	queue := []*TreeNode{root}

	for len(queue) > 0 {
		max := queue[0].Val
		for i := len(queue); i > 0; i-- {
			node := queue[0]
			queue = queue[1:]

			if node.Val > max {
				max = node.Val
			}

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		ans = append(ans, max)
	}

	return ans
}

// DFS
func LargestValues(root *TreeNode) []int {
	var dfs func(node *TreeNode, depth int)
	m := map[int]int{}

	dfs = func(node *TreeNode, depth int) {
		if node == nil {
			return
		}

		if _, ok := m[depth]; !ok {
			m[depth] = node.Val
		}

		if node.Val > m[depth] {
			m[depth] = node.Val
		}

		dfs(node.Left, depth+1)
		dfs(node.Right, depth+1)
	}

	dfs(root, 0)

	ans := make([]int, len(m))

	for i, v := range m {
		ans[i] = v
	}

	return ans
}
