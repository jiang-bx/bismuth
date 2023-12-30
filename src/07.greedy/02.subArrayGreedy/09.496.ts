export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    /**
    // 暴力解法
     const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        const cur = nums1[i];
        let next = -1;
        let hasNext = false;
        for (let j = 0; j < nums2.length; j++) {
            if (hasNext) {
                if (nums2[j] > cur) {
                    next = nums2[j];
                    break;
                }
            }

            if (cur === nums2[j]) {
                hasNext = true;
            }
        }
        ans.push(next);
    }

    return ans;
    */
    /**
     
    // 单调栈法, 从前往后入栈, 同时找到比其大的出栈, 并记录在 map 中
    const ans = [];
    const map = new Map();
    const stack = [];

    nums2.forEach((item) => {
        while (stack.length && item > stack[stack.length - 1]) {
            map.set(stack.pop(), item);
        }
        stack.push(item);
    });

    nums1.forEach((item) => {
        ans.push(map.has(item) ? map.get(item) : -1);
    });

    return ans;
     */

    const ans = [];
    const stack = [];
    const map = new Map<number, number>();
    const n = nums2.length;

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }
        map.set(nums2[i], stack.length ? stack[stack.length - 1] : -1);
        stack.push(nums2[i]);
    }

    for (let i = 0; i < nums1.length; i++) {
        ans.push(map.get(nums1[i]));
    }

    return ans;
}
