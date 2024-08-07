export function addOperators(num: string, target: number): string[] {
    const ans: string[] = [];
    const n = num.length;
    const backtrack = (start: number, pre: number, cur: number, s: string) => {
        if (start === n) {
            if (cur === target) {
                ans.push(s);
            }
            return;
        }

        for (let i = start; i < n; i++) {
            if (i > start && num[start] == "0") {
                break;
            }

            const val = num.slice(start, i + 1);
            const t = Number(val);

            if (start === 0) {
                backtrack(i + 1, t, t, val);
            } else {
                backtrack(i + 1, t, cur + t, s + "+" + val);
                backtrack(i + 1, -t, cur - t, s + "-" + val);

                // * 有优先计算的权利
                backtrack(i + 1, pre * t, cur - pre + pre * t, s + "*" + val);
            }
        }
    };

    backtrack(0, 0, 0, "");

    return ans;
}
