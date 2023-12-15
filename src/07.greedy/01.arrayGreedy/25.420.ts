export function strongPasswordChecker(password: string): number {
    const cs = password.split("");
    const n = cs.length;

    let A = 0,
        B = 0,
        C = 0;

    cs.forEach((c) => {
        if (c >= "a" && c <= "z") {
            A = 1;
        } else if (c >= "0" && c <= "9") {
            B = 1;
        } else if (c >= "A" && c <= "Z") {
            C = 1;
        }
    });

    const m = A + B + C;

    if (n < 6) {
        return Math.max(6 - n, 3 - m);
    } else if (n <= 20) {
        let tot = 0;
        for (let i = 0; i < n; ) {
            let j = i;
            while (j < n && cs[j] == cs[i]) {
                j++;
            }
            const cnt = j - i;
            if (cnt >= 3) {
                tot += Math.floor(cnt / 3);
            }
            i = j;
        }
        return Math.max(tot, 3 - m);
    } else {
        let tot = 0;
        const cnts = new Array(3).fill(0);

        for (let i = 0; i < n; ) {
            let j = i;
            while (j < n && cs[j] === cs[i]) {
                j++;
            }
            const cnt = j - i;
            if (cnt >= 3) {
                tot += Math.floor(cnt / 3);
                cnts[cnt % 3]++;
            }
            i = j;
        }

        const base = n - 20;
        let cur = base;

        for (let i = 0; i < 3; i++) {
            if (i == 2) {
                cnts[i] = tot;
            }

            if (cnts[i] != 0 && cur != 0) {
                const t = Math.min(cnts[i] * (i + 1), cur);
                cur -= t;
                tot -= Math.floor(t / (i + 1));
            }
        }

        return base + Math.max(tot, 3 - m);
    }
}
