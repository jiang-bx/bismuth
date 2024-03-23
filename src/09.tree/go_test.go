package tree

import (
	"encoding/json"
	"leetcode/src/utils"
	"math"
	"testing"
)

func TestFindDuplicate(t *testing.T) {
	utils.TestWarp("100 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, IsSameTree(CreateTree(params1), CreateTree(params2)) == res)
		}

		params1 = []int{1, 2, 3}
		params2 = []int{1, 2, 3}
		res = true
		testTemp()

		params1 = []int{1, 2}
		params2 = []int{1, math.MinInt, 2}
		res = false
		testTemp()

		params1 = []int{1, 2, 1}
		params2 = []int{1, 1, 2}
		res = false
		testTemp()
	})
}

func TestCountNodes(t *testing.T) {
	utils.TestWarp("222 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, CountNodes(CreateTree(params1)) == res)
		}

		params1 = []int{1, 2, 3, 4, 5, 6}
		res = 6
		testTemp()

		params1 = []int{}
		res = 0
		testTemp()

		params1 = []int{1}
		res = 1
		testTemp()
	})
}

func TestIsSymmetric(t *testing.T) {
	utils.TestWarp("101 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, IsSymmetric(CreateTree(params1)) == res)
		}

		params1 = []int{1, 2, 2, 3, 4, 4, 3}
		res = true
		testTemp()

		params1 = []int{1, 2, 2, math.MinInt, 3, math.MinInt, 3}
		res = false
		testTemp()
	})
}

func TestInvertTree(t *testing.T) {
	utils.TestWarp("226 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)
			p2 := CreateTree(res)

			utils.TestCondition(t, desc, IsSameTree(InvertTree(p1), p2) == true)
		}

		params1 = []int{4, 2, 7, 1, 3, 6, 9}
		res = []int{4, 7, 2, 9, 6, 3, 1}
		testTemp()

		params1 = []int{2, 1, 3}
		res = []int{2, 3, 1}
		testTemp()

		params1 = []int{}
		res = []int{}
		testTemp()
	})
}

func TestPathSum(t *testing.T) {
	utils.TestWarp("437 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, PathSum(p1, params2) == res)
		}

		params1 = []int{10, 5, -3, 3, 2, math.MinInt, 11, 3, -2, math.MinInt, 1}
		params2 = 8
		res = 3
		testTemp()

		params1 = []int{5, 4, 8, 11, math.MinInt, 13, 4, 7, 2, math.MinInt, math.MinInt, 5, 1}
		params2 = 22
		res = 3
		testTemp()
	})
}
