package dbpointer

func HasCycle(head *ListNode) bool {
	slow := head
	fast := head

	for fast != nil {
		fast = fast.Next
		if fast != nil {
			fast = fast.Next
		}

		if fast == slow {
			return true
		}

		slow = slow.Next
	}

	return false
}
