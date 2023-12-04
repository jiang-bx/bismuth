export function addBinary(a: string, b: string): string {
    /**
    // 暴力解法
    const m = a.length;
    const n = b.length;
    const base = "0".charCodeAt(0);

    let res = "";
    let curNum = 0;
    for (let i = m - 1, j = n - 1; i >= 0 || j >= 0; i--, j--) {
        let total = 0;
        if (i >= 0 && j >= 0) {
            total = a[i].charCodeAt(0) - base + b[j].charCodeAt(0) - base;
        } else if (i >= 0) {
            total = a[i].charCodeAt(0) - base;
        } else if (j >= 0) {
            total = b[j].charCodeAt(0) - base;
        }

        total += curNum;

        if (total >= 2) {
            curNum = 1;
            total = total % 2;
        } else {
            curNum = 0;
        }

        res = total + res;
    }

    if (curNum !== 0) {
        res = curNum + res;
    }

    return res;
     */

    /**
    // 二级制转 10 进制解法
    // return parseInt(parseInt(a, 2) + parseInt(b, 2) + "").toString(2);
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
     */

    // 健壮优化解法
    const base = "0".charCodeAt(0);
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = "";

    while (i >= 0 || j >= 0 || carry !== 0) {
        let curNumA = i >= 0 ? a[i].charCodeAt(0) - base : 0;
        let curNumB = j >= 0 ? b[j].charCodeAt(0) - base : 0;
        let total = curNumA + curNumB + carry;
        carry = total >= 2 ? 1 : 0;
        total %= 2;
        res = total + res;
        i--;
        j--;
    }

    return res;
}
