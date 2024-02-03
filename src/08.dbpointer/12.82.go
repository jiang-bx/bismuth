package dbpointer

func DeleteDuplicates1(head *ListNode) *ListNode {

	/*
		p c
		x 1 2 3
	*/

	dummy := &ListNode{}
	pre := dummy
	cur := head

	for cur != nil {
		// 连接 pre 的下一个节点
		if cur.Next == nil || cur.Val != cur.Next.Val {
			pre.Next = cur
			pre = cur
			cur = cur.Next
			continue
		}

		// 消除重复节点
		for cur.Next != nil && cur.Val == cur.Next.Val {
			cur = cur.Next
		}
		// 所有重复节点都不需要
		cur = cur.Next
	}

	pre.Next = nil

	return dummy.Next
}
