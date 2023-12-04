package array_count

import (
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestFindErrorNums(t *testing.T) {
	utils.TestWarp("[1, 2, 2, 4] 返回 [2, 3]", func() {
		if !reflect.DeepEqual(FindErrorNums([]int{1, 2, 2, 4}), []int{2, 3}) {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1, 1] 返回 [1, 2]", func() {
		if !reflect.DeepEqual(FindErrorNums([]int{1, 1}), []int{1, 2}) {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[2, 3, 2] 返回 [2, 1]", func() {
		if !reflect.DeepEqual(FindErrorNums([]int{2, 3, 2}), []int{2, 1}) {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})
}

func TestFindShortestSubArray(t *testing.T) {
	utils.TestWarp("[1, 2, 2, 3, 1] should return 2", func() {
		if FindShortestSubArray([]int{1, 2, 2, 3, 1}) != 2 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1, 2, 2, 3, 1, 4, 2] should return 6", func() {
		if FindShortestSubArray([]int{1, 2, 2, 3, 1, 4, 2}) != 6 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1] should return 1", func() {
		if FindShortestSubArray([]int{1}) != 1 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[2,1,1,2,1,3,3,3,1,3,1,3,2] should return 7", func() {
		if FindShortestSubArray([]int{2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2}) != 7 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})
}

func TestFindDisappearedNumbers(t *testing.T) {
	utils.TestWarp("[4,3,2,7,8,2,3,1] should return [5, 6]", func() {
		if !reflect.DeepEqual(FindDisappearedNumbers([]int{4, 3, 2, 7, 8, 2, 3, 1}), []int{5, 6}) {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1, 1] should return [2]", func() {
		if !reflect.DeepEqual(FindDisappearedNumbers([]int{1, 1}), []int{2}) {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})
}

func TestFindDuplicates(t *testing.T) {
	utils.TestWarp("[4,3,2,7,8,2,3,1] should return [2, 3]", func() {
		if !reflect.DeepEqual(FindDuplicates([]int{4, 3, 2, 7, 8, 2, 3, 1}), []int{2, 3}) {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1, 1, 2] should return [2]", func() {
		if !reflect.DeepEqual(FindDuplicates([]int{1, 1, 2}), []int{1}) {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1] should return []", func() {
		if !reflect.DeepEqual(FindDuplicates([]int{1}), []int{}) {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})
}

func TestFirstMissingPositive(t *testing.T) {

	utils.TestWarp("[1,2,0] should return 3", func() {
		if FirstMissingPositive([]int{1, 2, 0}) != 3 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[4, 3, 1, 2] should return 5", func() {
		if FirstMissingPositive([]int{4, 3, 1, 2}) != 5 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[3,4,-1,1] should return 2", func() {
		if FirstMissingPositive([]int{3, 4, -1, 1}) != 2 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[7,8,9,11,12] should return 1", func() {
		if FirstMissingPositive([]int{7, 8, 9, 11, 12}) != 1 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	
}

func TestHIndex(t *testing.T) {
	utils.TestWarp("[1, 3, 1] should return 1", func() {
		if HIndex([]int{1, 3, 1}) != 1 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[3,0,6,1,5] should return 3", func() {
		if HIndex([]int{3, 0, 6, 1, 5}) != 3 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[3,0,6] should return 2", func() {
		if HIndex([]int{3, 0, 6}) != 2 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[3,0] should return 1", func() {
		if HIndex([]int{3, 0}) != 1 {
			t.Errorf("不通过")
		} else {
			t.Logf("通过")
		}
	})
}
