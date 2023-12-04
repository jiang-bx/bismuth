// s仅包含 'I', 'V', 'X', 'L', 'C', 'D', 'M'
/***
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */
export function romanToInt(s: string): number {
    const sMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let res = 0;

    for (let i = 0, n = s.length; i < n; ) {
        if (i+1 < n && sMap[s[i]] < sMap[s[i + 1]]) {
            // 一起计算
            res += sMap[s[i + 1]] - sMap[s[i]];
            i += 2;
        } else {
            // 单独计算
            res += sMap[s[i]];
            i++;
        }
    }

    return res;
}
