export function magicalString(n: number): number {
    // 1 22 11 2 1 22 1 22 11 2 11 22
    // 1 2 2 1 1 2
    /**
    let s = "122";
    let lastChar = "2";
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === "1") {
            count++;
        }

        if (i >= 2 && s.length <= n) {
            if (s[i] === "2") {
                s += lastChar === "2" ? "11" : "22";
            } else {
                s += lastChar === "2" ? "1" : "2";
            }
            lastChar = lastChar === "2" ? "1" : "2";
        }
    }
    return count;
    */

    const arr = [1, 2, 2];
    let count = 0;
    let arrLen = 3;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 1) {
            count++;
        }

        if (i >= 2 && arrLen <= n) {
            let lastChar = arr[arrLen - 1] ^ 3;
            let item = arr[i];
            while (item > 0) {
                arr.push(lastChar);
                arrLen++;
                item--;
            }
        }
    }

    return count;
}
