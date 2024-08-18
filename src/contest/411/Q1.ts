export function countKConstraintSubstrings(s: string, k: number): number {
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        let zeroCount = 0;
        let oneCount = 0;
        for (let j = i; j < s.length; j++) {
            s[j] === "1" ? oneCount++ : zeroCount++;

            if (zeroCount <= k || oneCount <= k) {
                ans++;
            }
        }
    }

    return ans;
}
