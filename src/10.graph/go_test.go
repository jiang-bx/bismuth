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

func TestNextGreaterElement(t *testing.T) {
	utils.TestWarp("556 测试用例", func() {
		params1 := 1
		params2 := 1
		params3 := []int{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, NextGreaterElement(params1) == res)
		}

		params1 = 12
		res = 21
		testTemp()

		params1 = 21
		res = -1
		testTemp()
	})
}

func TestGetPermutation(t *testing.T) {
	utils.TestWarp("60 测试用例", func() {
		params1 := 1
		params2 := 1
		params3 := []int{}
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, GetPermutation(params1, params2) == res)
		}

		params1 = 4
		params2 = 9
		res = "2314"
		testTemp()

		params1 = 3
		params2 = 3
		res = "213"
		testTemp()

		params1 = 3
		params2 = 1
		res = "123"
		testTemp()
	})
}

func TestFindSubsequences(t *testing.T) {
	utils.TestWarp("491 测试用例", func() {
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

			utils.TestCondition(t, desc, reflect.DeepEqual(FindSubsequences(params1), res))
		}

		params1 = []int{4, 6, 7, 7}
		res = [][]int{
			{4, 6},
			{4, 6, 7},
			{4, 6, 7, 7},
			{4, 7},
			{4, 7, 7},
			{6, 7},
			{6, 7, 7},
			{7, 7},
		}
		testTemp()

		params1 = []int{4, 4, 3, 2, 1}
		res = [][]int{{4, 4}}
		testTemp()
	})
}

func TestSubsets(t *testing.T) {
	utils.TestWarp("78 测试用例", func() {
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

			utils.TestCondition(t, desc, reflect.DeepEqual(Subsets(params1), res))
		}

		params1 = []int{1, 2, 3}
		res = [][]int{
			{},
			{1},
			{2},
			{1, 2},
			{3},
			{1, 3},
			{2, 3},
			{1, 2, 3},
		}
		testTemp()

		params1 = []int{0}
		res = [][]int{{}, {0}}
		testTemp()
	})
}

func TestSubsetsWithDup(t *testing.T) {
	utils.TestWarp("90 测试用例", func() {
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

			utils.TestCondition(t, desc, reflect.DeepEqual(SubsetsWithDup(params1), res))
		}

		params1 = []int{1, 2, 2}
		res = [][]int{
			{},
			{1},
			{1, 2},
			{1, 2, 2},
			{2},
			{2, 2},
		}
		testTemp()

		params1 = []int{0}
		res = [][]int{{}, {0}}
		testTemp()
	})
}

func TestExist(t *testing.T) {
	utils.TestWarp("79 测试用例", func() {
		params1 := [][]byte{}
		params2 := ""
		params3 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, Exist(params1, params2) == res)
		}

		params1 = [][]byte{
			{'A', 'B', 'C', 'E'},
			{'S', 'F', 'C', 'S'},
			{'A', 'D', 'E', 'E'},
		}
		params2 = "ABCCED"
		res = true
		testTemp()

		params1 = [][]byte{
			{'A', 'B', 'C', 'E'},
			{'S', 'F', 'C', 'S'},
			{'A', 'D', 'E', 'E'},
		}
		params2 = "SEE"
		res = true
		testTemp()

		params1 = [][]byte{
			{'A', 'B', 'C', 'E'},
			{'S', 'F', 'C', 'S'},
			{'A', 'D', 'E', 'E'},
		}
		params2 = "ABCB"
		res = false
		testTemp()

		params1 = [][]byte{
			{'A', 'B', 'C', 'E'},
			{'S', 'F', 'C', 'S'},
			{'A', 'D', 'E', 'E'},
		}
		params2 = "FS"
		res = true
		testTemp()

		params1 = [][]byte{
			{'a', 'a'},
		}
		params2 = "aaa"
		res = false
		testTemp()
	})
}

func TestRestoreIpAddresses(t *testing.T) {
	utils.TestWarp("93 测试用例", func() {
		params1 := ""
		params2 := ""
		params3 := []int{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(RestoreIpAddresses(params1), res))
		}

		params1 = "25525511135"
		res = []string{"255.255.11.135", "255.255.111.35"}
		testTemp()

		params1 = "0000"
		res = []string{"0.0.0.0"}
		testTemp()

		params1 = "101023"
		res = []string{"1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"}
		testTemp()
	})
}

