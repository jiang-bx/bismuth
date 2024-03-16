import { ListNode } from "./11.83";

export function isPalindrome(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;
    let cur: ListNode | null = null;
    let prev: ListNode | null = null;

    while (fast && fast.next) {
        cur = slow;

        slow = slow.next;
        fast = fast.next.next;

        // 翻转链表
        cur.next = prev;
        prev = cur;
    }

    // 奇数结点跳过
    if (fast) {
        slow = slow.next;
    }

    while (cur) {
        if (cur.val !== slow.val) {
            return false;
        }
        cur = cur.next;
        slow = slow.next;
    }

    return true;
}
