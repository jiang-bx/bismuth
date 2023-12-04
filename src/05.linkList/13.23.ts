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

const merge2List = (
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null => {
    let head = new ListNode(-1);
    let cur = head;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            cur.next = l2;
            l2 = l2.next;
        } else {
            cur.next = l1;
            l1 = l1.next;
        }
        cur = cur.next;
    }

    cur.next = l1 ? l1 : l2;

    return head.next;
};

const merge = (
    lists: Array<ListNode | null>,
    left: number,
    right: number
): ListNode | null => {
    if (left === right) {
        return lists[left];
    }

    let mid = left + Math.floor((right - left) / 2);

    const l1 = merge(lists, left, mid);
    const l2 = merge(lists, mid + 1, right);

    return merge2List(l1, l2);
};

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 两两合并
    if (lists.length === 0) {
        return null;
    }

    return merge(lists, 0, lists.length - 1);
}
