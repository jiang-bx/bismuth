import { TreeNode } from "./01.100";

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    // 找到 nums 中最大的值,  分左右两个 nums
    // let maxIndex = -1;
    // let max = -Infinity;

    // nums.forEach((item, index) => {
    //     if (item > max) {
    //         max = item;
    //         maxIndex = index;
    //     }
    // });

    // if (maxIndex === -1) {
    //     return null;
    // }

    // const root = new TreeNode(max);

    // const numsL = nums.slice(0, maxIndex);
    // const numsR = nums.slice(maxIndex + 1);

    // root.left = constructMaximumBinaryTree(numsL);
    // root.right = constructMaximumBinaryTree(numsR);

    // return root;

    // 优化查找时间
    // const build = (nums: number[], l: number, r: number) => {
    //     if (l > r) {
    //         return null;
    //     }

    //     let idx = l;
    //     for (let i = l; i <= r; i++) {
    //         if (nums[i] > nums[idx]) {
    //             idx = i;
    //         }
    //     }
    //     const root = new TreeNode(nums[idx]);
    //     root.left = build(nums, l, idx - 1);
    //     root.right = build(nums, idx + 1, r);

    //     return root;
    // };

    // return build(nums, 0, nums.length - 1);

    // 单调栈法
    // 3, 2, 1, 6, 0, 5
    /**
     * 1
     * 2.r -> 1
     * 3.r -> 2
     */

    // 6 进入之后 变为这样
    /**
     * 6.l -> 3.r -> 2.l -> 1
     */

    // 0 进入
    /**
     * 6.l -> 3.r -> 2.l -> 1.r
     *  .r -> 0
     */

    // 5 进入
    /**
     * 6.l -> 3.r -> 2.l -> 1.r
     *  .r -> 5.l -> 0
     */

    const stack: TreeNode[] = [];
    for (const x of nums) {
        const node = new TreeNode(x);
        while (stack.length && x > stack[stack.length - 1].val) {
            node.left = stack.pop();
        }
        if (stack.length) {
            stack[stack.length - 1].right = node;
        }
        stack.push(node);
    }
    return stack[0];
}
