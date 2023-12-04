// 1 <= digits.length <= 100

export function plusOne(digits: number[]): number[] {
    /**
    let curNum = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let total = digits[i] + curNum;
        if (total <= 9) {
            curNum = 0;
            digits[i] = total;
        } else {
            curNum = Math.floor(total / 10);
            digits[i] = total % 10;
        }
    }

    if (curNum !== 0) {
        digits.unshift(curNum);
    }

    return digits;
    */

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        // 超过了不超过 10, 前面的数字没必要继续加了
        if (digits[i] !== 0) {
            return digits;
        }
    }

    // 到这里表示, 数字全部为 9
    digits.unshift(1);
    return digits;
}
