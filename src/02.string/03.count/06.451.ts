export function frequencySort(s: string): string {
    const arrLen = 128;
    const arr: { code: string; count: number }[] = new Array(arrLen)
        .fill(0)
        .map(() => ({
            code: "",
            count: 0,
        }));

    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt(0);
        arr[index].code += s[i];
        arr[index].count++;
    }

    arr.sort((a, b) => {
        return b.count - a.count;
    });

    let res = "";
    for (let i = 0; i < arrLen; i++) {
        if (arr[i].count > 0) {
            res += arr[i].code;
        } else {
            return res;
        }
    }

    return res;
}
