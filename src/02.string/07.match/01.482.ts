export function licenseKeyFormatting(s: string, k: number): string {
    // 根据 k 重新划分, 每组包含 k 个字符, 然后用 - 重新连接
    // 第一组至少包含一个字符即可, 并将小写字符转为大写
    const n = s.length;
    let j = 0;
    let res = "";
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === "-") {
            continue;
        }

        if (j < k) {
            res = s[i].toUpperCase() + res;
            j++;
        } else {
            j = 1;
            res = s[i].toUpperCase() + "-" + res;
        }
    }

    return res;
}
