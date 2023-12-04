export function maximumSwap(num: number): number {
    const list: number[] = [];
    while (num) {
        list.push(num % 10);
        num = Math.floor(num / 10);
    }

    let ans = 0;
    const n = list.length;

    // idx[i]的含义：list中从索引i开始到末位组成的子数组中值最大的索引
    const idx = new Array(n).fill(0);

    for (let i = 0, j = 0; i < n; i++) {
        // 记录 idx 时记录的最大值的索引，
        // 若有多个相同的最大值，则应记录最后一个，以获得交换后的值为最大
        if (list[i] > list[j]) {
            j = i;
        }
        idx[i] = j;
    }

    for (let i = n - 1; i >= 0; i--) {
        if (list[idx[i]] != list[i]) {
            let c = list[idx[i]];
            list[idx[i]] = list[i];
            list[i] = c;
            break;
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        ans = ans * 10 + list[i];
    }

    return ans;
}
