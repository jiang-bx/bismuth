/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 输入: 5
 * 
 * 输出:
 * [
 *     [1],
 *    [1,1],
 *   [1,2,1],
 *  [1,3,3,1],
 * [1,4,6,4,1]
 * ]
 */

/**
 * 正常思路
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = [];
    let i = 0;

    for (; i < numRows; i++) {
        if (i === 0) {
            arr.push([1]);
        } else {

            const list = [];
            const lastList = arr[i - 1];

            let j = 0,
                lenJ = lastList.length + 1;

            arr.push(list);

            for (; j < lenJ; j++) {
                list[j] = (lastList[j - 1] || 0) + (lastList[j] || 0);
            }
            
        }
    }

    return arr;
};

/**
 * 优雅思路
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function(numRows) {
    const arr = [];
    let i = 0,
        j = 0;

    for (; i < numRows; i++) {
        const subArr = [];
        // 第一位和最后一位肯定为 1
        // 中间的值找 上一层的 两数之和即可
        for(j = 0; j <= i; j++) {
            if (j > 0 && j < i) {
                subArr.push(arr[i - 1][j - 1] + arr[i - 1][j]);
            } else {
                subArr.push(1);
            }
        }
        arr.push(subArr);
    }

    return arr;
};


export { generate, generate1 }