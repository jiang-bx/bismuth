export function findRepeatedDnaSequences(s: string): string[] {
    // A C G T
    // AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT
    // "AAAAACCCCC","CCCCCAAAAA"

    const res: string[] = [];
    const repeateStrMap = new Map<string, number>();

    for (let i = 0; i < s.length - 9; i++) {
        const str = s.slice(i, i + 10);
        if (repeateStrMap.has(str)) {
            const val = repeateStrMap.get(str);
            repeateStrMap.set(str, val + 1);

            if (val === 1) {
                res.push(str);
            }
        } else {
            repeateStrMap.set(str, 1);
        }
    }

    return res;
}
