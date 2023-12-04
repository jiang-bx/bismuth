export function reverseWords(s: string): string {
    const reverse = (s: string[], start: number, end: number) => {
        for (let i = start, j = end; i < j; i++, j--) {
            const temp = s[i];
            s[i] = s[j];
            s[j] = temp;
        }
    };

    const n = s.length;

    const sArr: string[] = [];

    for (let i = 0; i < n; i++) {
        sArr.push(s[i]);
    }

    let startIndex = 0;

    for (let i = 0; i < n; i++) {
        if (sArr[i] === " ") {
            reverse(sArr, startIndex, i - 1);
            startIndex = i + 1;
        } else if (i === n - 1) {
            reverse(sArr, startIndex, n - 1);
        }
    }

    s = "";

    for (let i = 0; i < n; i++) {
        s += sArr[i];
    }

    return s;
}
