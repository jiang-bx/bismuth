export function nearestPalindromic(n: string): string {
    const nLen = n.length;
    const m = BigInt(n);

    if (m < BigInt(10) || m === BigInt(10 ** (nLen - 1))) {
        return m - BigInt(1) + "";
    }

    if (m + BigInt(1) === BigInt(10 ** nLen)) {
        return m + BigInt(2) + "";
    }

    if (m - BigInt(1) === BigInt(10 ** (nLen - 1))) {
        return m - BigInt(2) + "";
    }

    const pre = n.slice(0, (nLen + 1) >>> 1);

    let minDiff = Number.MAX_SAFE_INTEGER;
    let ans = "";

    for (let i = -1; i <= 1; i++) {
        const newPre = (BigInt(pre) | BigInt(0)) + BigInt(i) + "";
        const newStr =
            newPre +
            (nLen & 1 ? newPre.slice(0, -1) : newPre)
                .split("")
                .reverse()
                .join("");

        const diff = Math.abs(Number(m - BigInt(newStr)));
        if (diff && diff < minDiff) {
            minDiff = diff;
            ans = newStr;
        }
    }

    return ans;
}
