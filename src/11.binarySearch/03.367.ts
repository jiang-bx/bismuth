export function isPerfectSquare(num: number): boolean {
    let l = 1;
    let r = num;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        const res = mid * mid;
        if (res === num) {
            return true;
        } else if (res > num) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return false;
}
