import { ListNode } from "./01.203";

export function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    // let curNode = head;
    // let i = 0;
    // while (curNode.next) {
    //     curNode = curNode.next;
    //     i++;
    // }

    // const len = i;
    // const deleteIndex = len - (n - 1);
    // if (deleteIndex === 0) {
    //     head = head.next;
    //     return head;
    // }

    // curNode = head;
    // i = 0;

    // while (curNode.next) {
    //     if (deleteIndex - 1 === i) {
    //         curNode.next = curNode.next.next;
    //         break;
    //     } else {
    //         curNode = curNode.next;
    //     }
    //     i++;
    // }

    // return head;

    // 增加哨兵节点
    // const newHead = new ListNode(-1, head);
    // let curNode = newHead;
    // let i = 0;
    // while (curNode.next) {
    //     curNode = curNode.next;
    //     i++;
    // }

    // const len = i;
    // const deleteIndex = len - n;
    // curNode = newHead;
    // i = 0;
    // while (curNode.next) {
    //     if (deleteIndex === i) {
    //         curNode.next = curNode.next.next;
    //         break;
    //     } else {
    //         curNode = curNode.next;
    //     }
    //     i++;
    // }

    // return newHead.next;

    // 一次遍历, 快慢双指针
    const newHead = new ListNode(-1, head);
    let slowPoint = newHead;
    let fastPoint = newHead;

    for (let i = 0; i < n; i++) {
        fastPoint = fastPoint.next;
    }

    while (fastPoint.next) {
        slowPoint = slowPoint.next;
        fastPoint = fastPoint.next;
    }

    slowPoint.next = slowPoint.next.next

    return newHead.next;
}
