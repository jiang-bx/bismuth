export function fullJustify(words: string[], maxWidth: number): string[] {
    const ans: string[] = [];
    const n = words.length;
    const blank = (num: number) => {
        return new Array(num).fill(" ").join("");
    };
    let right = 0;

    while (true) {
        const left = right;
        let sumLen = 0;

        while (
            right < n &&
            sumLen + words[right].length + right - left <= maxWidth
        ) {
            sumLen += words[right].length;
            right++;
        }

        if (right === n) {
            const s = words.slice(left).join(" ");
            ans.push(s + blank(maxWidth - s.length));
            break;
        }

        const numWords = right - left;
        const numSpaces = maxWidth - sumLen;

        if (numWords === 1) {
            ans.push(words[left] + blank(numSpaces));
            continue;
        }

        const avgSpaces = Math.floor(numSpaces / (numWords - 1));
        const extraSpace = numSpaces % (numWords - 1);
        const s1 = words
            .slice(left, left + extraSpace + 1)
            .join(blank(avgSpaces + 1));
        const s2 = words
            .slice(left + extraSpace + 1, right)
            .join(blank(avgSpaces));
        ans.push(s1 + blank(avgSpaces) + s2);
    }

    return ans;
}
