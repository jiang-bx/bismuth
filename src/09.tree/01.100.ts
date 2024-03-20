export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function CreateTree(nums: number[]): TreeNode | null {
    // 从左向右, 从上到下
    if (!nums.length) {
        return null;
    }

    const nodes = nums.map((item) => new TreeNode(item));

    for (let i = 0; i < nodes.length / 2; i++) {
        const leftIndex = 2 * i + 1;
        const rightIndex = 2 * i + 2;
        if (leftIndex < nodes.length) {
            nodes[i].left = nodes[leftIndex];
            if (nodes[leftIndex].val === -Infinity) {
                nodes[i].left = null;
            }
        }
        if (rightIndex < nodes.length) {
            nodes[i].right = nodes[rightIndex];
            if (nodes[rightIndex].val === -Infinity) {
                nodes[i].right = null;
            }
        }
    }

    return nodes.length ? nodes[0] : null;
}

export function IsSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return IsSameTree(p.left, q.left) && IsSameTree(p.right, q.right);
}
