export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    add(node: ListNode) {
        this.next = node;
    }
}

export const createLinkedNode = (list: number[]): ListNode => {
    let linkedNode: ListNode | null = null;
    let lastNode: ListNode | null = null;
    list.forEach((item) => {
        const curNode = new ListNode(item);
        if (!linkedNode) {
            linkedNode = curNode;
        } else {
            lastNode.add(curNode);
        }
        lastNode = curNode;
    });

    return linkedNode;
};

export function removeElements(
    head: ListNode | null,
    val: number
): ListNode | null {
    let newHead = new ListNode(-1, head);
    let curNode = newHead;
    while (curNode.next) {
        if (curNode.next.val === val) {
            curNode.next = curNode.next.next;
        } else {
            curNode = curNode.next;
        }
    }

    return newHead.next;
}