func TestFindItinerary(t *testing.T) {
	utils.TestWarp("332 测试用例", func() {
		params1 := [][]string{}
		params2 := ""
		params3 := []int{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(FindItinerary(params1), res))
		}

		params1 = [][]string{
			{"MUC", "LHR"},
			{"JFK", "MUC"},
			{"SFO", "SJC"},
			{"LHR", "SFO"},
		}
		res = []string{"JFK", "MUC", "LHR", "SFO", "SJC"}
		testTemp()

		params1 = [][]string{
			{"JFK", "SFO"},
			{"JFK", "ATL"},
			{"SFO", "ATL"},
			{"ATL", "JFK"},
			{"ATL", "SFO"},
		}
		res = []string{"JFK", "ATL", "JFK", "SFO", "ATL", "SFO"}
		testTemp()
	})
}

func TestDiffWaysToCompute(t *testing.T) {
	utils.TestWarp("241 测试用例", func() {
		params1 := ""
		params2 := ""
		params3 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(DiffWaysToCompute(params1), res))
		}

		params1 = "2-1-1"
		res = []int{2, 0}
		testTemp()

		params1 = "2*3-4*5"
		res = []int{-34, -10, -14, -10, 10}
		testTemp()
	})
}

func TestAddOperators(t *testing.T) {
	utils.TestWarp("282 测试用例", func() {
		params1 := ""
		params2 := 0
		params3 := []int{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(AddOperators(params1, params2), res))
		}

		params1 = "123"
		params2 = 6
		res = []string{"1+2+3", "1*2*3"}
		testTemp()

		params1 = "232"
		params2 = 8
		res = []string{"2*3+2", "2+3*2"}
		testTemp()

		params1 = "3456237490"
		params2 = 9191
		res = []string{}
		testTemp()
	})
}

func TestJudgePoint24(t *testing.T) {
	utils.TestWarp("679 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, JudgePoint24(params1) == res)
		}

		params1 = []int{4, 1, 8, 7}
		res = true
		testTemp()

		params1 = []int{1, 2, 1, 2}
		res = false
		testTemp()
	})
}

func TestGenerateParenthesis(t *testing.T) {
	utils.TestWarp("22 测试用例", func() {
		params1 := 0
		params2 := 0
		params3 := []string{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(GenerateParenthesis(params1), res))
		}

		params1 = 3
		res = []string{"((()))", "(()())", "(())()", "()(())", "()()()"}
		testTemp()

		params1 = 1
		res = []string{"()"}
		testTemp()
	})
}

func TestRemoveInvalidParentheses(t *testing.T) {
	utils.TestWarp("301 测试用例", func() {
		params1 := ""
		params2 := 0
		params3 := []string{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(RemoveInvalidParentheses(params1), res))
		}

		params1 = "()())()"
		res = []string{"(())()", "()()()"}
		testTemp()

		params1 = "(a)())()"
		res = []string{"(a())()", "(a)()()"}
		testTemp()

		params1 = ")("
		res = []string{""}
		testTemp()
	})
}

func TestFindMinStep(t *testing.T) {
	utils.TestWarp("488 测试用例", func() {
		params1 := ""
		params2 := ""
		params3 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, FindMinStep(params1, params2) == res)
		}

		params1 = "WRRBBW"
		params2 = "RB"
		res = -1
		testTemp()

		params1 = "WWRRBBWW"
		params2 = "WRBRW"
		res = 2
		testTemp()

		params1 = "G"
		params2 = "GGGGG"
		res = 2
		testTemp()

		params1 = "RBYYBBRRB"
		params2 = "YRBGB"
		res = 3
		testTemp()
	})
}

func TestNumIslands(t *testing.T) {
	utils.TestWarp("200 测试用例", func() {
		params1 := [][]byte{}
		params2 := ""
		params3 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, NumIslands(params1) == res)
		}

		params1 = [][]byte{
			{'1', '1', '1', '1', '0'},
			{'1', '1', '0', '1', '0'},
			{'1', '1', '0', '0', '0'},
			{'0', '0', '0', '0', '0'},
		}
		res = 1
		testTemp()

		params1 = [][]byte{
			{'1', '1', '0', '0', '0'},
			{'1', '1', '0', '0', '0'},
			{'0', '0', '1', '0', '0'},
			{'0', '0', '0', '1', '1'},
		}
		res = 3
		testTemp()
	})
}

