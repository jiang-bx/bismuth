// A 缺勤, L 迟到, P 到场
export function checkRecord(s: string): boolean {
    // A 两次以上 false
    // L 连续三次以上 false

    const len = s.length;
    let absentCount = 0;

    for (let i = 0; i < len; i++) {
        if (s[i] === "A") {
            absentCount++;
            if (absentCount >= 2) {
                return false;
            }
        } else if (
            i >= 2 &&
            s[i] === "L" &&
            s[i - 1] === "L" &&
            s[i - 2] === "L"
        ) {
            return false;
        }
    }

    return true;
}
