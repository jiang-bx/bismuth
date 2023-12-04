package linklist

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func SwapPairs(head *ListNode) *ListNode {
	// 暴力解法
	// curNode, prevNode, newHead, i := head, head, head, 0
	// var parentNode *ListNode

	// for curNode != nil {
	// 	i++
	// 	if i%2 == 1 {
	// 		prevNode = curNode
	// 	} else {
	// 		next := curNode.Next
	// 		prevNode.Next = next
	// 		curNode.Next = prevNode

	// 		if parentNode == nil {
	// 			newHead = curNode
	// 		} else {
	// 			parentNode.Next = curNode
	// 		}

	// 		curNode = prevNode
	// 		parentNode = curNode
	// 	}
	// 	curNode = curNode.Next
	// }

	// return newHead

	// 递归解法
	// if head == nil || head.Next == nil {
	// 	return head
	// }

	// next := head.Next
	// head.Next = SwapPairs(next.Next)
	// next.Next = head
	// return next

	// 非递归解法
	newHead := &ListNode{
		Val:  -1,
		Next: head,
	}

	curNode := newHead

	for curNode.Next != nil && curNode.Next.Next != nil {
		start := curNode.Next
		end := curNode.Next.Next
		curNode.Next = end
		start.Next = end.Next
		end.Next = start
		curNode = start
	}

	return newHead.Next
}
