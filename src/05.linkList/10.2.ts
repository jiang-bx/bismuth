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

export function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let curNode1 = l1;
    let curNode2 = l2;
    let prefix = 0;
    let newHead: ListNode | null = null;
    let curNode: ListNode | null = null;
    while (curNode1 || curNode2) {
        let num1 = 0;
        if (curNode1) {
            num1 = curNode1.val;
            curNode1 = curNode1.next;
        }

        let num2 = 0;
        if (curNode2) {
            num2 = curNode2.val;
            curNode2 = curNode2.next;
        }

        let total = num1 + num2 + prefix;
        let value = total % 10;
        prefix = Math.floor(total / 10);

        let newNode = new ListNode(value);
        if (!newHead) {
            newHead = newNode;
        } else {
            curNode.next = newNode;
        }
        curNode = newNode;
    }

    if (prefix) {
        curNode.next = new ListNode(prefix);
    }

    return newHead;
}
