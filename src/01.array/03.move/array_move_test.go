package array_move

import (
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestMinMoves(t *testing.T) {
	utils.TestWarp("{1, 2, 3} should return 3", func() {
		if MinMoves([]int{1, 2, 3}) != 3 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("{1, 1, 1} should return 0", func() {
		if MinMoves([]int{1, 1, 1}) != 0 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})
}

func TestCheckPossibility(t *testing.T) {
	utils.TestCondition(t, "{4, 2, 3} should return true", CheckPossibility([]int{4, 2, 3}))
	utils.TestCondition(t, "{4, 2, 1} should return false", !CheckPossibility([]int{4, 2, 1}))
	utils.TestCondition(t, "{3, 4, 2, 3} should return false", !CheckPossibility([]int{3, 4, 2, 3}))
	utils.TestCondition(t, "{5,7,1,8} should return true", CheckPossibility([]int{5, 7, 1, 8}))
	utils.TestCondition(t, "{-1, 4, 2, 3} should return true", CheckPossibility([]int{-1, 4, 2, 3}))
}

func TestMoveZeroes(t *testing.T) {
	arr1 := []int{1, 0, 1}
	MoveZeroes(arr1)
	utils.TestCondition(t, "[1,0,1] should return [1,1,0]", reflect.DeepEqual(arr1, []int{1, 1, 0}))

	arr2 := []int{0, 1, 0, 3, 12}
	MoveZeroes(arr2)
	utils.TestCondition(t, "[0,1,0,3,12] should return [1,3,12,0,0]", reflect.DeepEqual(arr2, []int{1, 3, 12, 0, 0}))

	arr3 := []int{0, 0, 0, 3, 12}
	MoveZeroes(arr3)
	utils.TestCondition(t, "[0,0,0,3,12] should return [3,12,0,0,0]", reflect.DeepEqual(arr3, []int{3, 12, 0, 0, 0}))
}
