export function circularArrayLoop(nums: number[]): boolean {
    const n = nums.length;
    const next = (i: number) => {
        return (((i + nums[i]) % n) + n) % n;
    };

    for (let i = 0; i < n; i++) {
        let slow = i,
            fast = next(i);

        // 检查是否方向是否相同
        while (
            nums[fast] * nums[slow] > 0 &&
            nums[next(fast)] * nums[slow] > 0
        ) {
            if (fast === slow) {
                // 存在长度为 1 的同向环
                if (slow === next(slow)) {
                    break;
                } else {
                    return true;
                }
            }
            // 指针移动
            fast = next(next(fast));
            slow = next(slow);
        }
    }

    return false;
}
