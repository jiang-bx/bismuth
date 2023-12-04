export function convertToTitle(columnNumber: number): string {
    let res = "";
    while (columnNumber) {
        // 将一个数转换为 A-Z 的 26 进制数时，需要先将这个数减一，
        // 是因为 A-Z 的 26 进制数的个位数是从 0 到 25，而不是从 1 到 26。
        columnNumber--;
        res = String.fromCharCode((columnNumber % 26) + 65) + res;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res;
}
