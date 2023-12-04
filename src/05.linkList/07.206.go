package linklist

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func ReverseList(head *ListNode) *ListNode {
	// 递归
	// if head == nil || head.Next == nil {
	// 	return head
	// }
	// newHead := ReverseList(head.Next)
	// head.Next.Next = head
	// head.Next = nil
	// return newHead

	// 迭代
	if head == nil {
		return head
	}

	var prevNode *ListNode
	curNode := head

	for curNode != nil {
		next := curNode.Next
		curNode.Next = prevNode
		prevNode = curNode
		curNode = next
	}

	return prevNode
}
