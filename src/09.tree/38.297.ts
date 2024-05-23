import { TreeNode } from "./01.100";

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
    const ans: string[] = [];
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            ans.push("null");
            return;
        }
        ans.push(node.val + "");
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);

    return ans.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
    const queue = data.split(",");
    const dfs = (arr: string[]): TreeNode | null => {
        const v = arr.shift();
        if (v === "null") {
            return null;
        }

        const node = new TreeNode(Number(v));
        node.left = dfs(arr);
        node.right = dfs(arr);
        return node;
    };

    return dfs(queue);
}
