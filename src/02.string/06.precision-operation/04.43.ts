import { addStrings } from "./03.415";

export function multiply(num1: string, num2: string): string {
    /**
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let res = "";

    for (let i = num1.length - 1; i >= 0; i--) {
        let curRes = "";
        for (let k = num1.length - 1 - i; k > 0; k--) {
            curRes += "0";
        }

        const curNum = Number(num1[i]);

        if (curNum === 0) {
            continue;
        }

        let prefix = 0;

        for (let j = num2.length - 1; j >= 0; j--) {
            const curNum2 = Number(num2[j]);
            let total = curNum * curNum2 + prefix;
            prefix = Math.floor(total / 10);
            total %= 10;
            curRes = total + curRes;
        }

        if (prefix !== 0) {
            curRes = prefix + curRes;
        }

        // 相加 curRes + res
        res = addStrings(res, curRes);
    }

    return res;
     */
    // 利用大数相乘
    // return (BigInt(num1) * BigInt(num2)).toString();
    /**
     * 易于计算机理解算法
     *
     *     1 2 3   --> j
     *       4 5   --> i
     * -----------
     *       1 5
     *     1 0
     *   0 5
     *     1 2
     *   0 8
     * 0 4
     * -------------
     * 0 5 5 3 5
     */

    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    const m = num1.length;
    const n = num2.length;
    const res = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const lowPos = i + j + 1;
            const total = parseInt(num1[i]) * parseInt(num2[j]);
            const sum = res[lowPos] + total;
            res[lowPos] = sum % 10;
            res[lowPos - 1] += Math.floor(sum / 10);
        }
    }

    let ans = "";
    let i = res[0] === 0 ? 1 : 0;
    for (; i < res.length; i++) {
        ans += res[i];
    }

    return ans;
}
