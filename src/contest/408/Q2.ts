export function nonSpecialCount(l: number, r: number): number {
    const isSpecial = (num: number): Boolean => {
        if (num < 2) {
            return false;
        }

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    };

    const rl = l;
    let n = Math.floor(Math.sqrt(l));

    l = n * n === l ? n : n + 1;

    let ans = 0;
    for (let i = Math.max(2, l); i <= Math.floor(Math.sqrt(r)); i++) {
        if (isSpecial(i)) {
            ans++;
        }
    }

    return r - rl - ans + 1;
}
