/**
 * 二进制枚举法
 * @param turnedOn
 * @returns
 */
export function readBinaryWatch1(turnedOn: number): string[] {
    const ans: string[] = [];
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            // h.toString(2) 转为 2 进制
            // 判断该 2 进制数中有几个 1
            if (
                h.toString(2).split("0").join("").length +
                    m.toString(2).split("0").join("").length ===
                turnedOn
            ) {
                ans.push(h + ":" + (m < 10 ? "0" : "") + m);
            }
        }
    }
    return ans;
}

/**
 * 回溯法
 * @param turnedOn
 * @returns
 */
export function readBinaryWatch(turnedOn: number): string[] {
    const ans: string[] = [];

    const backtrack = (
        h: number,
        m: number,
        num: number,
        hour: number[],
        minutes: number[],
        isHour: Boolean
    ) => {
        if (num === 0) {
            ans.push(h + ":" + (m < 10 ? "0" : "") + m);
            return;
        }

        if (isHour) {
            hour.forEach((_h, i) => {
                if (h + _h < 12) {
                    backtrack(
                        h + _h,
                        m,
                        num - 1,
                        hour.slice(i + 1),
                        minutes,
                        true
                    );
                }
            });
        }

        minutes.forEach((_m, i) => {
            if (m + _m < 60) {
                backtrack(
                    h,
                    m + _m,
                    num - 1,
                    hour,
                    minutes.slice(i + 1),
                    false
                );
            }
        });
    };

    backtrack(0, 0, turnedOn, [1, 2, 4, 8], [1, 2, 4, 8, 16, 32], true);

    return ans;
}
