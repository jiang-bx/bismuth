export function candy(ratings: number[]): number {
    const n = ratings.length;
    const candyList: number[] = new Array(n).fill(0);

    candyList[0] = 1;

    // 右边的孩子评分比左边的孩子评分高
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candyList[i] = candyList[i - 1] + 1;
        } else {
            candyList[i] = 1;
        }
    }

    let count = candyList[n - 1];

    // 左边孩子比右边孩子评分高, 从后往前遍历
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candyList[i] = Math.max(candyList[i], candyList[i + 1] + 1);
        }
        count += candyList[i];
    }

    return count;
}
