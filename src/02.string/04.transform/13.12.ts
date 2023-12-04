export function intToRoman(num: number): string {
    /**
    let res = "";
    if (num >= 1000) {
        num = num - 1000;
        res = "M";
        res += intToRoman(num);
    } else if (num >= 500) {
        // 999 ~ 500
        if (num >= 900) {
            num = num - 900;
            res = "CM";
            res += intToRoman(num);
        } else {
            num = num - 500;
            res = "D";
            res += intToRoman(num);
        }
    } else if (num >= 100) {
        // 499 ~ 100
        if (num >= 400) {
            num = num - 400;
            res = "CD";
            res += intToRoman(num);
        } else {
            num = num - 100;
            res = "C";
            res += intToRoman(num);
        }
    } else if (num >= 50) {
        // 99 ~ 50
        if (num >= 90) {
            num = num - 90;
            res = "XC";
            res += intToRoman(num);
        } else {
            num = num - 50;
            res = "L";
            res += intToRoman(num);
        }
    } else if (num >= 10) {
        // 49 ~ 10
        if (num >= 40) {
            num = num - 40;
            res = "XL";
            res += intToRoman(num);
        } else {
            num = num - 10;
            res = "X";
            res += intToRoman(num);
        }
    } else if (num >= 5) {
        // 9 ~ 5
        if (num >= 9) {
            num = num - 9;
            res = "IX";
            res += intToRoman(num);
        } else {
            num -= 5;
            res = "V";
            res += intToRoman(num);
        }
    } else if (num >= 1) {
        // 4 ~ 1
        if (num >= 4) {
            num -= 4;
            res = "IV";
            res += intToRoman(num);
        } else {
            num -= 1;
            res = "I";
            res += intToRoman(num);
        }
    }
    return res;
     */

    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const values = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];

    let res = "";
    for (let i = 0, n = nums.length; i < n; i++) {
        while (num >= nums[i]) {
            res += values[i];
            num -= nums[i];
        }
        if (num === 0) {
            break;
        }
    }

    return res;
}
