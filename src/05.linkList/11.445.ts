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

export function addTwoNumbers2(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    // 翻转链表
    // const reverseList = (head: ListNode | null): ListNode | null => {
    //     let prevNode: ListNode | null = null;
    //     let curNode = head;

    //     while (curNode) {
    //         const next = curNode.next;
    //         curNode.next = prevNode;
    //         prevNode = curNode;
    //         curNode = next;
    //     }

    //     return prevNode;
    // };

    // const rL1 = reverseList(l1);
    // const rL2 = reverseList(l2);

    // let curNode1 = rL1;
    // let curNode2 = rL2;
    // let newHead: ListNode | null = null;
    // let curNode: ListNode | null = null;
    // let prefix = 0;
    // while (curNode1 || curNode2) {
    //     let num1 = 0;
    //     let num2 = 0;
    //     if (curNode1) {
    //         num1 = curNode1.val;
    //         curNode1 = curNode1.next;
    //     }

    //     if (curNode2) {
    //         num2 = curNode2.val;
    //         curNode2 = curNode2.next;
    //     }

    //     let total = num1 + num2 + prefix;
    //     prefix = Math.floor(total / 10);
    //     const newNode = new ListNode(total % 10);
    //     if (!newHead) {
    //         newHead = newNode;
    //     } else {
    //         curNode.next = newNode;
    //     }
    //     curNode = newNode;
    // }

    // if (prefix) {
    //     curNode.next = new ListNode(prefix);
    // }

    // return reverseList(newHead);

    // 利用栈来解决
    const s1: number[] = [];
    const s2: number[] = [];
    let cur1 = l1;
    let cur2 = l2;

    while (cur1 || cur2) {
        if (cur1) {
            s1.push(cur1.val);
            cur1 = cur1.next;
        }

        if (cur2) {
            s2.push(cur2.val);
            cur2 = cur2.next;
        }
    }

    let head: ListNode | null = null;
    let prefix = 0;
    while (s1.length || s2.length || prefix > 0) {
        let total = prefix;
        if (s1.length) {
            total += s1.pop();
        }
        if (s2.length) {
            total += s2.pop();
        }
        const node = new ListNode(total % 10);
        node.next = head;
        head = node;
        prefix = Math.floor(total / 10);
    }
    return head;
}
