export function permuteUnique(nums: number[]): number[][] {
    const n = nums.length;
    const ans: number[][] = [];
    const onPath: number[] = [];
    const selected = new Array(n).fill(false);

    nums.sort((a, b) => a - b);

    const backtrack = () => {
        if (onPath.length === n) {
            ans.push([...onPath]);
            return;
        }

        for (let i = 0; i < n; i++) {
            /**
             * ! 上一个元素已经被使用过撤销掉了，当前元素与上一个元素相同就应该被剪枝
             * nums:     [1,      1,        2]
             * selected: [false, false, flase]
             * 
             * i = 1 && 1 === 1 && selected[i - 1] == false 时
             * 如果被选中, 在进入下一论时, 又会选择 nums[0] = 1
             * 那在这之前, 其实已经选择过了
             * 
             * ! 假设当前到达了元素 b ，那么前一个元素 a 一定是已经处理过了的，它的 selected[a]==true 理应成立。
             * 
             * ! 但如果 used[a]==false, 说明 nums[a] 已经被从当前组合集合中撤销掉了，这个false肯定是我们手动把它又重置为了false所导致的。
             * 
             * ! 既然说 nums[a] 被撤销，而现在 nums[b] 被选择，那也就是说：现在 nums[b] 被顶替在了之前 nums[a] 的位置上。如果 nums[a]==nums[b] ，那么当前组合结果和之前不撤销nums[a]的那个组合有什么区别？是没有区别的，这样就导致两个组合是重复的！这也就是我们需要剪枝去重的情况！
             */

            // 排除重复, 第二个元素 与 前一个元素相同,
            // 并且 前一个元素没有被选中时, 需要跳过
            if (i > 0 && nums[i] === nums[i - 1] && !selected[i - 1]) {
                continue;
            }

            if (selected[i]) {
                continue;
            }

            selected[i] = true;
            onPath.push(nums[i]);

            backtrack();

            selected[i] = false;
            onPath.pop();
        }
    };

    backtrack();

    return ans;
}
