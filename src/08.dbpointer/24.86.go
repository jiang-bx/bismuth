package dbpointer

func Partition(head *ListNode, x int) *ListNode {
	left := &ListNode{}
	right := &ListNode{}
	l := left
	r := right

	for head != nil {
		if head.Val < x {
			l.Next = head
			l = l.Next
		} else {
			r.Next = head
			r = r.Next
		}
		head = head.Next
	}

	l.Next = right.Next
	r.Next = nil

	return left.Next
}
