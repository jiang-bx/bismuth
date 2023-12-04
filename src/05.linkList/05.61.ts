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

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // 暴力解法
    // let len = 0;
    // let curNode = head;
    // let lastNode = null
    // while (curNode) {
    //     if (curNode.next) {
    //         lastNode = curNode.next
    //     }
    //     curNode = curNode.next;
    //     len++;
    // }
    // k %= len;
    // if (!head || len === 1 || k === 0) {
    //     return head;
    // }

    // curNode = head;
    // for (let i = 1; i < len - k; i++) {
    //     curNode = curNode.next;
    // }

    // let newHead = curNode.next;
    // curNode.next = null;
    // lastNode.next = head;

    // return newHead;

    // 优化, 成为环
    if (!head || !head.next) {
        return head;
    }

    let len = 1;
    let curNode = head;
    while (curNode.next) {
        curNode = curNode.next;
        len++;
    }
    // 组成环
    curNode.next = head;

    let m = len - (k % len);
    while (m > 0) {
        curNode = curNode.next;
        m--;
    }
    let newHead = curNode.next;
    curNode.next = null;

    return newHead;
}
