package tree

func AddOneRow1(root *TreeNode, val int, depth int) *TreeNode {
	if depth == 1 {
		return &TreeNode{val, root, nil}
	}

	var dfs func(*TreeNode, int)

	dfs = func(tn *TreeNode, i int) {
		if i+1 == depth {
			tn.Left = &TreeNode{val, tn.Left, nil}
			tn.Right = &TreeNode{val, nil, tn.Right}
			return
		}

		if tn.Left != nil {
			dfs(tn.Left, i+1)
		}

		if tn.Right != nil {
			dfs(tn.Right, i+1)
		}
	}

	dfs(root, 1)

	return root
}

func AddOneRow(root *TreeNode, val int, depth int) *TreeNode {
	if depth == 1 {
		return &TreeNode{val, root, nil}
	}

	queue := []*TreeNode{root}
	cur := 1
	for len(queue) > 0 {
		size := len(queue)

		for i := size; i > 0; i-- {
			node := queue[0]
			queue = queue[1:]

			if cur+1 == depth {
				node.Left = &TreeNode{val, node.Left, nil}
				node.Right = &TreeNode{val, nil, node.Right}
			}

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		cur++
		if cur == depth {
			return root
		}
	}

	return root
}
