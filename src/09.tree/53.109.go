package tree

type ListNode struct {
	Val  int
	Next *ListNode
}

func SortedListToBST(head *ListNode) *TreeNode {
	var build func(start, end int) *TreeNode
	if head == nil {
		return nil
	}
	l := 0
	h := head
	for head != nil {
		l++
		head = head.Next
	}

	build = func(start, end int) *TreeNode {
		if start > end {
			return nil
		}

		mid := (start + end) >> 1

		left := build(start, mid-1)
		node := &TreeNode{}
		node.Val = h.Val
		h = h.Next
		node.Left = left
		node.Right = build(mid+1, end)
		return node
	}

	return build(0, l-1)
}
