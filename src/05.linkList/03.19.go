package linklist

func RemoveNthFromEnd(head *ListNode, n int) *ListNode {
	// 暴力求解
	// curNode := head
	// i := 0

	// for curNode.Next != nil {
	// 	curNode = curNode.Next
	// 	i++
	// }

	// k := i
	// dlIndex := k - (n - 1)
	// if dlIndex == 0 {
	// 	head = head.Next
	// 	return head
	// }

	// curNode = head
	// i = 0
	// for curNode.Next != nil {
	// 	if dlIndex-1 == i {
	// 		curNode.Next = curNode.Next.Next
	// 		break
	// 	} else {
	// 		curNode = curNode.Next
	// 	}
	// 	i++
	// }

	// return head

	// 增加哨兵节点
	// newHead := &ListNode{
	// 	Val:  -1,
	// 	Next: head,
	// }

	// curNode := newHead
	// i := 0

	// for curNode.Next != nil {
	// 	curNode = curNode.Next
	// 	i++
	// }

	// dlIndex := i - n
	// curNode = newHead
	// i = 0
	// for curNode.Next != nil {
	// 	if dlIndex == i {
	// 		curNode.Next = curNode.Next.Next
	// 		break
	// 	} else {
	// 		curNode = curNode.Next
	// 	}
	// 	i++
	// }

	// return newHead.Next

	// 双指针快慢节点
	newHead := &ListNode{
		Val:  -1,
		Next: head,
	}
	slowPointer := newHead
	fastPointer := newHead

	for i := 0; i < n; i++ {
		fastPointer = fastPointer.Next
	}

	for fastPointer.Next != nil {
		fastPointer = fastPointer.Next
		slowPointer = slowPointer.Next
	}

	slowPointer.Next = slowPointer.Next.Next

	return newHead.Next
}
