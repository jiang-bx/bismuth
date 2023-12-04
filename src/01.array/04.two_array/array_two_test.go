package array_two

import (
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestGenerate(t *testing.T) {
	arr1 := [][]int{
		{1},
		{1, 1},
		{1, 2, 1},
		{1, 3, 3, 1},
		{1, 4, 6, 4, 1},
	}
	arr11 := Generate(5)
	utils.TestCondition(t, "row = 5时", reflect.DeepEqual(arr1, arr11))

	arr2 := [][]int{
		{1},
	}
	arr22 := Generate(1)
	utils.TestCondition(t, "row = 1时", reflect.DeepEqual(arr2, arr22))
}

func TestGetRow(t *testing.T) {
	utils.TestCondition(t, "3 should return []int{1,3,3,1}", reflect.DeepEqual(GetRow(3), []int{1, 3, 3, 1}))

	utils.TestCondition(t, "0 should return []int{1}", reflect.DeepEqual(GetRow(0), []int{1}))

	utils.TestCondition(t, "2 should return []int{1,2,1}", reflect.DeepEqual(GetRow(2), []int{1, 2, 1}))

	utils.TestCondition(t, "1 should return []int{1,1}", reflect.DeepEqual(GetRow(1), []int{1, 1}))
}

func TestImageSmoother(t *testing.T) {
	arr11 := [][]int{
		{1, 1, 1},
		{1, 0, 1},
		{1, 1, 1},
	}

	arr12 := [][]int{
		{0, 0, 0},
		{0, 0, 0},
		{0, 0, 0},
	}

	utils.TestCondition(t, "arr11 should return arr12", reflect.DeepEqual(ImageSmoother(arr11), arr12))

	arr21 := [][]int{
		{100, 200, 100},
		{200, 50, 200},
		{100, 200, 100},
	}

	arr22 := [][]int{
		{137, 141, 137},
		{141, 138, 141},
		{137, 141, 137},
	}

	utils.TestCondition(t, "arr21 should return arr22", reflect.DeepEqual(ImageSmoother(arr21), arr22))
}

func TestMaxCount(t *testing.T) {
	successBool1 := MaxCount(3, 3, [][]int{{2, 2}, {3, 3}}) == 4
	utils.TestCondition(t, "m = 3, n = 3, ops = [[2,2],[3,3]] should return 4", successBool1)

	successBool2 := MaxCount(3, 3, [][]int{{2, 2}, {3, 3}, {3, 3}, {3, 3}, {2, 2}, {3, 3}, {3, 3}, {3, 3}, {2, 2}, {3, 3}, {3, 3}, {3, 3}}) == 4
	utils.TestCondition(t, "m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]] should return 4", successBool2)

	successBool3 := MaxCount(3, 3, [][]int{}) == 9
	utils.TestCondition(t, "m = 3, n = 3, ops = [] should return 9", successBool3)

	successBool4 := MaxCount(39999, 39999, [][]int{{19999, 19999}}) == 399960001
	utils.TestCondition(t, "39999 * 39999 and operations is [[19999, 19999]] matrix should return 399960001", successBool4)

	successBool5 := MaxCount(18, 3, [][]int{{16, 1}, {14, 3}, {14, 2}, {4, 1}, {10, 1}, {11, 1}, {8, 3}, {16, 2}, {13, 1}, {8, 3}, {2, 2}, {9, 1}, {3, 1}, {2, 2}, {6, 3}}) == 2
	utils.TestCondition(t, "18 * 3 and operations is [[16,1],[14,3],[14,2],[4,1],[10,1],[11,1],[8,3],[16,2],[13,1],[8,3],[2,2],[9,1],[3,1],[2,2],[6,3]] matrix should return 2", successBool5)
}

func TestCountBattleships(t *testing.T) {

	utils.TestCondition(t, `[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]] should return 2`, CountBattleships([][]byte{{'X', '.', '.', 'X'}, {'.', '.', '.', 'X'}, {'.', '.', '.', 'X'}}) == 2)

	utils.TestCondition(t, `[["X",".",".","X"],[".",".",".","X"],["X","X",".","X"]] should return 3`, CountBattleships([][]byte{{'X', '.', '.', 'X'}, {'.', '.', '.', 'X'}, {'X', 'X', '.', 'X'}}) == 3)

	utils.TestCondition(t, `[["."]] should return 0`, CountBattleships([][]byte{{'.'}}) == 0)
}
