package array_greedy

import (
	"encoding/json"
	"leetcode/src/utils"
	"testing"
)

func TestValidIPAddress(t *testing.T) {
	utils.TestWarp("374 测试用例", func() {
		params1 := 1
		params2 := [][]int{}
		params3 := [][]string{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, GuessNumberWarp(params1, res) == res)
		}

		params1 = 10
		res = 6
		testTemp()

		params1 = 1
		res = 1
		testTemp()

		params1 = 2
		res = 1
		testTemp()
	})
}

func TestSearchInsert(t *testing.T) {
	utils.TestWarp("35 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := [][]string{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, SearchInsert(params1, params2) == res)
		}

		params1 = []int{1, 3, 5, 6}
		params2 = 5
		res = 2
		testTemp()

		params1 = []int{1, 3, 5, 6}
		params2 = 2
		res = 1
		testTemp()

		params1 = []int{1, 3, 5, 6}
		params2 = 7
		res = 4
		testTemp()
	})
}
