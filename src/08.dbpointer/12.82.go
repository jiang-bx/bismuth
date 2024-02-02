package dbpointer

func DeleteDuplicates1(head *ListNode) *ListNode {
	curNode := head
	for curNode != nil && curNode.Next != nil {
		if curNode.Val == curNode.Next.Val {
			curNode.Next = curNode.Next.Next
		} else {
			curNode = curNode.Next
		}
	}
	return head
}
