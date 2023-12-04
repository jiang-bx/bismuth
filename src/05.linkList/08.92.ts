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

export function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
): ListNode | null {
    // 暴力解法
    // let i = 1;
    // let curNode = head;
    // let prevNode = null;
    // let lastNode = null;
    // let startNode = null;
    // let endNode = null;
    // let newHead = head;

    // while (curNode) {
    //     if (i >= left && i <= right) {
    //         if (i === left) {
    //             lastNode = curNode;
    //         }
    //         // 交换
    //         const next = curNode.next;
    //         curNode.next = prevNode;
    //         prevNode = curNode;
    //         curNode = next;
    //     } else {
    //         if (i === left - 1) {
    //             startNode = curNode;
    //         } else if (i === right + 1) {
    //             endNode = curNode;
    //         }
    //         curNode = curNode.next;
    //     }

    //     i++;
    // }

    // if (startNode) {
    //     startNode.next = prevNode;
    // } else {
    //     newHead = prevNode;
    // }

    // if (lastNode) {
    //     lastNode.next = endNode;
    // }

    // return newHead;

    // 一次遍历
    const newHead = new ListNode(-1, head);
    let startNode = newHead;
    for (let i = 0; i < left - 1; i++) {
        startNode = startNode.next;
    }

    let prevNode = null;
    let curNode = startNode.next;
    for (let i = 0; i < right - left + 1; i++) {
        const next = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = next;
    }
    // startNode.next.next 表示翻转后的尾结点
    startNode.next.next = curNode;
    startNode.next = prevNode;

    return newHead.next;
}
