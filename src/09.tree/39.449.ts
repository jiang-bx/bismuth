import { TreeNode } from "./01.100";

/*
 * Encodes a tree to a single string.
 */
export function serialize449(root: TreeNode | null): string {
    if (!root) {
        return "";
    }
    return root.val + " " + serialize449(root.left) + serialize449(root.right);
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize449(data: string): TreeNode | null {
    if (!data.length) {
        return null;
    }

    data = data.slice(0, -1);

    const arr = data.split(" ");
    const insert = (node: TreeNode | null, val: number): TreeNode | null => {
        if (!node) {
            return new TreeNode(val);
        } else if (val > node.val) {
            node.right = insert(node.right, val);
        } else {
            node.left = insert(node.left, val);
        }

        return node;
    };

    let root: TreeNode | null = null;
    arr.forEach((item) => {
        const v = Number(item);
        root = insert(root, v);
    });

    return root;
}
