package linklist

type ListNode struct {
	Val  int
	Next *ListNode
}

func RemoveElements(head *ListNode, val int) *ListNode {
	newHead := &ListNode{
		Val:  -1,
		Next: head,
	}

	curNode := newHead

	for curNode.Next != nil {
		if curNode.Next.Val == val {
			curNode.Next = curNode.Next.Next
		} else {
			curNode = curNode.Next
		}
	}

	return newHead.Next
}
