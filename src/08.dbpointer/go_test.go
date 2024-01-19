package dbpointer

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestMaximalRectangle(t *testing.T) {
	utils.TestWarp("345 测试用例", func() {
		params1 := ""
		params2 := []int{}
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ReverseVowels(params1) == res)
		}

		params1 = "hello"
		res = "holle"
		testTemp()

		params1 = "leetcode"
		res = "leotcede"
		testTemp()
	})
}

func TestValidPalindrome(t *testing.T) {
	utils.TestWarp("680 测试用例", func() {
		params1 := ""
		params2 := []int{}
		res := true
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ValidPalindrome(params1) == res)
		}

		params1 = "aba"
		res = true
		testTemp()

		params1 = "abca"
		res = true
		testTemp()

		params1 = "abc"
		res = false
		testTemp()
	})
}

func TestTwoSum(t *testing.T) {
	utils.TestWarp("167 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(TwoSum(params1, params2), res))
		}

		params1 = []int{2, 7, 11, 15}
		params2 = 9
		res = []int{1, 2}
		testTemp()

		params1 = []int{2, 3, 4}
		params2 = 6
		res = []int{1, 3}
		testTemp()

		params1 = []int{-1, 0}
		params2 = -1
		res = []int{1, 2}
		testTemp()
	})
}

func TestThreeSum(t *testing.T) {
	utils.TestWarp("15 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(ThreeSum(params1), res))
		}

		params1 = []int{-1, 0, 1, 2, -1, -4}
		res = [][]int{
			{-1, -1, 2},
			{-1, 0, 1},
		}
		testTemp()

		params1 = []int{0, 1, 1}
		res = [][]int{}
		testTemp()

		params1 = []int{0, 0, 0}
		res = [][]int{
			{0, 0, 0},
		}
		testTemp()
	})
}

func TestThreeSumClosest(t *testing.T) {
	utils.TestWarp("16 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ThreeSumClosest(params1, params2) == res)
		}

		params1 = []int{-1, 2, 1, -4}
		params2 = 1
		res = 2
		testTemp()

		params1 = []int{0, 0, 0}
		params2 = 1
		res = 0
		testTemp()

		params1 = []int{2, 3, 8, 9, 10}
		params2 = 16
		res = 15
		testTemp()
	})
}

func TestMaxArea(t *testing.T) {
	utils.TestWarp("11 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MaxArea(params1) == res)
		}

		params1 = []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
		res = 49
		testTemp()

		params1 = []int{1, 1}
		res = 1
		testTemp()
	})
}
