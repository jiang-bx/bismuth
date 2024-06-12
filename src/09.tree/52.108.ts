import { TreeNode } from "./01.100";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
    const dfs = (left: number, right: number) => {
        if (left > right) {
            return null;
        }

        const mid = left + Math.floor((right - left) / 2);
        return new TreeNode(nums[mid], dfs(left, mid - 1), dfs(mid + 1, right));
    };

    return dfs(0, nums.length - 1);
}
