// k 从 1 开始
export function kthSmallest1(matrix: number[][], k: number): number {
    const n = matrix.length;
    const list: number[] = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            list.push(matrix[i][j]);
        }
    }
    list.sort((a, b) => a - b);
    return list[k - 1];
}

export function kthSmallest(matrix: number[][], k: number): number {
    const n = matrix.length;

    let l = matrix[0][0];
    let r = matrix[n - 1][n - 1];

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        let count = 0;
        let i = n - 1;
        let j = 0;
        while (i >= 0 && j < n) {
            if (matrix[i][j] <= mid) {
                count += i + 1;
                j++;
            } else {
                i--;
            }
        }

        if (count < k) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return r;
}
