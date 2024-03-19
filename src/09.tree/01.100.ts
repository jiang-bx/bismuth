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
        if (2 * i + 1 < nodes.length && nodes[2 * i + 1].val !== -Infinity) {
            nodes[i].left = nodes[2 * i + 1];
        }
        if (2 * i + 2 < nodes.length && nodes[2 * i + 1].val !== -Infinity) {
            nodes[i].right = nodes[2 * i + 2];
        }
    }

    return nodes[0];
}

export function IsSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return false;
}
