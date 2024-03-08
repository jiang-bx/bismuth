import { ListNode } from "./11.83";

export function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
): ListNode | null {
    //    4, 1, 8, 4, 5
    // 5, 6, 1, 8, 4, 5

    if (!headA || !headB) {
        return null;
    }

    let pA = headA;
    let pB = headB;

    // 如果 pA 和 pB 都为 null 时, 表示不相交

    while (pA != pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }

    return pA;
}
