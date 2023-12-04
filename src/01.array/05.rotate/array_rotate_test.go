package array_rotate

import (
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestRotate(t *testing.T) {
	arr11 := []int{1, 2, 3, 4, 5, 6, 7}
	Rotate(arr11, 3)
	arr12 := []int{5, 6, 7, 1, 2, 3, 4}
	utils.TestCondition(t, "[1,2,3,4,5,6,7], k=3  should return [5,6,7,1,2,3,4]", reflect.DeepEqual(arr11, arr12))

	arr21 := []int{-1, -100, 3, 99}
	Rotate(arr21, 2)
	arr22 := []int{3, 99, -1, -100}
	utils.TestCondition(t, "[-1,-100,3,99], k=2  should return [3,99,-1,-100]", reflect.DeepEqual(arr21, arr22))
}

func TestMaxRotateFunction(t *testing.T) {
	utils.TestCondition(t, "[4, 3, 2, 6] should return 26", MaxRotateFunction([]int{4, 3, 2, 6}) == 26)
}
