import { ListNode } from "./11.83";

export function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (true) {
        // 无环, 直接返回
        if (fast == null || fast.next == null) {
            return null;
        }
        fast = fast.next.next;
        slow = slow.next;

        // 第一次相遇结束
        if (slow == fast) {
            break;
        }
    }

    // fast 从头开始
    fast = head;
    while (fast != slow) {
        slow = slow.next;
        fast = fast.next;
    }

    // 与 slow 相遇后, 就是进入的第一个节点
    return fast;
}
