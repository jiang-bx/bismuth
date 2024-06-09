package tree

func GenerateTrees(n int) []*TreeNode {
	if n <= 0 {
		return nil
	}
	return helper(1, n)
}

func helper(start, end int) []*TreeNode {
	if start > end {
		return []*TreeNode{nil}
	}

	allTrees := []*TreeNode{}

	for i := start; i <= end; i++ {
		leftTrees := helper(start, i-1)
		rightTrees := helper(i+1, end)

		// 从左子树中选出一棵左子树
		// 从右子树中选出一棵右子树
		// 拼接到根节点
		for _, left := range leftTrees {
			for _, right := range rightTrees {
				curTree := &TreeNode{i, nil, nil}
				curTree.Left = left
				curTree.Right = right
				allTrees = append(allTrees, curTree)
			}
		}
	}

	return allTrees
}
