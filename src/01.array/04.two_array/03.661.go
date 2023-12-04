package array_two

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

func ImageSmoother(img [][]int) [][]int {
	// colLen := len(img)
	// res := [][]int{}
	// for i := 0; i < colLen; i++ {
	// 	rowLen := len(img[i])
	// 	rows := []int{}
	// 	for j := 0; j < rowLen; j++ {
	// 		total := img[i][j]
	// 		count := 1

	// 		if j-1 >= 0 {
	// 			total += img[i][j-1]
	// 			count++
	// 		}

	// 		if j+1 <= rowLen-1 {
	// 			total += img[i][j+1]
	// 			count++
	// 		}

	// 		if i-1 >= 0 {
	// 			total += img[i-1][j]
	// 			count++
	// 		}

	// 		if i+1 <= colLen-1 {
	// 			total += img[i+1][j]
	// 			count++
	// 		}

	// 		if j-1 >= 0 && i-1 >= 0 {
	// 			total += img[i-1][j-1]
	// 			count++
	// 		}

	// 		if j-1 >= 0 && i+1 <= colLen-1 {
	// 			total += img[i+1][j-1]
	// 			count++
	// 		}

	// 		if j+1 <= rowLen-1 && i-1 >= 0 {
	// 			total += img[i-1][j+1]
	// 			count++
	// 		}

	// 		if j+1 <= rowLen-1 && i+1 <= colLen-1 {
	// 			total += img[i+1][j+1]
	// 			count++
	// 		}
	// 		rows = append(rows, total/count)
	// 	}
	// 	res = append(res, rows)
	// }

	// return res

	colLen := len(img)
	res := [][]int{}

	for i := 0; i < colLen; i++ {
		rowLen := len(img[i])
		row := []int{}

		for j := 0; j < rowLen; j++ {
			total := 0
			count := 0

			// 利用双层遍历限定九宫格范围
			startCol := i - 1
			if startCol <= 0 {
				startCol = 0
			}
			endCol := i + 1
			if endCol >= colLen-1 {
				endCol = colLen - 1
			}

			startRow := j - 1
			if startRow <= 0 {
				startRow = 0
			}
			endRow := j + 1
			if endRow >= rowLen-1 {
				endRow = rowLen - 1
			}

			for n := startCol; n <= endCol; n++ {
				for m := startRow; m <= endRow; m++ {
					total += img[n][m]
					count += 1
				}
			}

			row = append(row, total/count)
		}
		res = append(res, row)
	}

	return res
}
