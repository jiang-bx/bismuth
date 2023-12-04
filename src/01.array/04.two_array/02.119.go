package array_two

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

func GetRow(rowIndex int) []int {
	// 暴力解法
	// res := [][]int{}

	// for i := 0; i <= rowIndex; i++ {
	// 	row := []int{}
	// 	row = append(row, 1)
	// 	for j := 1; j < i; j++ {
	// 		row = append(row, res[i-1][j-1]+res[i-1][j])
	// 	}
	// 	if i != 0 {
	// 		row = append(row, 1)
	// 	}
	// 	res = append(res, row)
	// }

	// return res[rowIndex]

	// 公式法: v = row[i-1] * (rowIndex - i + 1) / i

	// row := make([]int, rowIndex+1)

	// row[0] = 1

	// for i := 1; i <= rowIndex; i++ {
	// 	row[i] = row[i-1] * (rowIndex - i + 1) / i
	// }

	// return row

	// 将二维数组转为一维数组
	row := make([]int, rowIndex+1)
	row[0] = 1
	for i := 1; i <= rowIndex; i++ {
		for j := i; j > 0; j-- {
			row[j] += row[j-1]
		}
	}
	return row
}
