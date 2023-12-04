package linklist

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func ReverseKGroup(head *ListNode, k int) *ListNode {
	newHead := &ListNode{
		Val:  -1,
		Next: head,
	}

	prevNode, endNode := newHead, newHead

	for endNode != nil {
		for i := 0; i < k && endNode != nil; i++ {
			endNode = endNode.Next
		}

		if endNode == nil {
			break
		}

		start := prevNode.Next
		next := endNode.Next

		endNode.Next = nil

		var prev *ListNode
		curNode := start
		for curNode != nil {
			temp := curNode.Next
			curNode.Next = prev
			prev = curNode
			curNode = temp
		}

		prevNode.Next = prev
		start.Next = next

		prevNode = start
		endNode = prevNode
	}

	return newHead.Next
}
