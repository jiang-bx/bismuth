export function smallestGoodBase(n: string): string {
    const num = BigInt(n);

    const check = (x: bigint, m: bigint): number => {
        let ans = BigInt(0);
        for (let i = 0; i <= m; i++) {
            if (ans > (num - BigInt(1)) / x) {
                return 1;
            }
            ans = ans * x + BigInt(1);
        }

        if (ans === num) {
            return 0;
        } else if (ans < num) {
            return -1;
        } else {
            return 1;
        }
    };

    for (let i = BigInt(64); i > 0; i--) {
        let l = BigInt(2);
        let r = num;

        while (l < r) {
            const mid = l + (r - l) / BigInt(2);
            const temp = check(mid, i);

            if (temp === 0) {
                return mid.toString();
            } else if (temp < 0) {
                l = mid + BigInt(1);
            } else {
                r = mid;
            }
        }
    }

    return num - BigInt(1) + "";
}
