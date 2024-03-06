import { ListNode } from "./11.83";

export function partition(head: ListNode | null, x: number): ListNode | null {
    const lSen = new ListNode(0);
    const rSen = new ListNode(0);

    let curL = lSen;
    let curR = rSen;

    while (head) {
        if (head.val < x) {
            curL.next = head;
            curL = curL.next;
        } else {
            curR.next = head;
            curR = curR.next;
        }
        head = head.next;
    }

    curL.next = rSen.next;
    curR.next = null;

    return lSen.next;
}