func TestMaxAreaOfIsland(t *testing.T) {
	utils.TestWarp("695 测试用例", func() {
		params1 := [][]int{}
		params2 := ""
		params3 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, MaxAreaOfIsland(params1) == res)
		}

		params1 = [][]int{
			{0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0},
			{0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
			{0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
			{0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0},
			{0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0},
			{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0},
			{0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
			{0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0},
		}
		res = 6
		testTemp()

		params1 = [][]int{
			{0, 0, 0, 0, 0, 0, 0, 0},
		}
		res = 0
		testTemp()
	})
}

func TestIslandPerimeter(t *testing.T) {
	utils.TestWarp("463 测试用例", func() {
		params1 := [][]int{}
		params2 := ""
		params3 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, IslandPerimeter(params1) == res)
		}

		params1 = [][]int{
			{0, 1, 0, 0},
			{1, 1, 1, 0},
			{0, 1, 0, 0},
			{1, 1, 0, 0},
		}
		res = 16
		testTemp()

		params1 = [][]int{
			{1},
		}
		res = 4
		testTemp()

		params1 = [][]int{
			{1, 0},
		}
		res = 4
		testTemp()

		params1 = [][]int{
			{1, 1},
			{1, 1},
		}
		res = 8
		testTemp()
	})
}

func TestUpdateMatrix(t *testing.T) {
	utils.TestWarp("542 测试用例", func() {
		params1 := [][]int{}
		params2 := ""
		params3 := []string{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(UpdateMatrix(params1), res))
		}

		params1 = [][]int{
			{0, 0, 0},
			{0, 1, 0},
			{0, 0, 0},
		}
		res = [][]int{
			{0, 0, 0},
			{0, 1, 0},
			{0, 0, 0},
		}
		testTemp()

		params1 = [][]int{
			{0, 0, 0},
			{0, 1, 0},
			{1, 1, 1},
		}
		res = [][]int{
			{0, 0, 0},
			{0, 1, 0},
			{1, 2, 1},
		}
		testTemp()
	})
}

func TestSolve(t *testing.T) {
	utils.TestWarp("130 测试用例", func() {
		params1 := [][]byte{}
		params2 := ""
		params3 := []string{}
		res := [][]byte{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			Solve(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(params1, res))
		}

		params1 = [][]byte{
			{'X', 'X', 'X', 'X'},
			{'X', 'O', 'O', 'X'},
			{'X', 'X', 'O', 'X'},
			{'X', 'O', 'X', 'X'},
		}
		res = [][]byte{
			{'X', 'X', 'X', 'X'},
			{'X', 'X', 'X', 'X'},
			{'X', 'X', 'X', 'X'},
			{'X', 'O', 'X', 'X'},
		}
		testTemp()

		params1 = [][]byte{
			{'X'},
		}
		res = [][]byte{
			{'X'},
		}
		testTemp()
	})
}

func TestPacificAtlantic(t *testing.T) {
	utils.TestWarp("417 测试用例", func() {
		params1 := [][]int{}
		params2 := ""
		params3 := []string{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(PacificAtlantic(params1), res))
		}

		params1 = [][]int{
			{1, 2, 2, 3, 5},
			{3, 2, 3, 4, 4},
			{2, 4, 5, 3, 1},
			{6, 7, 1, 4, 5},
			{5, 1, 1, 2, 4},
		}
		res = [][]int{
			{0, 4},
			{1, 3},
			{1, 4},
			{2, 2},
			{3, 0},
			{3, 1},
			{4, 0},
		}
		testTemp()

		params1 = [][]int{
			{2, 1},
			{1, 2},
		}
		res = [][]int{
			{0, 0},
			{0, 1},
			{1, 0},
			{1, 1},
		}
		testTemp()

		params1 = [][]int{
			{3, 3, 3, 3, 3, 3},
			{3, 0, 3, 3, 0, 3},
			{3, 3, 3, 3, 3, 3},
		}
		res = [][]int{
			{0, 0},
			{0, 1},
			{0, 2},
			{0, 3},
			{0, 4},
			{0, 5},
			{1, 0},
			{1, 2},
			{1, 3},
			{1, 5},
			{2, 0},
			{2, 1},
			{2, 2},
			{2, 3},
			{2, 4},
			{2, 5},
		}
		testTemp()
	})
}

