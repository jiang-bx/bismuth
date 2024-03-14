package dbpointer

func DetectCycle(head *ListNode) *ListNode {
	slow, fast := head, head

	for {
		if fast == nil || fast.Next == nil {
			return nil
		}
		fast = fast.Next.Next
		slow = slow.Next

		if fast == slow {
			break
		}
	}

	fast = head

	for fast != slow {
		fast = fast.Next
		slow = slow.Next
	}

	return fast
}
