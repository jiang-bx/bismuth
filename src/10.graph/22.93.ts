export function restoreIpAddresses(s: string): string[] {
    const ans: string[] = [];
    const onPath: string[] = [];
    const n = s.length;
    const backtrack = (r: number) => {
        // 结束条件, 当 r === n 时,说明走到了最后
        if (r === n && onPath.length === 4) {
            ans.push(onPath.join("."));
            return;
        }

        for (let i = r; i < n; i++) {
            const end = onPath.length === 3 ? n : i + 1;
            const val = s.slice(r, end);

            // val 不能有 前导 0 并且不能大于 255,
            if (Number(val) > 255 || (val.length >= 2 && val[0] === "0")) {
                break;
            }

            onPath.push(val);
            backtrack(i + 1);
            onPath.pop();
        }
    };

    backtrack(0);

    return ans;
}
