// s[i] 为 ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"] 这些字符之一
// 0 -> zero
// 1 -> one
// 2 -> two
// 3 -> three
// 4 -> four
// 5 -> five
// 6 -> six
// 7 -> seven
// 8 -> eight
// 9 -> nine

export function originalDigits(s: string): string {
    /**
    const obj = {};
    for (let i = 0, len = s.length; i < len; i++) {
        obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
    }

    const arr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    let res = "";

    for (let i = 0, len = arr.length; i < len; i++) {
        const temp = arr[i];
        const jLen = temp.length;
        let hasExist = true;
        while (hasExist) {
            for (let j = 0; j < jLen; j++) {
                if (!obj[temp[j]]) {
                    hasExist = false;
                    break;
                }
            }
            if (hasExist) {
                for (let j = 0; j < jLen; j++) {
                    obj[temp[j]]--;
                }
                res += i;
            }
        }
    }

    return res;
     */

    const counts = new Array(26).fill(0);
    const a = "a".charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        counts[s[i].charCodeAt(0) - a]++;
    }

    const arrLen = 10;
    const arr = new Array(arrLen).fill(0);

    arr[0] = counts["z".charCodeAt(0) - a];
    arr[2] = counts["w".charCodeAt(0) - a];
    arr[4] = counts["u".charCodeAt(0) - a];
    arr[6] = counts["x".charCodeAt(0) - a];
    arr[8] = counts["g".charCodeAt(0) - a];

    arr[5] = counts["f".charCodeAt(0) - a] - arr[4];
    arr[7] = counts["s".charCodeAt(0) - a] - arr[6];
    arr[3] = counts["h".charCodeAt(0) - a] - arr[8];

    arr[1] = counts["o".charCodeAt(0) - a] - arr[0] - arr[2] - arr[4];
    arr[9] = counts["i".charCodeAt(0) - a] - arr[6] - arr[8] - arr[5];

    let res = "";
    for (let i = 0; i < arrLen; i++) {
        res += String(i).repeat(arr[i]);
    }

    return res;
}
