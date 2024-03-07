import { ListNode } from "./11.83";

// 注意是根据链表的索引排列, 而不是链表的值
export function oddEvenList(head: ListNode | null): ListNode | null {
    /**
     * 解法 1: 分两列
    const oddSen = new ListNode(0);
    let odd = oddSen;
    const evenSen = new ListNode(0);
    let even = evenSen;

    let i = 1;

    while (head) {
        if (i % 2 === 0) {
            even.next = head;
            even = even.next;
        } else {
            odd.next = head;
            odd = odd.next;
        }
        head = head.next;
        i++;
    }

    odd.next = evenSen.next;
    even.next = null;

    return oddSen.next;
     */

    // 优化解法 1

    if (!head || !head.next) {
        return head;
    }

    // 1 -> 2 -> 3 -> 4 -> 5
    // o    e
    // |---------|o
    //      |---------|e
    // 依次类推

    let odd = head;
    let even = head.next;
    let dum = even;

    while (even?.next) {
        odd.next = even.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    odd.next = dum;
    return head;
}
