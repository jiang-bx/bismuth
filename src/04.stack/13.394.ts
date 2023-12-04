export function decodeString(s: string): string {
    // 辅助栈:
    // const zero = "0".charCodeAt(0);
    // const nine = "9".charCodeAt(0);
    // const stack = [];
    // let curVal = 0;
    // let res = "";
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "[") {
    //         stack.push([curVal, res]);
    //         res = "";
    //         curVal = 0;
    //     } else if (s[i] === "]") {
    //         const item = stack.pop();
    //         res = item[1] + res.repeat(item[0]);
    //     } else if (zero <= s.charCodeAt(i) && s.charCodeAt(i) <= nine) {
    //         curVal = curVal * 10 + s.charCodeAt(i) - zero;
    //     } else {
    //         res += s[i];
    //     }
    // }
    // return res;

    const zero = "0".charCodeAt(0);
    const nine = "9".charCodeAt(0);
    const search = (i: number) => {
        let res = "";
        let curVal = 0;
        while (i < s.length) {
            if (s[i] === "[") {
                const { index, val } = search(i + 1);
                i = index;
                res += val.repeat(curVal);
                curVal = 0;
            } else if (s[i] === "]") {
                return {
                    val: res,
                    index: i,
                };
            } else if (zero <= s.charCodeAt(i) && s.charCodeAt(i) <= nine) {
                curVal = curVal * 10 + s.charCodeAt(i) - zero;
            } else {
                res += s[i];
            }
            i++;
        }

        return {
            val: res,
            index: i,
        };
    };

    return search(0).val;
}
