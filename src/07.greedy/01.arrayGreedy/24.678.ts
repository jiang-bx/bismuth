export function checkValidString(s: string): boolean {
    // 左括号的最小值 和 最大值
    let min = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            min++;
            max++;
        } else if (s[i] === ")") {
            min--;
            max--;
        } else {
            min--;
            max++;
        }

        // 最小值不能超出 0
        min = Math.max(min, 0);

        // 最大值小于最小值时, 不合法
        if (min > max) {
            return false;
        }
    }

    return min === 0;
}
