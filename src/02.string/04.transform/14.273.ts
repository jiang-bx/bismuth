// 0 <= num <= 2^31 - 1
// 2^31 = 2147483648
// 2 1 4 7 4 8 3 6 4 8
// 0 1 2 3 4 5 6 7 8 9
// 十亿 亿 千万 百万 十万 万 千 百 十 个

// 英文中数字表示法: 三个一组数,
//        x < 20 直接得到英文,
//        20 <= x < 100, 十位转为英文, 个位转为英文
//        x >= 100, 百位转为应为, 十位转为英文, 个位转为英文
// 从高到低, 10^9(billion - 十亿), 10^6(million - 百万), 10^3(thousand - 千), 1 单位
// 只有 非零 组的英文才会拼接到 整数 num 的英文表示中
// 如果 num = 0 ,直接返回 zero

export function numberToWords(num: number): string {
    const singles = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
    ];

    const teens = [
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ];

    const tens = [
        "",
        "Ten",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ];

    const thousands = ["", "Thousand", "Million", "Billion"];

    // 递归
    const recursion = (curr: string[], num: number) => {
        if (num === 0) {
            return;
        } else if (num < 10) {
            curr.push(singles[num] + " ");
        } else if (num < 20) {
            curr.push(teens[num - 10] + " ");
        } else if (num < 100) {
            curr.push(tens[Math.floor(num / 10)] + " ");
            recursion(curr, num % 10);
        } else {
            curr.push(singles[Math.floor(num / 100)] + " Hundred ");
            recursion(curr, num % 100);
        }
    };

    if (num === 0) {
        return "Zero";
    }

    const res = [];

    for (
        let i = 3, unit = 1000000000;
        i >= 0;
        i--, unit = Math.floor(unit / 1000)
    ) {
        const curNum = Math.floor(num / unit);

        if (curNum !== 0) {
            num -= curNum * unit;
            const curr: string[] = [];
            recursion(curr, curNum);
            curr.push(thousands[i] + " ");
            res.push(curr.join(""));
        }
    }

    return res.join("").trim();
}
