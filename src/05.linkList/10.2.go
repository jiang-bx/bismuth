package linklist

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func AddTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var curNode1, curNode2, curNode, newHead *ListNode = l1, l2, nil, nil
	prefix := 0

	for curNode1 != nil || curNode2 != nil {
		num1 := 0
		num2 := 0

		if curNode1 != nil {
			num1 = curNode1.Val
			curNode1 = curNode1.Next
		}

		if curNode2 != nil {
			num2 = curNode2.Val
			curNode2 = curNode2.Next
		}

		total := num1 + num2 + prefix
		value := total % 10
		prefix = total / 10

		newNode := &ListNode{
			Val: value,
		}

		if newHead == nil {
			newHead = newNode
		} else {
			curNode.Next = newNode
		}
		curNode = newNode
	}

	if prefix != 0 {
		curNode.Next = &ListNode{
			Val: prefix,
		}
	}

	return newHead
}
