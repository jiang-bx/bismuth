export function largestNumber(nums: number[]): string {
    // const strs = nums.map((n) => n.toString());

    // /**
    //  * x = "3", y = "30"
    //  * x + y = "330"
    //  * y + x = "303"
    //  *
    //  * if:  x + y > y + x  =>  x 应在 y 前面 保证最大
    //  */

    // strs.sort((a, b) => {
    //     return Number(b + a) - Number(a + b);
    // });

    // // 存在前导 0
    // if (strs[0] === "0") {
    //     return "0";
    // }

    // return strs.join("");

    nums.sort((a, b) => {
        // 1: 交换顺序, 保证最大, -1: 顺序不变
        return `${b}${a}` > `${a}${b}` ? 1 : -1;
    });

    if (nums[0] === 0) {
        return "0";
    } else {
        return nums.join("");
    }
}
