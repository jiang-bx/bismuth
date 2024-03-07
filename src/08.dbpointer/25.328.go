package dbpointer

func OddEvenList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	odd := head
	even := head.Next
	dum := even

	for even != nil && even.Next != nil {
		odd.Next = even.Next
		even.Next = even.Next.Next
		odd = odd.Next
		even = even.Next
	}

	odd.Next = dum

	return head
}
