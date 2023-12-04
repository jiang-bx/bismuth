export function isIsomorphic(s: string, t: string): boolean {
    // for (let i = 0; i < s.length; i++) {
    //     const si = s.indexOf(s[i]);
    //     const ti = t.indexOf(t[i]);
    //     if (ti !== si) {
    //         return false;
    //     }
    // }
    // return true;

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] === undefined) {
            sMap[s[i]] = i;
        }

        if (tMap[t[i]] === undefined) {
            tMap[t[i]] = i;
        }

        const si = sMap[s[i]];
        const ti = tMap[t[i]];
        if (ti !== si) {
            return false;
        }
    }

    return true;
}
