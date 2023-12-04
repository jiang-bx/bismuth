export function maximum69Number(num: number): number {
    /** 解析数字做法
    const arr: number[] = [];
    let remain = num;
    let changeIndex = -1;
    let i = 0;
    while (remain !== 0) {
        const item = remain % 10;
        arr.push(item);
        remain = Math.floor(remain / 10);
        if (item === 6) {
            changeIndex = i;
        }
        i++;
    }

    if (changeIndex !== -1) {
        arr[changeIndex] = 9;
    }

    let res = 0;
    i = 0;
    for (; i < arr.length; i++) {
        res += arr[i] * Math.pow(10, i);
    }

    return res;
     */

    /** 转为字符串
    const s = String(num).split("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "6") {
            s[i] = "9";
            break;
        }
    }

    return Number(s.join(""));
     */

    // return +(num + "").replace("6", "9");

    // 纯数字
    let i = 0;
    let th = 0;
    let re = num;

    while (re) {
        i++;
        if (re % 10 == 6) {
            th = i;
        }
        re = Math.floor(re / 10);
    }

    const res = th <= 0 ? 0 : Math.pow(10, th - 1);

    return num + 3 * res;
}
