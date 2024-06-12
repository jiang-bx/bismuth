import { ListNode } from "../08.dbpointer/11.83";
import { TreeNode } from "./01.100";

export function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) {
        return null;
    }

    let l = 0;
    let h = head;
    while (head) {
        l++;
        head = head.next;
    }

    const build = (start: number, end: number) => {
        if (start > end) {
            return null;
        }
        const mid = Math.floor(start + (end - start) / 2);
        const left = build(start, mid - 1);
        const node = new TreeNode(h.val);
        h = h.next;
        node.left = left;
        node.right = build(mid + 1, end);
        return node;
    };

    return build(0, l - 1);
}
