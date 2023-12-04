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

export function swapPairs(head: ListNode | null): ListNode | null {
    // 暴力解法
    // let curNode = head;
    // let pervNode = head;
    // let newHead = head;
    // let parentNode: ListNode | null = null;
    // let i = 0;
    // while (curNode) {
    //     i++;
    //     if (i % 2 === 1) {
    //         pervNode = curNode;
    //     } else {
    //         const next = curNode.next;
    //         pervNode.next = next;
    //         curNode.next = pervNode;

    //         if (!parentNode) {
    //             newHead = curNode;
    //         } else {
    //             parentNode.next = curNode;
    //         }

    //         curNode = pervNode;
    //         parentNode = curNode;
    //     }
    //     curNode = curNode.next;
    // }

    // return newHead;

    // 递归解法
    // if (!head || !head.next) {
    //     return head;
    // }

    // const next = head.next;
    // head.next = swapPairs(next.next);
    // next.next = head;
    // return next;

    // 非递归解法
    const newHead = new ListNode(-1, head);
    let curNode = newHead;

    while (curNode.next && curNode.next.next) {
        const start = curNode.next;
        const end = curNode.next.next;
        curNode.next = end;
        start.next = end.next;
        end.next = start;
        curNode = start;
    }

    return newHead.next;
}
