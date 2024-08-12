export function findMinStep(board: string, hand: string): number {
    const m = hand.length;
    const p = {};

    const dfs = (a: string, cur: number): number => {
        if (a.length === 0) {
            return 0;
        }

        const key = a + "_" + cur;

        if (p[key]) {
            return p[key];
        }

        const n = a.length;
        let res = Infinity;

        for (let i = 0; i < m; i++) {
            if (((cur >> i) & 1) === 1) {
                continue;
            }

            const next = (1 << i) | cur;

            for (let j = 0; j <= n; j++) {
                let ok = false;
                if (
                    j > 0 &&
                    j < n &&
                    a.charAt(j - 1) === a.charAt(j) &&
                    a.charAt(j - 1) != board.charAt(i)
                ) {
                    ok = true;
                }

                if (j < n && a.charAt(j) == board.charAt(i)) {
                    ok = true;
                }

                if (!ok) {
                    continue;
                }

                let sb = a.slice(0, j) + hand.slice(i, i + 1);
                if (j != n) {
                    sb += a.slice(j);
                }

                let k = j;

                while (k >= 0 && k < sb.length) {
                    const c = sb.charAt(k);
                    let l = k;
                    let r = k;

                    while (l >= 0 && sb.charAt(l) === c) {
                        l--;
                    }

                    while (r < sb.length && sb.charAt(r) === c) {
                        r++;
                    }

                    if (r - l - 1 >= 3) {
                        sb = sb.slice(0, l + 1) + sb.slice(r);
                        k = l >= 0 ? l : r;
                    } else {
                        break;
                    }
                }
                res = Math.min(res, dfs(sb, next) + 1);
            }
        }
        p[key] = res;
        return res;
    };

    const ans = dfs(board, 1 << m);
    if (ans === Infinity) {
        return -1;
    }

    return ans;
}
