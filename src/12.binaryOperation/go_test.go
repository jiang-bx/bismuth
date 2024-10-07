package binary_operation

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestSplitArray(t *testing.T) {
	utils.TestWarp("89 测试用例", func() {
		params1 := 1
		params2 := 1
		params3 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				reflect.DeepEqual(GrayCode(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = 2
			res = []int{0, 1, 3, 2}
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = 1
			res = []int{0, 1}
			testTemp()
		})

	})
}

func TestSingleNumber(t *testing.T) {
	utils.TestWarp("136 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				SingleNumber(params1) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{2, 2, 1}
			res = 1
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{4, 1, 2, 1, 2}
			res = 4
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = []int{1}
			res = 1
			testTemp()
		})

	})
}

func TestSingleNumber137(t *testing.T) {
	utils.TestWarp("137 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				SingleNumber137(params1) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{2, 2, 3, 2}
			res = 3
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{0, 1, 0, 1, 0, 1, 99}
			res = 99
			testTemp()
		})

	})
}

func TestSingleNumber260(t *testing.T) {
	utils.TestWarp("260 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				reflect.DeepEqual(SingleNumber260(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{1, 2, 1, 3, 2, 5}
			res = []int{5, 3}
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{-1, 0}
			res = []int{0, -1}
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = []int{0, 1}
			res = []int{0, 1}
			testTemp()
		})

	})
}

func TestMissingNumber(t *testing.T) {
	utils.TestWarp("268 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				reflect.DeepEqual(SingleNumber260(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{3, 0, 1}
			res = 2
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{0}
			res = 1
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = []int{0, 1}
			res = 2
			testTemp()
		})

		t.Run("test4", func(t *testing.T) {
			params1 = []int{9, 6, 4, 2, 3, 5, 7, 0, 1}
			res = 8
			testTemp()
		})

	})
}
