export function letterCombinations(digits: string): string[] {
    const m = [
        "",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz",
    ];
    const ans: string[] = [];
    const dfs = (s: string, depth: number) => {
        if (depth === digits.length) {
            ans.push(s);
            return;
        }

        const str = m[digits[depth]];
        for (let i = 0; i < str.length; i++) {
            dfs(s + str[i], depth + 1);
        }
    };

    if (!digits) {
        return ans;
    }

    dfs("", 0);

    return ans;
}