func TestUpdateBoard(t *testing.T) {
	utils.TestWarp("529 测试用例", func() {
		params1 := [][]byte{}
		params2 := []int{}
		params3 := []string{}
		res := [][]byte{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(UpdateBoard(params1, params2), res))
		}

		params1 = [][]byte{
			{'E', 'E', 'E', 'E', 'E'},
			{'E', 'E', 'M', 'E', 'E'},
			{'E', 'E', 'E', 'E', 'E'},
			{'E', 'E', 'E', 'E', 'E'},
		}
		params2 = []int{3, 0}
		res = [][]byte{
			{'B', '1', 'E', '1', 'B'},
			{'B', '1', 'M', '1', 'B'},
			{'B', '1', '1', '1', 'B'},
			{'B', 'B', 'B', 'B', 'B'},
		}
		testTemp()

		params1 = [][]byte{
			{'B', '1', 'E', '1', 'B'},
			{'B', '1', 'M', '1', 'B'},
			{'B', '1', '1', '1', 'B'},
			{'B', 'B', 'B', 'B', 'B'},
		}
		params2 = []int{1, 2}
		res = [][]byte{
			{'B', '1', 'E', '1', 'B'},
			{'B', '1', 'X', '1', 'B'},
			{'B', '1', '1', '1', 'B'},
			{'B', 'B', 'B', 'B', 'B'},
		}
		testTemp()
	})
}

func TestLadderLength(t *testing.T) {
	utils.TestWarp("127 测试用例", func() {
		params1 := ""
		params2 := ""
		params3 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, LadderLength(params1, params2, params3) == res)
		}

		params1 = "hit"
		params2 = "cog"
		params3 = []string{"hot", "dot", "dog", "lot", "log", "cog"}
		res = 5
		testTemp()

		params1 = "hit"
		params2 = "cog"
		params3 = []string{"hot", "dot", "dog", "lot", "log"}
		res = 0
		testTemp()
	})
}

func TestFindLadders(t *testing.T) {
	utils.TestWarp("126 测试用例", func() {
		params1 := ""
		params2 := ""
		params3 := []string{}
		res := [][]string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(FindLadders(params1, params2, params3), res))
		}

		params1 = "hit"
		params2 = "cog"
		params3 = []string{"hot", "dot", "dog", "lot", "log", "cog"}
		res = [][]string{
			{"hit", "hot", "dot", "dog", "cog"},
			{"hit", "hot", "lot", "log", "cog"},
		}
		testTemp()

		params1 = "hit"
		params2 = "cog"
		params3 = []string{"hot", "dot", "dog", "lot", "log"}
		res = [][]string{}
		testTemp()
	})
}

func TestMinMutation(t *testing.T) {
	utils.TestWarp("433 测试用例", func() {
		params1 := ""
		params2 := ""
		params3 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, MinMutation(params1, params2, params3) == res)
		}

		params1 = "AACCGGTT"
		params2 = "AACCGGTA"
		params3 = []string{"AACCGGTA"}
		res = 1
		testTemp()

		params1 = "AACCGGTT"
		params2 = "AAACGGTA"
		params3 = []string{"AACCGGTA", "AACCGCTA", "AAACGGTA"}
		res = 2
		testTemp()

		params1 = "AAAAACCC"
		params2 = "AACCCCCC"
		params3 = []string{"AAAACCCC", "AAACCCCC", "AACCCCCC"}
		res = 3
		testTemp()
	})
}

func TestCutOffTree(t *testing.T) {
	utils.TestWarp("675 测试用例", func() {
		params1 := [][]int{}
		params2 := ""
		params3 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, CutOffTree(params1) == res)
		}

		params1 = [][]int{
			{1, 2, 3},
			{0, 0, 4},
			{7, 6, 5},
		}
		res = 6
		testTemp()

		params1 = [][]int{
			{1, 5, 3},
			{0, 0, 0},
			{7, 6, 2},
		}
		res = -1
		testTemp()

		params1 = [][]int{
			{2, 3, 4},
			{0, 0, 5},
			{8, 7, 6},
		}
		res = 6
		testTemp()
	})
}

func TestFindCircleNum(t *testing.T) {
	utils.TestWarp("547 测试用例", func() {
		params1 := [][]int{}
		params2 := ""
		params3 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, FindCircleNum(params1) == res)
		}

		params1 = [][]int{
			{1, 1, 0},
			{1, 1, 0},
			{0, 0, 1},
		}
		res = 2
		testTemp()

		params1 = [][]int{
			{1, 0, 0},
			{0, 1, 0},
			{0, 0, 1},
		}
		res = 3
		testTemp()
	})
}

