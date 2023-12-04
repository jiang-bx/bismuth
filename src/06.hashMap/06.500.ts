export function findWords(words: string[]): string[] {
    // const line1 = new Set<string>();
    // const line2 = new Set<string>();
    // const line3 = new Set<string>();
    // const lineChar1 = "qwertyuiop";
    // for (let i = 0; i < lineChar1.length; i++) {
    //     line1.add(lineChar1[i]);
    // }
    // const lineChar2 = "asdfghjkl";
    // for (let i = 0; i < lineChar2.length; i++) {
    //     line2.add(lineChar2[i]);
    // }
    // const lineChar3 = "zxcvbnm";
    // for (let i = 0; i < lineChar3.length; i++) {
    //     line3.add(lineChar3[i]);
    // }
    // const isContain = (line: Set<string>, str: string) => {
    //     for (let i = 0; i < str.length; i++) {
    //         if (!line.has(str[i])) {
    //             return false;
    //         }
    //     }
    //     return true;
    // };

    // const res: string[] = [];

    // words.forEach((item) => {
    //     const temp = item.toLocaleLowerCase();
    //     if (
    //         isContain(line1, temp) ||
    //         isContain(line2, temp) ||
    //         isContain(line3, temp)
    //     ) {
    //         res.push(item);
    //     }
    // });

    // return res;

    const map: { [key: string]: number } = {};
    for (const ch of "qwertyuiop") {
        map[ch] = 1;
    }
    for (const ch of "asdfghjkl") {
        map[ch] = 2;
    }
    for (const ch of "zxcvbnm") {
        map[ch] = 3;
    }

    const res: string[] = [];
    for (const w of words) {
        const t = w.toLocaleLowerCase();
        const row = map[t[0]];
        let isVaild = false;
        for (const ch of t) {
            if (row !== map[ch]) {
                isVaild = true;
                break;
            }
        }
        if (!isVaild) {
            res.push(w);
        }
    }

    return res;
}
