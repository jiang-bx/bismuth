package tree

func LongestUnivaluePath(root *TreeNode) int {
	var max = 0
	var dfs func(node *TreeNode) int

	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}

		ans := 0
		cur := 0
		l := dfs(node.Left)
		r := dfs(node.Right)

		if node.Left != nil && node.Left.Val == node.Val {
			ans += l + 1
			cur += l + 1
		}

		if node.Right != nil && node.Right.Val == node.Val {
			// ans 是返回的结果
			// 所以需要返回左侧或者右侧最多的数量
			if ans < r+1 {
				ans = r + 1
			}
			cur += r + 1
		}

		// 记录最大边数
		if max < cur {
			max = cur
		}

		return ans
	}

	dfs(root)

	return max
}
