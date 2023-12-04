export function countAndSay(n: number): string {
    let prevEl = "1";
    let nextEl = "";
    let i = 1;

    while (i < n) {
        const prevElLen = prevEl.length;
        let start = 0;
        let end = 0;
        let count = 0;
        while (end < prevElLen) {
            if (prevEl[start] === prevEl[end]) {
                count++;
                end++;
            } else {
                nextEl += count + prevEl[start];
                count = 0;
                start = end;
            }
        }

        if (count > 0) {
            nextEl += count + prevEl[start];
        }

        i++;
        prevEl = nextEl;
        nextEl = "";
    }

    return prevEl;
}
