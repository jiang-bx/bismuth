export function findClosestElements1(
    arr: number[],
    k: number,
    x: number
): number[] {
    // 找 k 个数
    // 最靠近 x (两数之差)

    // 先找到最靠近 x 的左区间 arr index
    let l = 0;
    let r = arr.length;
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (arr[mid] >= x) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    const xIndex = l;

    l = xIndex - 1;
    r = xIndex;

    const ans = [];

    while (r - l - 1 < k) {
        if (l === -1) {
            ans.push(arr[r]);
            r++;
        } else if (r === arr.length) {
            ans.unshift(arr[l]);
            l--;
        } else if (x - arr[l] > arr[r] - x) {
            ans.push(arr[r]);
            r++;
        } else {
            ans.unshift(arr[l]);
            l--;
        }
    }

    return ans;
}

// 双指针解法
export function findClosestElements2(
    arr: number[],
    k: number,
    x: number
): number[] {
    const n = arr.length;
    let l = 0;
    let r = n - 1;
    let removeNums = n - k;

    while (removeNums > 0) {
        if (x - arr[l] <= arr[r] - x) {
            r--;
        } else {
            l++;
        }
        removeNums--;
    }

    const ans = [];
    for (let i = l; i < l + k; i++) {
        ans.push(arr[i]);
    }

    return ans;
}

export function findClosestElements(
    arr: number[],
    k: number,
    x: number
): number[] {
    const n = arr.length;
    let l = 0;
    let r = n - k;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    const ans = [];
    for (let i = l; i < l + k; i++) {
        ans.push(arr[i]);
    }

    return ans;
}
