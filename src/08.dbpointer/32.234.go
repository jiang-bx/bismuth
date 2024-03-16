package dbpointer

func IsPalindrome(head *ListNode) bool {
	var cur, prev *ListNode
	fast := head
	slow := head

	for fast != nil && fast.Next != nil {
		cur = slow

		fast = fast.Next.Next
		slow = slow.Next

		cur.Next = prev
		prev = cur
	}

	if fast != nil {
		slow = slow.Next
	}

	for cur != nil {
		if cur.Val != slow.Val {
			return false
		}
		cur = cur.Next
		slow = slow.Next
	}

	return true
}
