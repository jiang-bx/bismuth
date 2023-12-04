package array_two

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

func Generate(numRows int) [][]int {
	res := [][]int{}

	for i := 0; i < numRows; i++ {
		row := []int{}
		for j := 0; j <= i; j++ {
			if j == 0 || j == i {
				row = append(row, 1)
			} else {
				row = append(row, res[i-1][j-1]+res[i-1][j])
			}

		}
		res = append(res, row)
	}

	return res
}
