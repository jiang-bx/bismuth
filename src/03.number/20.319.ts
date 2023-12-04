export function bulbSwitch(n: number): number {
    /** 模拟过程, 暴力求解, 肯定会超时
    const arr = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((j + 1) % (i + 1) === 0) {
                arr[j] = arr[j] ? 0 : 1;
            }
        }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 1) {
            count++;
        }
    }

    return count;
     */

    // 求 n 的开平方根
    return Math.floor(Math.sqrt(n));
}
