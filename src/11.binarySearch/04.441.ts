export function arrangeCoins1(n: number): number {
    let k = 1;
    while (n > k) {
        n -= k;
        k++;
    }

    if (n !== k) {
        k--;
    }

    return k;
}

export function arrangeCoins(n: number): number {
    // 前 k 个完整阶梯所需的硬币数量为: k * (k + 1) / 2

    let l = 1;
    let r = n;

    // while (l < r) {
    //     const mid = l + Math.floor((r - l + 1) / 2);
    //     if (mid * (mid + 1) <= 2 * n) {
    //         l = mid;
    //     } else {
    //         r = mid - 1;
    //     }
    // }

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        const res = (mid * (mid + 1)) / 2;

        if (res == n) {
            return mid;
        } else if (res > n) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return l - 1;
}
