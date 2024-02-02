import { ListNode } from "./11.83";

export function deleteDuplicates1(head: ListNode | null): ListNode | null {
    let curNode = head;

    while (curNode && curNode.next) {
        if (curNode.val === curNode.next.val) {
            curNode.next = curNode.next.next;
        } else {
            curNode = curNode.next;
        }
    }

    return head;
}
