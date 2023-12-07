/**
 * Do not return anything, modify nums in-place instead.
 */
export function wiggleSort(nums: number[]): void {
    /**
    // 反穿插解法
    const n = nums.length;

    let midIndex = Math.floor(n / 2);

    // 找到数组的中位数
    quickSelect(nums, 0, n, midIndex);

    const mid = nums[midIndex];
    let i = 0,
        j = 0,
        k = n - 1;

    while (j < k) {
        if (nums[j] > mid) {
            swap(nums, j, k);
            k--;
        } else if (nums[j] < mid) {
            swap(nums, j, i);
            i++;
            j++;
        } else {
            j++;
        }
    }

    if (n % 2) {
        midIndex++;
    }

    const temp1 = nums.slice(0, midIndex);
    const temp2 = nums.slice(midIndex);

    for (let i = 0; i < temp1.length; i++) {
        nums[2 * i] = temp1[temp1.length - 1 - i];
    }

    for (let i = 0; i < temp2.length; i++) {
        nums[2 * i + 1] = temp2[temp2.length - 1 - i];
    }
     */
    ///////
    /**
     // 排序 + 双指针
    const clone = [...nums];
    clone.sort((a, b) => a - b);

    // 双指针
    let left = Math.floor((nums.length - 1) / 2);
    let right = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = clone[left];
            left--;
        } else {
            nums[i] = clone[right];
            right--;
        }
    }
    */
    // 桶排序
    const bucket = new Array(5001).fill(0);
    nums.forEach((item) => {
        bucket[item]++;
    });

    let j = 5000;

    // 放较大的元素
    for (let i = 1; i < nums.length; i += 2) {
        while (bucket[j] == 0) {
            j--;
        }
        nums[i] = j;
        bucket[j]--;
    }

    // 放较小的元素
    for (let i = 0; i < nums.length; i += 2) {
        while (bucket[j] == 0) {
            j--;
        }
        nums[i] = j;
        bucket[j]--;
    }
}

/**
 * 快速选择, 将数组中第 k 个元素放在数组的第 k 个位置
 * 同时保证左侧元素不大于自身, 右侧元素不小于自身
 * @param nums
 * @param begin
 * @param end
 * @param k
 */
function quickSelect(nums: number[], begin: number, end: number, k: number) {
    let t = nums[end - 1];
    let i = begin;
    let j = begin;

    while (j < end) {
        if (nums[j] <= t) {
            swap(nums, i, j);
            i++;
            j++;
        } else {
            j++;
        }
    }

    if (i - 1 > k) {
        quickSelect(nums, begin, i - 1, k);
    } else if (i <= k) {
        quickSelect(nums, i, end, k);
    }
}

function swap(arr: number[], i: number, j: number) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
