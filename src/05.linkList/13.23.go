package linklist

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func MergeKLists(lists []*ListNode) *ListNode {
	// n := len(lists)
	// if n == 0 {
	// 	return nil
	// }
	// if n == 1 {
	// 	return lists[0]
	// }

	// merge := func(l1, l2 *ListNode) *ListNode {
	// 	head := &ListNode{Val: 0}
	// 	cur := head
	// 	for l1 != nil && l2 != nil {
	// 		if l1.Val > l2.Val {
	// 			cur.Next = l2
	// 			l2 = l2.Next
	// 		} else {
	// 			cur.Next = l1
	// 			l1 = l1.Next
	// 		}
	// 		cur = cur.Next
	// 	}
	// 	if l1 != nil {
	// 		cur.Next = l1
	// 	} else {
	// 		cur.Next = l2
	// 	}
	// 	return head.Next
	// }

	// var ans *ListNode = nil

	// for _, l := range lists {
	// 	ans = merge(ans, l)
	// }

	// return ans

	if len(lists) == 0 {
		return nil
	}

	return merge(lists, 0, len(lists)-1)
}

func merge(lists []*ListNode, left, right int) *ListNode {
	if left == right {
		return lists[left]
	}

	mid := left + (right-left)/2
	l1 := merge(lists, left, mid)
	l2 := merge(lists, mid+1, right)

	return merge2List(l1, l2)
}

func merge2List(l1, l2 *ListNode) *ListNode {
	head := &ListNode{Val: 0}
	cur := head
	for l1 != nil && l2 != nil {
		if l1.Val > l2.Val {
			cur.Next = l2
			l2 = l2.Next
		} else {
			cur.Next = l1
			l1 = l1.Next
		}
		cur = cur.Next
	}
	if l1 != nil {
		cur.Next = l1
	} else {
		cur.Next = l2
	}
	return head.Next
}
