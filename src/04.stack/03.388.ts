export function lengthLongestPath(input: string): number {
    // const list = input.split("\n");
    // // 利用前缀和
    // const levelTotals = [0];
    // let res = 0;
    // for (let i = 0; i < list.length; i++) {
    //     const item = list[i];
    //     let level = 0;

    //     while (item[level] === "\t") {
    //         level++;
    //     }

    //     const curTotal = item.length - level;

    //     // 实际在 levelTotals 中要往后一位
    //     level++;

    //     if (!item.includes(".")) {
    //         levelTotals[level] = levelTotals[level - 1] + curTotal + 1;
    //     } else {
    //         res = Math.max(res, levelTotals[level - 1] + curTotal);
    //     }
    // }

    // return res;

    const n = input.length;
    const levelTotals = [0];
    let res = 0;

    for (let i = 0; i < n;) {
        let level = 0;
        let j = i;
        let isDir = true;

        for (; j < n; j++) {
            if (input[j] === "\n") {
                break;
            }
            if (input[j] === "\t") {
                level++;
            }
            if (input[j] === ".") {
                isDir = false;
            }
        }

        const curTotal = j - i - level;
        level++;
        if (isDir) {
            levelTotals[level] = levelTotals[level - 1] + curTotal + 1;
        } else {
            res = Math.max(res, levelTotals[level - 1] + curTotal);
        }

        i = j + 1;
    }

    return res;
}
