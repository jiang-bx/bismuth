package dbpointer

func GetIntersectionNode(headA, headB *ListNode) *ListNode {
	if headA == nil || headB == nil {
		return nil
	}

	pA := headA
	pB := headB

	// 在第二轮时 pA, 与 pB 会在相同的节点相遇

	for pA != pB {
		if pA == nil {
			// 如果 a 走到末尾时, 指向 b
			pA = headB
		} else {
			pA = pA.Next
		}

		// b 同理,
		if pB == nil {
			pB = headA
		} else {
			pB = pB.Next
		}
	}

	return pA
}
