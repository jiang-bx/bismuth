export function searchMatrixII(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;

    let l1 = 0;
    let r1 = m - 1;

    while (l1 <= r1) {
        const mid1 = l1 + Math.floor((r1 - l1) / 2);

        // 判断 target 是否在 当前行中
        if (target < matrix[mid1][0]) {
            r1 = mid1 - 1;
        } else if (target > matrix[mid1][n - 1]) {
            l1 = mid1 + 1;
        } else {
            let l2 = 0;
            let r2 = n - 1;

            while (l2 <= r2) {
                const mid2 = l2 + Math.floor((r2 - l2) / 2);

                if (target === matrix[mid1][mid2]) {
                    return true;
                }

                if (target > matrix[mid1][mid2]) {
                    l2 = mid2 + 1;
                } else {
                    r2 = mid2 - 1;
                }
            }

            return false;
        }
    }

    return false;
}
