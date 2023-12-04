package linklist

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func RotateRight(head *ListNode, k int) *ListNode {
	// 暴力解法
	// n := 0
	// curNode := head
	// for curNode != nil {
	// 	curNode = curNode.Next
	// 	n++
	// }

	// if n == 0 {
	// 	return head
	// }

	// k %= n

	// if k == 0 || n == 1 {
	// 	return head
	// }

	// curNode = head
	// for i := 1; i < n-k; i++ {
	// 	curNode = curNode.Next
	// }

	// lastNode := curNode.Next
	// curNode.Next = nil

	// curNode = lastNode
	// for curNode.Next != nil {
	// 	curNode = curNode.Next
	// }
	// curNode.Next = head

	// return lastNode

	// 优化
	// var lastNode *ListNode
	// n := 0
	// curNode := head
	// for curNode != nil {
	// 	if curNode.Next != nil {
	// 		lastNode = curNode.Next
	// 	}
	// 	curNode = curNode.Next
	// 	n++
	// }

	// if n == 0 {
	// 	return head
	// }

	// k %= n

	// if k == 0 || n == 1 {
	// 	return head
	// }

	// curNode = head
	// for i := 1; i < n-k; i++ {
	// 	curNode = curNode.Next
	// }

	// newHead := curNode.Next
	// curNode.Next = nil
	// lastNode.Next = head

	// return newHead

	// 组成环
	if head == nil || head.Next == nil {
		return head
	}
	n := 1
	curNode := head
	for curNode.Next != nil {
		curNode = curNode.Next
		n++
	}

	m := n - k%n
	curNode.Next = head
	for m > 0 {
		curNode = curNode.Next
		m--
	}

	newHead := curNode.Next
	curNode.Next = nil

	return newHead
}
