export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function CreateListNode(nums: number[]): ListNode | null {
    let head: ListNode | null = null;
    let lastNode: ListNode;

    for (const v of nums) {
        const node = new ListNode(v);
        if (!head) {
            head = node;
            lastNode = node;
        } else {
            lastNode.next = node;
        }
    }

    return head;
}

export function IsSameListNode(
    l1: ListNode | null,
    l2: ListNode | null
): boolean {
    if (l1 === null && l2 === null) {
        return true;
    }

    if (l1 === null || l2 === null || l1.val !== l2.val) {
        return false;
    }

    return IsSameListNode(l1.next, l2.next);
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    return new ListNode();
}
