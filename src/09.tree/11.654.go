package tree

func ConstructMaximumBinaryTree(nums []int) *TreeNode {
	// 递归
	// var build func(arr []int, l int, r int) *TreeNode
	// build = func(arr []int, l, r int) *TreeNode {
	// 	if l > r {
	// 		return nil
	// 	}

	// 	idx := l
	// 	for i := l; i <= r; i++ {
	// 		if arr[i] > arr[idx] {
	// 			idx = i
	// 		}
	// 	}

	// 	root := &TreeNode{}
	// 	root.Val = arr[idx]
	// 	root.Left = build(arr, l, idx-1)
	// 	root.Right = build(arr, idx+1, r)
	// 	return root
	// }

	// return build(nums, 0, len(nums)-1)

	// 单调栈
	stack := []*TreeNode{}

	for _, v := range nums {
		node := &TreeNode{Val: v}

		for len(stack) > 0 && v > stack[len(stack)-1].Val {
			node.Left = stack[len(stack)-1]
			stack = stack[:len(stack)-1]
		}

		if len(stack) > 0 {
			stack[len(stack)-1].Right = node
		}

		stack = append(stack, node)
	}

	return stack[0]
}
