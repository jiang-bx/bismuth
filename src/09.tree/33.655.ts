import { TreeNode } from "./01.100";

export function printTree(root: TreeNode | null): string[][] {
    /**
     * 树的 高度 为 height ，矩阵的行数 m 应该等于 height + 1 。
     * 矩阵的列数 n 应该等于 2^(height+1) - 1 。
     * 根节点 需要放置在 顶行 的 正中间 ，对应位置为 res[0][(n-1)/2] 。
     * 对于放置在矩阵中的每个节点，设对应位置为 res[r][c] ，
     * 将其左子节点放置在 res[r+1][c-2^(height-r-1)] ，
     * 右子节点放置在 res[r+1][c+2^(height-r-1)] 。
     */

    // 求出 height
    let height = 0;
    const getHeight = (root: TreeNode | null, h: number) => {
        if (!root) {
            return;
        }

        h++;
        height = Math.max(height, h);

        getHeight(root.left, h);
        getHeight(root.right, h);
    };

    getHeight(root, 0);

    height--;

    // 行数
    const m = height + 1;
    // 列数
    const n = Math.pow(2, height + 1) - 1;

    // 开始构造 数组
    const ans: string[][] = new Array(m).fill([]).map(() => {
        return new Array(n).fill("");
    });

    const fillAns = (node: TreeNode | null, r: number, c: number) => {
        const val = node ? node.val + "" : "";
        ans[r][c] = val;
        const k = Math.pow(2, height - r - 1)

        if (node.left) {
            fillAns(node.left, r + 1, c - k);
        }

        if (node.right) {
            fillAns(node.right, r + 1, c + k);
        }
    };

    fillAns(root, 0, Math.floor((n - 1) / 2));

    return ans;
}
