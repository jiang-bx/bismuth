export function compress(chars: string[]): number {
    const n = chars.length;
    let k = 0;
    for (let i = 0, start = 0; i < n; start = i) {
        while (i < n && chars[i] === chars[start]) {
            i++;
        }
        chars[k++] = chars[start];
        const count = i - start;
        if (count > 1) {
            const countStr = "" + count;
            for (let j = 0; j < countStr.length; j++) {
                chars[k++] = countStr[j];
            }
        }
    }
    chars.length = k;
    return k;
}