func TestFindRedundantConnection(t *testing.T) {
	utils.TestWarp("684 测试用例", func() {
		params1 := [][]int{}
		params2 := ""
		params3 := []string{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(FindRedundantConnection(params1), res))
		}

		params1 = [][]int{
			{1, 2},
			{1, 3},
			{2, 3},
		}
		res = []int{2, 3}
		testTemp()

		params1 = [][]int{
			{1, 2},
			{2, 3},
			{3, 4},
			{1, 4},
			{1, 5},
		}
		res = []int{1, 4}
		testTemp()
	})
}

func TestFindRedundantDirectedConnection(t *testing.T) {
	utils.TestWarp("685 测试用例", func() {
		params1 := [][]int{}
		params2 := ""
		params3 := []string{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(FindRedundantDirectedConnection(params1), res))
		}

		params1 = [][]int{
			{1, 2},
			{1, 3},
			{2, 3},
		}
		res = []int{2, 3}
		testTemp()

		params1 = [][]int{
			{1, 2},
			{2, 3},
			{3, 4},
			{4, 1},
			{1, 5},
		}
		res = []int{4, 1}
		testTemp()
	})
}

func TestCalcEquation(t *testing.T) {
	utils.TestWarp("399 测试用例", func() {
		params1 := [][]string{}
		params2 := []float64{}
		params3 := [][]string{}
		res := []float64{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(CalcEquation(params1, params2, params3), res))
		}

		params1 = [][]string{
			{"a", "b"},
			{"b", "c"},
		}
		params2 = []float64{2.0, 3.0}
		params3 = [][]string{
			{"a", "c"},
			{"b", "a"},
			{"a", "e"},
			{"a", "a"},
			{"x", "x"},
		}
		res = []float64{6.00000, 0.50000, -1.00000, 1.00000, -1.00000}
		testTemp()

		params1 = [][]string{
			{"a", "b"},
			{"b", "c"},
			{"bc", "cd"},
		}
		params2 = []float64{1.5, 2.5, 5.0}
		params3 = [][]string{
			{"a", "c"},
			{"c", "b"},
			{"bc", "cd"},
			{"cd", "bc"},
		}
		res = []float64{3.75000, 0.40000, 5.00000, 0.20000}
		testTemp()

		params1 = [][]string{
			{"a", "b"},
		}
		params2 = []float64{0.5}
		params3 = [][]string{
			{"a", "b"},
			{"b", "a"},
			{"a", "c"},
			{"x", "y"},
		}
		res = []float64{0.50000, 2.00000, -1.00000, -1.00000}
		testTemp()
	})
}

func TestCanFinish(t *testing.T) {
	utils.TestWarp("207 测试用例", func() {
		params1 := 0
		params2 := [][]int{}
		params3 := [][]string{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, CanFinish(params1, params2) == res)
		}

		params1 = 2
		params2 = [][]int{{1, 0}}
		res = true
		testTemp()

		params1 = 2
		params2 = [][]int{{1, 0}, {0, 1}}
		res = false
		testTemp()

		params1 = 2
		params2 = [][]int{{0, 1}}
		res = true
		testTemp()
	})
}

func TestFindOrder(t *testing.T) {
	utils.TestWarp("210 测试用例", func() {
		params1 := 0
		params2 := [][]int{}
		params3 := [][]string{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(FindOrder(params1, params2), res))
		}

		params1 = 2
		params2 = [][]int{{1, 0}}
		res = []int{0, 1}
		testTemp()

		params1 = 4
		params2 = [][]int{
			{1, 0},
			{2, 0},
			{3, 1},
			{3, 2},
		}
		res = []int{0, 1, 2, 3}
		testTemp()

		params1 = 1
		params2 = [][]int{}
		res = []int{0}
		testTemp()
	})
}

func TestIsNumber(t *testing.T) {
	utils.TestWarp("65 测试用例", func() {
		params1 := ""
		params2 := [][]int{}
		params3 := [][]string{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, IsNumber(params1) == res)
		}

		params1 = "0"
		res = true
		testTemp()

		params1 = "e"
		res = false
		testTemp()

		params1 = "."
		res = false
		testTemp()
	})
}

func TestValidIPAddress(t *testing.T) {
	utils.TestWarp("468 测试用例", func() {
		params1 := ""
		params2 := [][]int{}
		params3 := [][]string{}
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, ValidIPAddress(params1) == res)
		}

		params1 = "172.16.254.1"
		res = "IPv4"
		testTemp()

		params1 = "2001:0db8:85a3:0:0:8A2E:0370:7334"
		res = "IPv6"
		testTemp()

		params1 = "256.256.256.256"
		res = "Neither"
		testTemp()
	})
}
