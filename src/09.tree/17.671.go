package tree

func FindSecondMinimumValue1(root *TreeNode) int {
	var dfs func(nodt *TreeNode, cur int)
	ans := -1

	dfs = func(node *TreeNode, cur int) {
		if node == nil {
			return
		}

		if node.Val != cur {
			if ans == -1 {
				ans = node.Val
			} else {
				if ans > node.Val {
					ans = node.Val
				}
			}
			return
		}

		dfs(node.Left, cur)
		dfs(node.Right, cur)
	}

	dfs(root, root.Val)

	return ans
}

func FindSecondMinimumValue(root *TreeNode) int {
	var dfs func(*TreeNode)
	ans := -1
	rootVal := root.Val
	dfs = func(node *TreeNode) {
		if node == nil || ans != -1 && node.Val >= ans {
			return
		}

		if node.Val > rootVal {
			ans = node.Val
		}

		dfs(node.Left)
		dfs(node.Right)
	}

	dfs(root)

	return ans
}
