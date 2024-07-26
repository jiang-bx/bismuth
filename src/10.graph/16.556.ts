export function nextGreaterElement(n: number): number {
    let ans = -1;
    const nums = n
        .toString()
        .split("")
        .map((item) => Number(item));

    const l = nums.length;

    if (l <= 1) {
        return ans;
    }

    let i = l - 2;
    let j = l - 1;
    let k = l - 1;

    // ! 1. 倒序找到第一组升序值
    while (i >= 0 && nums[i] >= nums[j]) {
        i--;
        j--;
    }

    // ! 2. 找到了, 倒序找到第一个比 i 大的值 k
    if (i >= 0) {
        while (nums[i] >= nums[k]) {
            k--;
        }

        [nums[i], nums[k]] = [nums[k], nums[i]];
    }

    // ! 3. 不管找没找到, 都需交换 j 之后的值
    for (let i = j, m = l - 1; i < m; i++, m--) {
        [nums[i], nums[m]] = [nums[m], nums[i]];
    }

    ans = 0;
    nums.forEach((item) => {
        ans = ans * 10 + item;
    });

    if (ans > Math.pow(2, 31) - 1 || ans <= n) {
        return -1;
    }

    return ans;
}
