/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./01.203";

export function reverseKGroup(
    head: ListNode | null,
    k: number
): ListNode | null {
    const newHead = new ListNode(-1, head);

    let prevNode = newHead;
    let endNode = newHead;

    while (endNode.next) {
        for (let i = 0; i < k && endNode; i++) {
            endNode = endNode.next;
        }
        if (!endNode) {
            break;
        }

        const start = prevNode.next;
        const next = endNode.next;

        endNode.next = null;

        // 翻转 start -> endNode
        let prev = null;
        let curNode = start;
        while (curNode) {
            const temp = curNode.next;
            curNode.next = prev;
            prev = curNode;
            curNode = temp;
        }

        prevNode.next = prev;
        start.next = next;
        prevNode = start;
        endNode = prevNode;
    }

    return newHead.next;
}
