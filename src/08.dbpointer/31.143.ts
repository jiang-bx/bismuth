import { ListNode } from "./11.83";

export function reorderList(head: ListNode | null): void {
    if (!head || !head.next || !head.next.next) {
        return
    } 

    // 找到中间节点, 用快慢指针
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // 后半部分结点
    let lastHead = slow.next;

    slow.next = null;

    // 倒置 后半部分链表
    // 4 - 5 - 6
    // 6 - 5 - 4
    let prevNode = lastHead;
    let nextNode = lastHead.next;
    prevNode.next = null;

    while (nextNode) {
        let temp = nextNode.next;
        nextNode.next = prevNode;
        prevNode = nextNode;
        nextNode = temp;
    }

    lastHead = prevNode;

    // 开始合并, lastHead 和 head
    // 1 - 2 - 3
    // 5 - 4
    while (lastHead) {
        const temp = lastHead.next; // 4
        lastHead.next = head.next; // 5 - 2
        head.next = lastHead; // 1 - 5
        head = lastHead.next; // 1
        lastHead = temp; // 4
        // 1 - 5 - 2
        // head: 2 - 3 last: 4
    }
}
