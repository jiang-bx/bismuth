export function longestPalindrome(s: string): string {
    /**
    // 暴力求解, 列举所有子串, 判断是否是子串
    const n = s.length;
    let max = 0;
    let res = "";
    const isPalindrome = (str: string) => {
        const len = str.length;
        for (let i = 0; i < Math.floor(len / 2); i++) {
            if (str[i] !== str[len - i - 1]) {
                return false;
            }
        }

        return true;
    };

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const subStr = s.substring(i, j);
            if (isPalindrome(subStr) && subStr.length > max) {
                res = subStr;
                max = subStr.length;
            }
        }
    }

    return res;
    */

    /**
    // 暴力解法优化
    const n = s.length;
    let max = 0;
    let res = "";
    const isPalindrome = (str: string) => {
        const len = str.length;
        for (let i = 0; i < Math.floor(len / 2); i++) {
            if (str[i] !== str[len - i - 1]) {
                return false;
            }
        }

        return true;
    };

    for (let i = 0; i < n; i++) {
        // 将 j + 1 修改为 j + max, 比 max 小的回文串不需要再判断了
        for (let j = i + max; j <= n; j++) {
            const subStr = s.substring(i, j);
            if (isPalindrome(subStr) && subStr.length > max) {
                res = subStr;
                max = subStr.length;
            }
        }
    }

    return res;
     */

    /**
    // 最长公共子串, 回文串: 正着读与反着读都是一样的
    // 例如: caba 与 abac, 最长公共子串 aba
    const reverseStr = s.split("").reverse().join("");
    const n = s.length;
    const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let maxLen = 0;
    let maxEnd = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (s[i] === reverseStr[j]) {
                if (i === 0 || j === 0) {
                    arr[i][j] = 1;
                } else {
                    arr[i][j] = arr[i - 1][j - 1] + 1;
                }
            }
            if (arr[i][j] > maxLen) {
                // 公共子串也需要判断, 是不是回文串
                const beforeRev = n - 1 - j;
                if (beforeRev + arr[i][j] - 1 == i) {
                    maxLen = arr[i][j];
                    maxEnd = i;
                }
            }
        }
    }

    return s.substring(maxEnd - maxLen + 1, maxEnd + 1);
     */

    // 扩展中心法
    /**
    const n = s.length;
    if (n < 1) {
        return "";
    }

    const expandAroundCenter = (
        s: string,
        left: number,
        right: number
    ): number => {
        let L = left;
        let R = right;

        while (L >= 0 && R < s.length && s[L] === s[R]) {
            L--;
            R++;
        }

        return R - L - 1;
    };

    let start = 0,
        end = 0;
    for (let i = 0; i < n; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
     */
    
    // manacher (马拉车算法)
    const sLen = s.length;
    let t = "^";

    for (let i = 0; i < sLen; i++) {
        t += "#" + s[i];
    }
    t += sLen === 0 ? "$" : "#$";

    const n = t.length;
    const arr = new Array(n).fill(0);

    let C = 0,
        R = 0;

    for (let i = 1; i < n - 1; i++) {
        let iMirror = 2 * C - i;
        if (R > i) {
            arr[i] = Math.min(R - i, arr[iMirror]);
        } else {
            // 等于 R 的情况
            arr[i] = 0;
        }

        while (t[i + 1 + arr[i]] === t[i - 1 - arr[i]]) {
            arr[i]++;
        }

        // 判断是否需要更新 R
        if (i + arr[i] > R) {
            C = i;
            R = i + arr[i];
        }
    }

    // 找出 arr 的最大值
    let maxLen = 0;
    let centerIndex = 0;

    for (let i = 1; i < n - 1; i++) {
        if (arr[i] > maxLen) {
            maxLen = arr[i];
            centerIndex = i;
        }
    }

    let start = Math.floor((centerIndex - maxLen) / 2);
    return s.substring(start, start + maxLen);
}
