package dbpointer

func ReorderList(head *ListNode) {
	if head == nil || head.Next == nil || head.Next.Next == nil {
		return
	}

	slow, fast := head, head

	for fast.Next != nil && fast.Next.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
	}

	lastHead := slow.Next
	slow.Next = nil

	// 倒置
	prev := lastHead
	next := lastHead.Next
	prev.Next = nil

	for next != nil {
		temp := next.Next
		next.Next = prev
		prev = next
		next = temp
	}

	lastHead = prev
	// 合并

	for lastHead != nil {
		temp := lastHead.Next
		lastHead.Next = head.Next
		head.Next = lastHead
		head = lastHead.Next
		lastHead = temp
	}

}
