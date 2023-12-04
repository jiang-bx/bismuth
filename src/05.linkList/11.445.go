package linklist

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func AddTwoNumbers2(l1 *ListNode, l2 *ListNode) *ListNode {
	// reverseList := func(head *ListNode) *ListNode {
	// 	var prevNode *ListNode
	// 	var curNode *ListNode = head
	// 	for curNode != nil {
	// 		next := curNode.Next
	// 		curNode.Next = prevNode
	// 		prevNode = curNode
	// 		curNode = next
	// 	}
	// 	return prevNode
	// }

	// rL1 := reverseList(l1)
	// rL2 := reverseList(l2)

	// var curNode, curNode1, curNode2, newHead *ListNode
	// prefix := 0
	// curNode1 = rL1
	// curNode2 = rL2

	// for curNode1 != nil || curNode2 != nil {
	// 	num1, num2 := 0, 0
	// 	if curNode1 != nil {
	// 		num1 = curNode1.Val
	// 		curNode1 = curNode1.Next
	// 	}

	// 	if curNode2 != nil {
	// 		num2 = curNode2.Val
	// 		curNode2 = curNode2.Next
	// 	}

	// 	total := num1 + num2 + prefix
	// 	prefix = total / 10
	// 	newNode := &ListNode{Val: total % 10}

	// 	if newHead == nil {
	// 		newHead = newNode
	// 	} else {
	// 		curNode.Next = newNode
	// 	}
	// 	curNode = newNode
	// }

	// if prefix != 0 {
	// 	curNode.Next = &ListNode{Val: prefix}
	// }

	// return reverseList(newHead)

	// 利用栈来解决
	stack1, stack2 := []int{}, []int{}
	cur1, cur2 := l1, l2

	for cur1 != nil || cur2 != nil {
		if cur1 != nil {
			stack1 = append(stack1, cur1.Val)
			cur1 = cur1.Next
		}
		if cur2 != nil {
			stack2 = append(stack2, cur2.Val)
			cur2 = cur2.Next
		}
	}

	var head *ListNode = nil
	var prefix int = 0

	for len(stack1) > 0 || len(stack2) > 0 || prefix > 0 {
		total := prefix
		if len(stack1) > 0 {
			total += stack1[len(stack1)-1]
			stack1 = stack1[:len(stack1)-1]
		}
		if len(stack2) > 0 {
			total += stack2[len(stack2)-1]
			stack2 = stack2[:len(stack2)-1]
		}

		node := &ListNode{Val: total % 10}
		node.Next = head
		head = node

		prefix = total / 10
	}

	return head
}
