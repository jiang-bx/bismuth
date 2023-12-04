export function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ");

    if (words.length !== pattern.length) {
        return false;
    }

    const w2p = new Map<string, string>();
    const p2w = new Map<string, string>();

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const ch = pattern[i];
        if (
            (w2p.has(word) && w2p.get(word) !== ch) ||
            (p2w.has(ch) && p2w.get(ch) !== word)
        ) {
            return false;
        }

        w2p.set(word, ch);
        p2w.set(ch, word);
    }

    return true;
}
