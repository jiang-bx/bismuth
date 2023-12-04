/**
 * 给定一个非负索引 k， 其中 k ≤ 33，返回杨辉三角的第 k 行。
 * // https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 进阶：
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 */


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    // 需要根据 rowIndex 生成 杨辉三角
    const rows = [];
    let i = 0;

    while(i <= rowIndex) {
        const subRows = [];
        let j = 0;
        for (; j <= i; j++) {
            if (j > 0 && j < i) {
                subRows.push(rows[i - 1][j - 1] + rows[i - 1][j]);
            } else {
                subRows.push(1);
            }
        }

        rows.push(subRows);
        i++;
    }

    return rows[rowIndex];
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow1 = function(rowIndex) {

    // 需要根据 rowIndex 生成 杨辉三角
    const rows = {
        prev: [],
        current: null,
    };
    let i = 0;

    while(i <= rowIndex) {
        rows.current = []
        let j = 0;
        for (; j <= i; j++) {
            if (j > 0 && j < i) {
                rows.current.push(rows.prev[j - 1] + rows.prev[j]);
            } else {
                rows.current.push(1);
            }
        }

        rows.prev = rows.current;
        i++;
    }

    return rows.current;
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow2 = function(rowIndex) {
    // 公式解法
    const rows = new Array(rowIndex + 1).fill(0);

    rows[0] = 1;

    for (let i = 1; i <= rowIndex; i++) {
        rows[i] = rows[i - 1] * (rowIndex - i + 1) / i;
    }

    return rows;
};


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow3 = function(rowIndex) {
    // 将二维数组转化成一维数组
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 1; i <= rowIndex; ++i) {

        // 利用滚动数组
        // 当 i = 2,  [1, 1, 0, 0]
        // 当 i = 3,  [1, 2, 1, 0]
        for (let j = i; j > 0; --j) {
            row[j] += row[j - 1];
            // 当 i = 2 时, j = 2,  [1, 1, 1, 0]
            // 当 i = 2 时, j = 1,  [1, 2, 1, 0]

            // 当 i = 3 时, j = 3,  [1, 2, 1, 1]
            // 当 i = 3 时, j = 2,  [1, 2, 3, 1]
            // 当 i = 3 时, j = 1,  [1, 3, 3, 1]
        }
    }
    return row;
};


export {
    getRow,
    getRow1,
    getRow2,
    getRow3,
}
