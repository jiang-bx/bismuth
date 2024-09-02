export function isNumber(s: string): boolean {
    // 按照 e 分割, 左侧是整数或者浮点数, 右侧是整数

    // 判断是否是整数或者是浮点数
    // +/- 只能在头部
    // . 最对只出现一次
    // 至少存在一个数字

    const n = s.length;
    let idx = -1;

    const check = (start: number, end: number, mustInt: boolean) => {
        if (start > end) {
            return false;
        }

        if (s[start] === "+" || s[start] === "-") {
            start++;
        }

        let hasDot = false;
        let hasNum = false;

        for (let i = start; i <= end; i++) {
            if (s[i] === ".") {
                if (mustInt || hasDot) {
                    return false;
                }
                hasDot = true;
            } else if (
                s.charCodeAt(i) >= "0".charCodeAt(0) &&
                s.charCodeAt(i) <= "9".charCodeAt(0)
            ) {
                hasNum = true;
            } else {
                return false;
            }
        }

        return hasNum;
    };

    for (let i = 0; i < n; i++) {
        if (s[i] === "e" || s[i] === "E") {
            if (idx === -1) {
                idx = i;
            } else {
                return false;
            }
        }
    }

    let ans = true;

    if (idx != -1) {
        ans = check(0, idx - 1, false);
        if (!ans) {
            return false;
        }
        ans = check(idx + 1, n - 1, true);
    } else {
        ans = check(0, n - 1, false);
    }

    return ans;
}
