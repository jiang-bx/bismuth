package graph

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestArrayNesting(t *testing.T) {
	utils.TestWarp("565 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		params3 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, ArrayNesting(params1) == res)
		}

		params1 = []int{5, 4, 0, 3, 1, 6, 2}
		res = 4
		testTemp()
	})
}

func TestLetterCombinations(t *testing.T) {
	utils.TestWarp("17 测试用例", func() {
		params1 := ""
		params2 := []int{}
		params3 := []int{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(LetterCombinations(params1), res))
		}

		params1 = "23"
		res = []string{"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"}
		testTemp()

		params1 = ""
		res = []string{}
		testTemp()

		params1 = "2"
		res = []string{"a", "b", "c"}
		testTemp()
	})
}

func TestIntegerReplacement(t *testing.T) {
	utils.TestWarp("397 测试用例", func() {
		params1 := 1
		params2 := []int{}
		params3 := []int{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, IntegerReplacement(params1) == res)
		}

		params1 = 8
		res = 3
		testTemp()

		params1 = 7
		res = 4
		testTemp()

		params1 = 4
		res = 2
		testTemp()

		params1 = 1234
		res = 14
		testTemp()
	})
}

func TestCountArrangement(t *testing.T) {
	utils.TestWarp("526 测试用例", func() {
		params1 := 1
		params2 := []int{}
		params3 := []int{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, CountArrangement(params1) == res)
		}

		params1 = 2
		res = 2
		testTemp()

		params1 = 1
		res = 1
		testTemp()

		params1 = 5
		res = 10
		testTemp()
	})
}

func TestReadBinaryWatch(t *testing.T) {
	utils.TestWarp("401 测试用例", func() {
		params1 := 1
		params2 := []int{}
		params3 := []int{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(ReadBinaryWatch(params1), res))
		}

		params1 = 1
		res = []string{"0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"}
		testTemp()

		params1 = 9
		res = []string{}
		testTemp()
	})
}
