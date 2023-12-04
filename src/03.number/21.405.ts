export function toHex(num: number): string {
    // 负数采用补码运算的方法
    // 源码 -(符号位不变, 其他位取反)-> 反码 -(反码 + 1, 超出舍弃)-> 补码
    if (num === 0) {
        return "0";
    }
    const list = "0123456789abcdef";
    let res = "";
    while (num) {
        res = list[num & 0b1111] + res;
        num >>>= 4;
    }

    return res;
}
