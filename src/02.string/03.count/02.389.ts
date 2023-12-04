export function findTheDifference(s: string, t: string): string {
    /**
     // 方法一: 将 t 按照 a 重新排列
    const tArr = t.split("");
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < tArr.length; j++) {
            if (s[i] === tArr[j] && i !== j) {
                // 交换位置
                const temp = tArr[i];
                tArr[i] = tArr[j];
                tArr[j] = temp;
            }
        }
    }
    return tArr[t.length - 1];
     */

    /**
    // 方法二: 计数
    const arr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for (let i = 0; i < t.length; i++) {
        arr[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;

        if (arr[t[i].charCodeAt(0) - "a".charCodeAt(0)] === -1) {
            return t[i];
        }
    }

    return "";
     */

    /**
    // 方法三, 利用 ASCII 码求和
    let sCount = 0;
    let tCount = 0;

    for (let i = 0; i < s.length; i++) {
        sCount += s[i].charCodeAt(0);
    }

    for (let i = 0; i < t.length; i++) {
        tCount += t[i].charCodeAt(0);
    }

    return String.fromCharCode(tCount - sCount);
     */

    /**
    // 方法四: 利用位运算, 相同元素异或等于0 
    // 所以唯一不同的字符最后会留下来
     */
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        res ^= s[i].charCodeAt(0);
    }

    for (let i = 0; i < t.length; i++) {
        res ^= t[i].charCodeAt(0);
    }

    return String.fromCharCode(res);
}
