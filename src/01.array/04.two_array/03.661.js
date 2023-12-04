/**
 * 包含整数的二维矩阵 M 表示一个图片的灰度。
 * 你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，
 * 平均灰度的计算是周围的8个单元和它本身的值求平均，
 * 如果周围的单元格不足八个，则尽可能多的利用它们。
 * 
 * 示例 1:
 * 
 * 输入:
 * [[1,1,1],
 *  [1,0,1],
 *  [1,1,1]]
 * 
 * 输出:
 * [[0, 0, 0],
 *  [0, 0, 0],
 *  [0, 0, 0]]
 * 
 * 解释:
 * 对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
 * 对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
 * 对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
 * 
 * 注意:
 * 给定矩阵中的整数范围为 [0, 255]。
 * 矩阵的长和宽的范围均为 [1, 150]。
 * 
 */

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    // 暴力解法
    const arr = [];

    for (let i =0, len = img.length; i < len; i++) {
        const subArr = [];
        for (let j = 0, lenJ = img[i].length; j < lenJ; j++) {
            let totalVal = img[i][j];
            let num = 1;

            // 左上
            if (j - 1 >= 0 && i - 1 >= 0) {
                num += 1;
                totalVal += img[i - 1][j - 1];
            }

            // 上
            if (i - 1 >= 0) {
                num += 1;
                totalVal += img[i - 1][j];
            }

            // 右上
            if (j + 1 < lenJ && i - 1 >= 0) {
                num += 1;
                totalVal += img[i - 1][j + 1];
            }

            // 右
            if (j + 1 < lenJ) {
                num += 1;
                totalVal += img[i][j + 1];
            }

            // 右下
            if (j + 1 < lenJ && i + 1 < len) {
                num += 1;
                totalVal += img[i + 1][j + 1];
            }

            // 下
            if (i + 1 < len) {
                num += 1;
                totalVal += img[i + 1][j];
            }

            // 左下
            if (j - 1 >= 0 && i + 1 < len) {
                num += 1;
                totalVal += img[i + 1][j - 1];
            }

            // 左
            if (j - 1 >= 0) {
                num += 1;
                totalVal += img[i][j - 1];
            }

            subArr.push(Math.floor(totalVal / num));
        }

        arr.push(subArr);
    }

    return arr;
};


var imageSmoother1 = function(img) {
    const arr = [];

    for (let i =0, len = img.length; i < len; i++) {
        const subArr = [];
        for (let j = 0, lenJ = img[i].length; j < lenJ; j++) {
            let totalVal = 0;
            let num = 0;

            // 利用双层遍历, 限定 m, n 的范围
            for(let n = Math.max(0, i - 1); n <= Math.min(i + 1, len - 1); n++) {
                for (let m = Math.max(0, j - 1); m <= Math.min(j + 1, lenJ - 1); m++) {
                    num += 1;
                    totalVal += img[n][m];
                }
            }

            subArr.push(Math.floor(totalVal / num));
        }

        arr.push(subArr);
    }

    return arr;
};

export { imageSmoother, imageSmoother1 }
