package ArrayTwoTransform

import (
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestMatrixReshape(t *testing.T) {
	utils.TestCondition(t, "mat = [[1,2],[3,4]], r = 1, c = 4 should return [[1,2,3,4]]", reflect.DeepEqual(MatrixReshape([][]int{{1, 2}, {3, 4}}, 1, 4), [][]int{{1, 2, 3, 4}}))

	utils.TestCondition(t, "mat = [[1,2],[3,4]], r = 2, c = 4 should return [[1,2],[3,4]]", reflect.DeepEqual(MatrixReshape([][]int{{1, 2}, {3, 4}}, 2, 4), [][]int{{1, 2}, {3, 4}}))

	utils.TestCondition(t, "mat = [[1,2],[3,4]], r = 4, c = 1 should return [[1],[2],[3],[4]]", reflect.DeepEqual(MatrixReshape([][]int{{1, 2}, {3, 4}}, 4, 1), [][]int{{1}, {2}, {3}, {4}}))
}

func TestRotate(t *testing.T) {
	arr1 := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
	Rotate(arr1)
	utils.TestCondition(t, "[[1,2,3],[4,5,6],[7,8,9]] should return [[7,4,1],[8,5,2],[9,6,3]]", reflect.DeepEqual(arr1, [][]int{{7, 4, 1}, {8, 5, 2}, {9, 6, 3}}))

	arr2 := [][]int{
		{5, 1, 9, 11}, {2, 4, 8, 10}, {13, 3, 6, 7}, {15, 14, 12, 16},
	}
	Rotate(arr2)
	arr22 := [][]int{
		{15, 13, 2, 5}, {14, 3, 4, 1}, {12, 6, 8, 9}, {16, 7, 10, 11},
	}
	utils.TestCondition(t, "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] should return [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]", reflect.DeepEqual(arr2, arr22))
}

func TestSetZeroes(t *testing.T) {
	arr1 := [][]int{{1, 1, 1}, {1, 0, 1}, {1, 1, 1}}
	SetZeroes(arr1)
	utils.TestCondition(t, "[[1,1,1],[1,0,1],[1,1,1]] should return [[1,0,1],[0,0,0],[1,0,1]]", reflect.DeepEqual(arr1, [][]int{{1, 0, 1}, {0, 0, 0}, {1, 0, 1}}))

	arr2 := [][]int{
		{0, 1, 2, 0}, {3, 4, 5, 2}, {1, 3, 1, 5},
	}
	SetZeroes(arr2)
	arr22 := [][]int{
		{0, 0, 0, 0}, {0, 4, 5, 0}, {0, 3, 1, 0},
	}
	utils.TestCondition(t, "[[0,1,2,0],[3,4,5,2],[1,3,1,5]] should return [[0,0,0,0],[0,4,5,0],[0,3,1,0]]", reflect.DeepEqual(arr2, arr22))
}

func TestGameOfLife(t *testing.T) {
	arr11 := [][]int{
		{0, 1, 0},
		{0, 0, 1},
		{1, 1, 1},
		{0, 0, 0},
	}

	GameOfLife(arr11)

	arr12 := [][]int{
		{0, 0, 0},
		{1, 0, 1},
		{0, 1, 1},
		{0, 1, 0},
	}

	utils.TestCondition(t, "[[0,1,0],[0,0,1],[1,1,1],[0,0,0]] should return [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]", reflect.DeepEqual(arr11, arr12))

	arr21 := [][]int{
		{1, 1},
		{1, 0},
	}

	GameOfLife(arr21)

	arr22 := [][]int{
		{1, 1},
		{1, 1},
	}

	utils.TestCondition(t, "[[1,1],[1,0]] should return [[1,1],[1,1]]", reflect.DeepEqual(arr21, arr22))
}
