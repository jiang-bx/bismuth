package linklist

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func ReverseBetween(head *ListNode, left int, right int) *ListNode {
	newHead := &ListNode{Val: -1, Next: head}
	startNode := newHead

	for i := 0; i < left-1; i++ {
		startNode = startNode.Next
	}

	var prevNode *ListNode
	curNode := startNode.Next
	for i := 0; i < right-left+1; i++ {
		next := curNode.Next
		curNode.Next = prevNode
		prevNode = curNode
		curNode = next
	}

	startNode.Next.Next = curNode
	startNode.Next = prevNode

	return newHead.Next
}
