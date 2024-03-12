import { ListNode } from "./11.83";

export function hasCycle(head: ListNode | null): boolean {
    //     -----
    //    |     |
    // 3, 2, 0, 4
    // f
    // l
    // ------------
    //       f
    //    l  --------
    // ------------  |
    //    f  --------    
    //       l 

    let slow = head
    let fast = head

    while (fast) {
        fast = fast.next
        if (fast) {
            fast = fast.next
        }

        if (fast == slow) {
            return true
        }
        slow = slow.next
    }

    return false;
}
