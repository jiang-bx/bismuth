export function isPalindrome(s: string): boolean {
    // ASCII
    // 0-9 -> 48-57
    // A-Z -> 65-90
    // a-z -> 97-122
    /**
    // 构造新的
    let str = "";
    let sLen = s.length;

    for (let i = 0; i < sLen; i++) {
        const value = s[i].charCodeAt(0);
        let temp = s[i];
        if (value >= 65 && value <= 90) {
            temp = temp.toLocaleLowerCase();
            str += temp;
        }

        if ((value >= 48 && value <= 57) || (value >= 97 && value <= 122)) {
            str += temp;
        }
    }

    // 判断 str 是否是回文字符串
    let res = true;
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[j] !== str[i]) {
            res = false;
            break;
        }
    }

    return res;

     */

    const sLen = s.length;

    const isAlNum = (c: string): boolean => {
        return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
    };

    s = s.toLocaleLowerCase();

    for (let i = 0, j = sLen - 1; i < j; ) {
        if (!isAlNum(s[i])) {
            i++;
            continue;
        }

        if (!isAlNum(s[j])) {
            j--;
            continue;
        }

        if (s[i] != s[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}
