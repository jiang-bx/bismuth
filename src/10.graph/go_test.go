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

func TestIsValidSudoku(t *testing.T) {
	utils.TestWarp("36 测试用例", func() {
		params1 := [][]string{}
		params2 := []int{}
		params3 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p := [][]byte{}

			for _, v1 := range params1 {
				a := []byte{}
				for _, v2 := range v1 {
					a = append(a, []byte(v2)...)
				}
				p = append(p, a)
			}

			utils.TestCondition(t, desc, IsValidSudoku(p) == res)
		}

		params1 = [][]string{
			{"5", "3", ".", ".", "7", ".", ".", ".", "."},
			{"6", ".", ".", "1", "9", "5", ".", ".", "."},
			{".", "9", "8", ".", ".", ".", ".", "6", "."},
			{"8", ".", ".", ".", "6", ".", ".", ".", "3"},
			{"4", ".", ".", "8", ".", "3", ".", ".", "1"},
			{"7", ".", ".", ".", "2", ".", ".", ".", "6"},
			{".", "6", ".", ".", ".", ".", "2", "8", "."},
			{".", ".", ".", "4", "1", "9", ".", ".", "5"},
			{".", ".", ".", ".", "8", ".", ".", "7", "9"},
		}
		res = true
		testTemp()

		params1 = [][]string{
			{"8", "3", ".", ".", "7", ".", ".", ".", "."},
			{"6", ".", ".", "1", "9", "5", ".", ".", "."},
			{".", "9", "8", ".", ".", ".", ".", "6", "."},
			{"8", ".", ".", ".", "6", ".", ".", ".", "3"},
			{"4", ".", ".", "8", ".", "3", ".", ".", "1"},
			{"7", ".", ".", ".", "2", ".", ".", ".", "6"},
			{".", "6", ".", ".", ".", ".", "2", "8", "."},
			{".", ".", ".", "4", "1", "9", ".", ".", "5"},
			{".", ".", ".", ".", "8", ".", ".", "7", "9"},
		}
		res = false
		testTemp()
	})
}

func TestSolveSudoku(t *testing.T) {
	utils.TestWarp("37 测试用例", func() {
		params1 := [][]string{}
		params2 := []int{}
		params3 := []int{}
		res := [][]string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p := [][]byte{}

			for _, v1 := range params1 {
				a := []byte{}
				for _, v2 := range v1 {
					a = append(a, []byte(v2)...)
				}
				p = append(p, a)
			}

			r := [][]byte{}
			for _, v1 := range res {
				a := []byte{}
				for _, v2 := range v1 {
					a = append(a, []byte(v2)...)
				}
				r = append(r, a)
			}

			SolveSudoku(p)

			utils.TestCondition(t, desc, reflect.DeepEqual(p, r))
		}

		params1 = [][]string{
			{"5", "3", ".", ".", "7", ".", ".", ".", "."},
			{"6", ".", ".", "1", "9", "5", ".", ".", "."},
			{".", "9", "8", ".", ".", ".", ".", "6", "."},
			{"8", ".", ".", ".", "6", ".", ".", ".", "3"},
			{"4", ".", ".", "8", ".", "3", ".", ".", "1"},
			{"7", ".", ".", ".", "2", ".", ".", ".", "6"},
			{".", "6", ".", ".", ".", ".", "2", "8", "."},
			{".", ".", ".", "4", "1", "9", ".", ".", "5"},
			{".", ".", ".", ".", "8", ".", ".", "7", "9"},
		}
		res = [][]string{
			{"5", "3", "4", "6", "7", "8", "9", "1", "2"},
			{"6", "7", "2", "1", "9", "5", "3", "4", "8"},
			{"1", "9", "8", "3", "4", "2", "5", "6", "7"},
			{"8", "5", "9", "7", "6", "1", "4", "2", "3"},
			{"4", "2", "6", "8", "5", "3", "7", "9", "1"},
			{"7", "1", "3", "9", "2", "4", "8", "5", "6"},
			{"9", "6", "1", "5", "3", "7", "2", "8", "4"},
			{"2", "8", "7", "4", "1", "9", "6", "3", "5"},
			{"3", "4", "5", "2", "8", "6", "1", "7", "9"},
		}
		testTemp()
	})
}

