import { TreeNode } from "./01.100";

export class BSTIterator {
    list: number[];
    index: number;
    constructor(root: TreeNode | null) {
        this.list = [];
        this.index = 0;
        this.dfs(root);
    }

    dfs(node: TreeNode | null) {
        if (!node) {
            return;
        }

        this.dfs(node.left);
        this.list.push(node.val);
        this.dfs(node.right);
    }

    next(): number {
        return this.list[this.index++];
    }

    hasNext(): boolean {
        return this.index < this.list.length;
    }
}
