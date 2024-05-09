package tree

func PathSum1(root *TreeNode, targetSum int) [][]int {
	var dfs func(node *TreeNode, tar int)
	res := [][]int{}
	path := []int{}
	dfs = func(node *TreeNode, tar int) {
		if node == nil {
			return
		}

		path = append(path, node.Val)
		tar -= node.Val

		if tar == 0 && node.Left == nil && node.Right == nil {
			res = append(res, append([]int{}, path...))
		}

		dfs(node.Left, tar)
		dfs(node.Right, tar)

		path = path[:len(path)-1]
	}

	dfs(root, targetSum)

	return res
}
