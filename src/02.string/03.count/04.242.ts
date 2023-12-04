export function isAnagram(s: string, t: string): boolean {
    const sLen = s.length;
    const tLen = t.length;
    if (sLen !== tLen) {
        return false;
    }

    const obj: { [key: string]: number } = {};

    for (let i = 0; i < sLen; i++) {
        obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
    }

    for (let i = 0; i < sLen; i++) {
        if (obj[t[i]] === undefined) {
            obj[t[i]] = 0;
        }
        obj[t[i]]--;
        if (obj[t[i]] < 0) {
            return false;
        }
    }

    return true;
}
