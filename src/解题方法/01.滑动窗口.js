function fn1() {
    // 前缀和是一种重要的预处理，能大大降低查询的时间复杂度。
    // 我们可以简单理解为“数列的前 n 项的和”。
    // 这个概念其实很容易理解，即一个数组中，第 n 位存储的是数组前 n 个数字的和。

    // 有 N 个的正整数放到数组 A 里，
    // 现在要求一个新的数组 B，
    // 新数组的第 i 个数 B[i]是原数组 A 第 0 到第 i 个数的和。
    const A = [1, 2, 3, 4, 5, 6];
    const B = [];

    for (let i = 0; i < A.length; i++) {
        B[i] = (i - 1 >= 0 ? B[i - 1] : 0) + A[i];
    }

    console.log(B); // [ 1, 3, 6, 10, 15, 21 ]
}
// fn1();

function fn2() {
    // 求一个数组的连续子数组总个数, 其中连续指的是数组的索引连续
    // 比如 [1,3,4]，
    // 其连续子数组有：[1], [3], [4], [1,3], [3,4] , [1,3,4]，
    // 你需要返回 6。

    // 一个思路:
    // 以索引 0 结尾的子数字个数,  [1]
    // 以索引 1 结尾的子数字个数,  [1, 3], [3]
    // 以索引 2 结尾的子数字个数,
    // ....
    // 以索引 n - 1 结尾的子数字个数, [1, 3, 4], [3, 4], [4]

    const nums = [1, 3, 4];
    let pre = 0,
        ans = 0;

    for (let i = 0; i < nums.length; i++) {
        pre += 1;
        ans += pre;
    }

    console.log(ans);

    return ans;
}
// fn2();

function fn3() {
    // 求一个数组相邻差为 1 连续子数组的总个数
    // 其实就是索引差 1 的同时，值也差 1

    const nums = [1, 3, 4, 6, 7];
    let pre = 1,
        ans = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            pre += 1;
        } else {
            pre = 0;
        }
        ans += pre;
    }

    console.log(ans);

    return ans;
}
// fn3();

function fn4() {
    // 求出不大于 k 的子数组的个数呢
    // 不大于 k 指的是子数组的全部元素都不大于 k

    // 比如 [1,3,4] 子数组有 [1], [3], [4], [1,3], [3,4] , [1,3,4]，
    // 不大于 3 的子数组有 [1], [3], [1,3] ，
    // 那么 [1,3,4] 不大于 3 的子数组个数就是 3

    const nums = [1, 3, 4, 6, 7];
    const k = 3;
    let pre = 0,
        ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= k) {
            pre += 1;
        } else {
            pre = 0;
        }
        ans += pre;
    }

    console.log(ans);

    return ans;
}
fn4();
