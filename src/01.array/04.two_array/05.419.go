package array_two

/**
 * 给定一个二维的甲板， 请计算其中有多少艘战舰。
 * 战舰用 'X'表示，空位用 '.'表示。
 * 你需要遵守以下规则：
 *
 * 给你一个有效的甲板，仅由战舰或者空位组成。
 * 战舰只能水平或者垂直放置。
 * 换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1 (N 行, 1 列)组成，
 * 其中N可以是任意大小。
 * 两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。
 *
 * 示例 :
 * X..X
 * ...X
 * ...X
 *
 * 在上面的甲板中有2艘战舰。
 *
 * 无效样例 :
 * ...X
 * XXXX
 * ...X
 *
 * 你不会收到这样的无效甲板 -
 * 因为战舰之间至少会有一个空位将它们分开。
 *
 * 进阶:
 * 你可以用一次扫描算法，只使用O(1)额外空间，并且不修改甲板的值来解决这个问题吗？
 */

func CountBattleships(board [][]byte) int {
	// count := 0
	// rowLen := len(board)

	// for i := 0; i < rowLen; i++ {
	// 	colLen := len(board[i])
	// 	for j := 0; j < colLen; j++ {
	// 		if board[i][j] != 'X' {
	// 			continue
	// 		}

	// 		hasBottom := i+1 < rowLen && board[i+1][j] != 'X'
	// 		hasLeft := j+1 < colLen && board[i][j+1] != 'X'

	// 		// 判断是否到最左侧, 下面没有的话
	// 		if j == colLen-1 && hasBottom {
	// 			// 最左侧, 下方不存在
	// 			count++
	// 		} else if i == rowLen-1 && hasLeft {
	// 			// 最下侧, 左侧不存在
	// 			count++
	// 		} else if hasBottom && hasLeft {
	// 			// 左边和下边都不存在
	// 			count++
	// 		} else if j == colLen-1 && rowLen-1 == i {
	// 			// 最后一个
	// 			count++
	// 		}
	// 	}
	// }

	// return count

	count := 0
	rowLen := len(board)

	for i := 0; i < rowLen; i++ {
		colLen := len(board[i])
		for j := 0; j < colLen; j++ {
			if board[i][j] == '.' {
				continue
			}

			// x 作为中间部分, 跳过
			if j > 0 && board[i][j-1] == 'X' {
				continue
			}

			// x 中间部分, 跳过
			if i > 0 && board[i-1][j] == 'X' {
				continue
			}

			count++
		}
	}

	return count
}