func TestSolveNQueens(t *testing.T) {
	utils.TestWarp("51 测试用例", func() {
		params1 := 1
		params2 := []int{}
		params3 := []int{}
		res := [][]string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(SolveNQueens(params1), res))
		}

		params1 = 4
		res = [][]string{
			{
				".Q..",
				"...Q",
				"Q...",
				"..Q.",
			},
			{
				"..Q.",
				"Q...",
				"...Q",
				".Q..",
			},
		}
		testTemp()

		params1 = 1
		res = [][]string{{"Q"}}
		testTemp()
	})
}

func TestCombine(t *testing.T) {
	utils.TestWarp("77 测试用例", func() {
		params1 := 1
		params2 := 1
		params3 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(Combine(params1, params2), res))
		}

		params1 = 4
		params2 = 2
		res = [][]int{
			{1, 2},
			{1, 3},
			{1, 4},
			{2, 3},
			{2, 4},
			{3, 4},
		}
		testTemp()

		params1 = 1
		params2 = 1
		res = [][]int{{1}}
		testTemp()
	})
}

func TestCombinationSum(t *testing.T) {
	utils.TestWarp("39 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(CombinationSum(params1, params2), res))
		}

		params1 = []int{2, 3, 6, 7}
		params2 = 7
		res = [][]int{
			{2, 2, 3},
			{7},
		}
		testTemp()

		params1 = []int{2, 3, 5}
		params2 = 8
		res = [][]int{
			{2, 2, 2, 2},
			{2, 3, 3},
			{3, 5},
		}
		testTemp()

		params1 = []int{2}
		params2 = 1
		res = [][]int{}
		testTemp()
	})
}

func TestCombinationSum3(t *testing.T) {
	utils.TestWarp("216 测试用例", func() {
		params1 := 1
		params2 := 1
		params3 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(CombinationSum3(params1, params2), res))
		}

		params1 = 3
		params2 = 7
		res = [][]int{
			{1, 2, 4},
		}
		testTemp()

		params1 = 3
		params2 = 9
		res = [][]int{
			{1, 2, 6},
			{1, 3, 5},
			{2, 3, 4},
		}
		testTemp()

		params1 = 4
		params2 = 1
		res = [][]int{}
		testTemp()
	})
}

func TestCombinationSum21(t *testing.T) {
	utils.TestWarp("40 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(CombinationSum21(params1, params2), res))
		}

		params1 = []int{10, 1, 2, 7, 6, 1, 5}
		params2 = 8
		res = [][]int{
			{1, 1, 6},
			{1, 2, 5},
			{1, 7},
			{2, 6},
		}
		testTemp()

		params1 = []int{2, 5, 2, 1, 2}
		params2 = 5
		res = [][]int{
			{1, 2, 2},
			{5},
		}
		testTemp()
	})
}

func TestPermute(t *testing.T) {
	utils.TestWarp("46 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(Permute(params1), res))
		}

		params1 = []int{1, 2, 3}
		res = [][]int{
			{1, 2, 3},
			{1, 3, 2},
			{2, 1, 3},
			{2, 3, 1},
			{3, 1, 2},
			{3, 2, 1},
		}
		testTemp()

		params1 = []int{0, 1}
		res = [][]int{
			{0, 1},
			{1, 0},
		}
		testTemp()

		params1 = []int{1}
		res = [][]int{
			{1},
		}
		testTemp()
	})
}

func TestPermuteUnique(t *testing.T) {
	utils.TestWarp("47 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(PermuteUnique(params1), res))
		}

		params1 = []int{1, 2, 3}
		res = [][]int{
			{1, 2, 3},
			{1, 3, 2},
			{2, 1, 3},
			{2, 3, 1},
			{3, 1, 2},
			{3, 2, 1},
		}
		testTemp()

		params1 = []int{1, 1, 2}
		res = [][]int{
			{1, 1, 2},
			{1, 2, 1},
			{2, 1, 1},
		}
		testTemp()

		params1 = []int{1}
		res = [][]int{
			{1},
		}
		testTemp()
	})
}

func TestNextPermutation(t *testing.T) {
	utils.TestWarp("31 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			NextPermutation(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(params1, res))
		}

		params1 = []int{1, 2, 3}
		res = []int{1, 3, 2}

		testTemp()

		params1 = []int{3, 2, 1}
		res = []int{1, 2, 3}
		testTemp()

		params1 = []int{1, 1, 5}
		res = []int{1, 5, 1}
		testTemp()
	})
}
