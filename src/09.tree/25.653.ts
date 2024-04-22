import { TreeNode } from "./01.100";

export function findTarget1(root: TreeNode | null, k: number): boolean {
    // 利用 hashMap
    const m = new Map<number, boolean>();

    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return false;
        }

        if (m.has(k - node.val)) {
            return true;
        }

        m.set(node.val, true);

        return dfs(node.left) || dfs(node.right);
    };

    return dfs(root);
}

export function findTarget(root: TreeNode | null, k: number): boolean {
    const list: number[] = [];

    const bts = (node: TreeNode | null) => {
        if (!node) {
            return;
        }

        bts(node.left);
        list.push(node.val);
        bts(node.right);
    };

    bts(root);

    // 应该 sort 下 list
    let l = 0;
    let r = list.length - 1;

    while (l < r) {
        const sum = list[l] + list[r];
        if (sum === k) {
            return true;
        } else if (sum > k) {
            r--;
        } else {
            l++;
        }
    }

    return false;
}
