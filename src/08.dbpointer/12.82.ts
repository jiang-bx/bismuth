import { ListNode } from "./11.83";

export function deleteDuplicates1(head: ListNode | null): ListNode | null {
    /**
     * p       c
     * x 1 1 1 2 3
     * |       |
     * --------|
     */

    // 创建哨兵节点
    const dummy = new ListNode(0);
    let pre = dummy;
    let cur = head;

    while (cur) {
        // 进入循环时，确保了 cur 不会与上一节点相同
        if (!cur.next || cur.val !== cur.next.val) {
            pre.next = cur;
            pre = cur;
        }

        // 跳过相同节点
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        cur = cur.next;
    }

    pre.next = null;

    return dummy.next;
}
