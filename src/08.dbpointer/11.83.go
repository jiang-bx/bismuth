package dbpointer

type ListNode struct {
	Val  int
	Next *ListNode
}

func IsSameList(l1 *ListNode, l2 *ListNode) bool {
	if l1 == nil && l2 == nil {
		return true
	}
	if l1 == nil || l2 == nil || l1.Val != l2.Val {
		return false
	}
	return IsSameList(l1.Next, l2.Next)
}

func CreateLintNode(nums []int) *ListNode {
	var head *ListNode
	var lastNode *ListNode

	for _, v := range nums {
		node := &ListNode{
			Val: v,
		}

		if head == nil {
			head = node
			lastNode = node
		} else {
			lastNode.Next = node
		}
	}

	return head
}

func DeleteDuplicates(head *ListNode) *ListNode {
	return head
}
