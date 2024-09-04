export function guessNumWrap(n: number, pick: number) {
    function guess(num: number) {
        if (num > pick) {
            return -1;
        } else if (num < pick) {
            return 1;
        }
        return 0;
    }

    function guessNumber(n: number): number {
        let l = 1;
        let r = n;

        while (l < r) {
            const mid = (l + r) >> 1;
            const res = guess(mid);

            if (res === 0) {
                return mid;
            } else if (res === -1) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return r;
    }

    return guessNumber(n);
}
