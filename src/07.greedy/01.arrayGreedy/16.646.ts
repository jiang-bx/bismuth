export function findLongestChain(pairs: number[][]): number {
    const n = pairs.length;

    pairs.sort((a, b) => a[1] - b[1]);

    let pos = pairs[0][1];

    let res = 1;

    for (let i = 1; i < n; i++) {
        if (pos < pairs[i][0]) {
            res++;
            pos = pairs[i][1];
        }
    }

    return res;
}
