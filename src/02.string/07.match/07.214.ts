export function shortestPalindrome(s: string): string {
    const n = s.length;
    let endIndex = n;
    for (let i = n - 1; i >= 0; i--) {
        let j = i;
        let k = 0;
        let isCompleted = true;
        for (; k <= j; k++, j--) {
            if (s[k] !== s[j]) {
                isCompleted = false;
                break;
            }
        }

        if (isCompleted) {
            endIndex = i + 1;
            break;
        }
    }

    if (endIndex >= n) {
        return s;
    }

    let res = "";
    for (let i = n - 1; i >= endIndex; i--) {
        res += s[i];
    }

    return res + s;
}
