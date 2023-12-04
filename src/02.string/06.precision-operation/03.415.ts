export function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let c = 0;
    let res = "";
    while (i >= 0 || j >= 0 || c !== 0) {
        let curNum1 = i >= 0 ? Number(num1[i]) : 0;
        let curNum2 = j >= 0 ? Number(num2[j]) : 0;
        let t = curNum1 + curNum2 + c;
        c = t >= 10 ? 1 : 0;
        t %= 10;
        res = t + res;
        i--;
        j--;
    }
    return res;
}
