export function optimalDivision(nums: number[]): string {
    /**
    const n = nums.length;
    let res = "";
    for (let i = 0; i < n; i++) {
        res += nums[i] + (i === n - 1 ? "" : "/");
        if (n > 2) {
            if (i === 0) {
                res += "(";
            } else if (i === n - 1) {
                res += ")";
            }
        }
    }

    return res;
    */

    // const n = nums.length;
    // let res = "";
    // for (let i = 0; i < n; i++) {
    //     res += nums[i] + (i === n - 1 ? "" : "/");
    // }

    // if (n > 2) {
    //     res = res.replace("/", "/(");
    //     res += ")";
    // }

    // return res;
    if (nums.length === 1) {
        return "" + nums[0];
    }
    if (nums.length === 2) {
        return nums.join("/");
    }
    nums.splice(1, 0, -1);
    return nums.join("/").replace("-1/", "(") + ")";
}
