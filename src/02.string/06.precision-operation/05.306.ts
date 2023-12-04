// 一个累加序列至少包含 3 个数
// 前两个数以外, 序列中的每个后续数字必须是它之前两个数字之和
// 1 99 100 199
// 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
// 难点在于如何确定 第一与第二个数

const add = (num1: string, num2: string): string => {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let c = 0;
    let res = "";

    while (i >= 0 || j >= 0 || c !== 0) {
        const t1 = i >= 0 ? Number(num1[i]) : 0;
        const t2 = j >= 0 ? Number(num2[j]) : 0;
        let total = t1 + t2 + c;
        c = total >= 10 ? 1 : 0;
        total %= 10;
        res = total + res;
        i--;
        j--;
    }

    return res;
};

const isValid = (num: string, i: number, j: number, k: number): boolean => {
    // 已 0 开头, 且不为 0 的数字字符串不能作为数字
    if (num[i] === "0" && j !== i + 1) {
        return false;
    }
    if (num[j] === "0" && k !== j + 1) {
        return false;
    }

    const n = num.length;

    const num1 = num.substring(i, j);
    const num2 = num.substring(j, k);

    const sum = add(num1, num2);
    const sumLen = sum.length;

    // 前两位数之和, 大于剩余数字字符的位数, 不符合
    if (sumLen + k > n) {
        return false;
    }

    // 后面的数字字符串从 k 开始遍历
    for (let s = k; s <= k - 1 + sumLen; s++) {
        if (num[s] !== sum[s - k]) {
            return false;
        }
    }

    // 如果剩余的数字字符串正好匹配完就返回 true
    if (sumLen + k === n) {
        return true;
    }

    // num2 变为 num1, sum 变为 num2 继续递归判断
    return isValid(num, j, k, sumLen + k);
};

export function isAdditiveNumber(num: string): boolean {
    const n = num.length;
    if (n < 3) {
        return false;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isValid(num, 0, i, j)) {
                return true;
            }
        }
    }
    return false;
}
