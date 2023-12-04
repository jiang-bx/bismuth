export function myAtoi(s: string): number {
    let res = 0;
    let sign = 0;
    let numIndex = 0;
    let isNum = false;
    let hasNum = (c: string): boolean => {
        return c >= "0" && c <= "9";
    };

    for (let i = 0; i < s.length; i++) {
        if (!isNum) {
            if (s[i] === " ") {
                continue;
            } else if (hasNum(s[i]) || s[i] === "-" || s[i] === "+") {
                if (s[i] === "-" || s[i] === "+") {
                    sign = s[i] === "-" ? -1 : 1;
                } else {
                    res = s[i].charCodeAt(0) - 48;
                    if (sign === 0) sign = 1;
                }
                isNum = true;
                numIndex = i + 1;
            } else {
                break;
            }
        } else if (hasNum(s[i]) && numIndex === i) {
            res *= 10;
            res += s[i].charCodeAt(0) - 48;
            numIndex = i + 1;
        } else {
            break;
        }
    }

    res *= sign;

    if (res > 2147483647) {
        res = 2147483647;
    } else if (res < -2147483648) {
        res = -2147483648;
    }

    return res;
}
