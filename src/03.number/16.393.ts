// 与 02.string/04.transform/11.8.ts 冲突了, 这两个题都要重新做

export function validUtf8(data: number[]): boolean {
    // 遍历
    // 判断为几个字节字符
    // 判断其后面几个字节是否正确

    let n = data.length;
    let i = 0;
    let mask = 0b10000000; // 1 << 7
    const getBytes = (num: number): number => {
        if ((num & mask) === 0) {
            return 1;
        }

        let count = 0;

        while ((num & mask) !== 0) {
            count++;
            num <<= 1;
            // 超过 4 个 1 不行
            if (count > 4) {
                return -1;
            }
        }

        // 只有 1 个 1 也不行
        return count >= 2 ? count : -1;
    };

    while (i < n) {
        // 判断 cur 是否是
        // 0xxx(1字节),
        // 110x(2 字节),
        // 1110(3 字节),
        // 11110xxx(4 字节)
        let count = getBytes(data[i]);

        // 判断是否超出范围
        if (count < 0 || i + count > n) {
            return false;
        }

        // 如果是 1 个字节, 继续循环
        // 如果是 2 个字节以上,
        // 判断剩余几个字节是否为: 10xx,xxxx
        for (let k = 1; k < count; k++) {
            let mask2 = 0b11000000;
            if ((data[i + k] & mask2) !== mask) {
                return false;
            }
        }

        i += count;
    }

    return true;
}
