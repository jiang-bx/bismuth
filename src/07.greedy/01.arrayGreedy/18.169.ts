export function majorityElement(nums: number[]): number {
    /**
    //  笨办法
    const n = nums.length;
    const m = {};
    for (let i = 0; i < n; i++) {
        if (!m[nums[i]]) {
            m[nums[i]] = 1;
        } else {
            m[nums[i]]++;
        }
    }

    let max = -Infinity;
    let maxK = 0;
    for (let k in m) {
        if (m[k] > n / 2) {
            if (m[k] > max) {
                max = m[k];
                maxK = Number(k);
            }
        }
    }

    return maxK;
     
     */

    // 摩尔投票法, 满足 时间复杂度 O(n), 空间复杂度 O(1)
    let candNum = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        // 票数为 0
        if (count === 0) {
            // 切换元素
            candNum = nums[i];
        }

        // 如果元素相同, 票数 +1, 反之票数 -1
        if (candNum === nums[i]) {
            count += 1;
        } else {
            count -= 1;
        }
    }

    return candNum;
}
