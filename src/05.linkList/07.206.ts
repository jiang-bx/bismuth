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

export function reverseList(head: ListNode | null): ListNode | null {
    // 迭代
    // if (!head) {
    //     return head;
    // }

    // let curNode = head;
    // let prevNode = null;
    // while (curNode) {
    //     const next = curNode.next;
    //     curNode.next = prevNode;
    //     prevNode = curNode;
    //     curNode = next;
    // }

    // return prevNode;

    // 递归
    if (!head || !head.next) {
        return head;
    }
    
    const newHead = reverseList(head.next);
    // 先递后归, 当找到最后一个节点时, 才会依次执行下面的代码
    head.next.next = head;
    head.next = null;
    return newHead;
}
