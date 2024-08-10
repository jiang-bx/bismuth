export function removeInvalidParentheses1(s: string): string[] {
    const ans = new Set<string>();
    const n = s.length;
    let l = 0;
    let r = 0;
    for (const c of s) {
        if (c === "(") {
            l++;
        } else if (c === ")") {
            r++;
        }
    }
    const max = Math.min(l, r);
    let len = 0;

    const dfs = (r: number, cur: string, score: number) => {
        if (score < 0 || score > max) {
            return;
        }

        if (r === n) {
            if (score === 0 && cur.length >= len) {
                if (cur.length > len) {
                    ans.clear();
                }
                len = cur.length;
                ans.add(cur);
            }
            return;
        }

        const ch = s.charAt(r);

        if (ch === "(") {
            dfs(r + 1, cur + ch, score + 1);
            dfs(r + 1, cur, score);
        } else if (ch === ")") {
            dfs(r + 1, cur + ch, score - 1);
            dfs(r + 1, cur, score);
        } else {
            dfs(r + 1, cur + ch, score);
        }
    };

    dfs(0, "", 0);

    return Array.from(ans);
}

/**
 * 优化
 * @param s
 * @returns
 */
export function removeInvalidParentheses(s: string): string[] {
    const ans = new Set<string>();
    const n = s.length;
    let l = 0;
    let r = 0;
    let l1 = 0;
    let r1 = 0;
    for (const c of s) {
        if (c === "(") {
            l++;
            l1++;
        } else if (c === ")") {
            if (l !== 0) {
                l--;
            } else {
                r++;
            }
            r1++;
        }
    }
    const max = Math.min(l1, r1);
    const maxLen = n - l - r;

    /**
     * 深度优先搜索
     * @param r
     * @param cur
     * @param left 多余左括号
     * @param right 多余右括号
     * @param score 得分,
     * @returns
     */
    const dfs = (
        r: number,
        cur: string,
        left: number,
        right: number,
        score: number
    ) => {
        if (left < 0 || right < 0 || score < 0 || score > max) {
            return;
        }

        if (left === 0 && right === 0 && cur.length === maxLen) {
            ans.add(cur);
        }

        if (r === n) {
            return;
        }

        const ch = s.charAt(r);

        if (ch === "(") {
            // 添加左括号
            dfs(r + 1, cur + ch, left, right, score + 1);
            // 不添加左括号
            dfs(r + 1, cur, left - 1, right, score);
        } else if (ch === ")") {
            dfs(r + 1, cur + ch, left, right, score - 1);
            dfs(r + 1, cur, left, right - 1, score);
        } else {
            dfs(r + 1, cur + ch, left, right, score);
        }
    };

    dfs(0, "", l, r, 0);

    return Array.from(ans);
}
