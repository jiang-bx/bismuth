package array_two_each

import (
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestSpiralOrder(t *testing.T) {

	arr11 := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}
	arr12 := []int{1, 2, 3, 6, 9, 8, 7, 4, 5}

	name1 := "[[1,2,3],[4,5,6],[7,8,9]] should return [1,2,3,6,9,8,7,4,5]"

	utils.TestCondition(t, name1, reflect.DeepEqual(SpiralOrder(arr11), arr12))

	arr21 := [][]int{
		{1, 2, 3, 4},
		{5, 6, 7, 8},
		{9, 10, 11, 12},
	}
	arr22 := []int{1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7}

	name2 := "[[1,2,3,4],[5,6,7,8],[9,10,11,12]] should return [1,2,3,4,8,12,11,10,9,5,6,7]"

	utils.TestCondition(t, name2, reflect.DeepEqual(SpiralOrder(arr21), arr22))
}

func TestGenerateMatrix(t *testing.T) {
	utils.TestCondition(t, "3 should return [[1, 2, 3], [8, 9, 4], [7, 6, 5]]", reflect.DeepEqual(GenerateMatrix(3), [][]int{
		{1, 2, 3},
		{8, 9, 4},
		{7, 6, 5},
	}))

	utils.TestCondition(t, "1 should return [[1]]", reflect.DeepEqual(GenerateMatrix(1), [][]int{
		{1},
	}))
}

func TestFindDiagonalOrder(t *testing.T) {
	utils.TestCondition(t, "[[1,2,3],[4,5,6],[7,8,9]] should return [1,2,4,7,5,3,6,8,9]", reflect.DeepEqual(FindDiagonalOrder([][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}), []int{1, 2, 4, 7, 5, 3, 6, 8, 9}))

	utils.TestCondition(t, "[[1,2],[3,4]] should return [1,2,3,4]", reflect.DeepEqual(FindDiagonalOrder([][]int{
		{1, 2},
		{3, 4},
	}), []int{1, 2, 3, 4}))
}
