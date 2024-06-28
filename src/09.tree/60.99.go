package tree

func RecoverTree1(root *TreeNode) {
	var dfs func(node *TreeNode)
	list := []*TreeNode{}
	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)
		list = append(list, node)
		dfs(node.Right)
	}
	dfs(root)

	var x *TreeNode = nil
	var y *TreeNode = nil
	for i := 0; i < len(list)-1; i++ {
		if list[i].Val > list[i+1].Val {
			y = list[i+1]
			if x == nil {
				x = list[i]
			}
		}
	}

	if x == nil || y == nil {
		return
	}

	temp := x.Val
	x.Val = y.Val
	y.Val = temp
}

func RecoverTree(root *TreeNode) {
	var dfs func(node *TreeNode)
	var x *TreeNode = nil
	var y *TreeNode = nil
	var pre *TreeNode = nil

	dfs = func(node *TreeNode) {
		if node == nil {
			return
		}
		dfs(node.Left)

		if pre != nil {
			if pre.Val > node.Val {
				y = node
				if x == nil {
					x = pre
				}
			}
		}

		pre = node

		dfs(node.Right)
	}
	dfs(root)

	if x == nil || y == nil {
		return
	}

	temp := x.Val
	x.Val = y.Val
	y.Val = temp
}
