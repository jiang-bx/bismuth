package array_greedy

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestCanPlaceFlowers(t *testing.T) {
	utils.TestWarp("605 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, CanPlaceFlowers(params1, params2) == res)
		}

		params1 = []int{1, 0, 0, 0, 1}
		params2 = 1
		res = true
		testTemp()

		params1 = []int{1, 0, 0, 0, 1}
		params2 = 2
		res = false
		testTemp()

	})
}

func TestMaxProfit(t *testing.T) {
	utils.TestWarp("121 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MaxProfit(params1) == res)
		}

		params1 = []int{7, 1, 5, 3, 6, 4}
		res = 5
		testTemp()

		params1 = []int{7, 6, 4, 3, 1}
		res = 0
		testTemp()

	})
}

func TestMaxProfit1(t *testing.T) {
	utils.TestWarp("122 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MaxProfit1(params1) == res)
		}

		params1 = []int{7, 1, 5, 3, 6, 4}
		res = 7
		testTemp()

		params1 = []int{1, 2, 3, 4, 5}
		res = 4
		testTemp()

		params1 = []int{7, 6, 4, 3, 1}
		res = 0
		testTemp()

	})
}

func TestArrayPairSum(t *testing.T) {
	utils.TestWarp("561 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ArrayPairSum(params1) == res)
		}

		params1 = []int{1, 4, 3, 2}
		res = 4
		testTemp()

		params1 = []int{6, 2, 6, 5, 1, 2}
		res = 9
		testTemp()

	})
}

func TestFindContentChildren(t *testing.T) {
	utils.TestWarp("455 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindContentChildren(params1, params2) == res)
		}

		params1 = []int{1, 2, 3}
		params2 = []int{1, 1}
		res = 1
		testTemp()

		params1 = []int{1, 2}
		params2 = []int{1, 2, 3}
		res = 2
		testTemp()

	})
}

func TestDistributeCandies(t *testing.T) {
	utils.TestWarp("575 测试用例", func() {
		params1 := []int{}
		params2 := 1
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, DistributeCandies(params1) == res)
		}

		params1 = []int{1, 1, 2, 2, 3, 3}
		res = 3
		testTemp()

		params1 = []int{1, 1, 2, 3}
		res = 2
		testTemp()

		params1 = []int{6, 6, 6, 6}
		res = 1
		testTemp()
	})
}

func TestCandy(t *testing.T) {
	utils.TestWarp("135 测试用例", func() {
		params1 := []int{}
		params2 := 1
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, Candy(params1) == res)
		}

		params1 = []int{1, 0, 2}
		res = 5
		testTemp()

		params1 = []int{1, 2, 2}
		res = 4
		testTemp()

		params1 = []int{1, 2, 2, 5, 4, 3, 2}
		res = 14
		testTemp()
	})
}

func TestLongestPalindrome(t *testing.T) {
	utils.TestWarp("409 测试用例", func() {
		params1 := ""
		params2 := 1
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, LongestPalindrome(params1) == res)
		}

		params1 = "abccccdd"
		res = 7
		testTemp()

		params1 = "a"
		res = 1
		testTemp()

		params1 = "aaaaaccc"
		res = 7
		testTemp()
	})
}

func TestLeastInterval(t *testing.T) {
	utils.TestWarp("621 测试用例", func() {
		params1 := []byte{}
		params2 := 1
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, LeastInterval(params1, params2) == res)
		}

		params1 = []byte{'A', 'A', 'A', 'B', 'B', 'B'}
		params2 = 2
		res = 8
		testTemp()

		params1 = []byte{'A', 'A', 'A', 'B', 'B', 'B'}
		params2 = 0
		res = 6
		testTemp()

		params1 = []byte{'A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'}
		params2 = 2
		res = 16
		testTemp()
	})
}

func TestLargestNumber(t *testing.T) {
	utils.TestWarp("179 测试用例", func() {
		params1 := []int{}
		params2 := 1
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, LargestNumber(params1) == res)
		}

		params1 = []int{10, 2}
		res = "210"
		testTemp()

		params1 = []int{3, 30, 34, 5, 9}
		res = "9534330"
		testTemp()
	})
}

func TestMerge(t *testing.T) {
	utils.TestWarp("56 测试用例", func() {
		params1 := [][]int{}
		params2 := 1
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(Merge(params1), res))
		}

		params1 = [][]int{
			{1, 3},
			{2, 6},
			{8, 10},
			{15, 18},
		}
		res = [][]int{
			{1, 6},
			{8, 10},
			{15, 18},
		}
		testTemp()

		params1 = [][]int{
			{1, 4},
			{4, 5},
		}
		res = [][]int{
			{1, 5},
		}
		testTemp()
	})
}

func TestInsert(t *testing.T) {
	utils.TestWarp("56 测试用例", func() {
		params1 := [][]int{}
		params2 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(Insert(params1, params2), res))
		}

		params1 = [][]int{
			{1, 3},
			{6, 9},
		}
		params2 = []int{2, 5}
		res = [][]int{
			{1, 5},
			{6, 9},
		}
		testTemp()

		params1 = [][]int{
			{1, 2},
			{3, 5},
			{6, 7},
			{8, 10},
			{12, 16},
		}
		params2 = []int{4, 8}
		res = [][]int{
			{1, 2},
			{3, 10},
			{12, 16},
		}
		testTemp()

		params1 = [][]int{}
		params2 = []int{5, 7}
		res = [][]int{{5, 7}}
		testTemp()

		params1 = [][]int{{1, 5}}
		params2 = []int{2, 3}
		res = [][]int{{1, 5}}
		testTemp()

		params1 = [][]int{{1, 5}}
		params2 = []int{2, 7}
		res = [][]int{{1, 7}}
		testTemp()
	})
}

func TestSummaryRanges(t *testing.T) {
	utils.TestWarp("228 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(SummaryRanges(params1), res))
		}

		params1 = []int{0, 1, 2, 4, 5, 7}
		res = []string{"0->2", "4->5", "7"}
		testTemp()

		params1 = []int{0, 2, 3, 4, 6, 8, 9}
		res = []string{"0", "2->4", "6", "8->9"}
		testTemp()
	})
}

func TestFindMinArrowShots(t *testing.T) {
	utils.TestWarp("452 测试用例", func() {
		params1 := [][]int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindMinArrowShots(params1) == res)
		}

		params1 = [][]int{
			{10, 16}, {2, 8}, {1, 6}, {7, 12},
		}
		res = 2
		testTemp()

		params1 = [][]int{
			{1, 2}, {3, 4}, {5, 6}, {7, 8},
		}
		res = 4
		testTemp()

		params1 = [][]int{
			{1, 2}, {2, 3}, {3, 4}, {4, 5},
		}
		res = 2
		testTemp()
	})
}

func TestEraseOverlapIntervals(t *testing.T) {
	utils.TestWarp("435 测试用例", func() {
		params1 := [][]int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, EraseOverlapIntervals(params1) == res)
		}

		params1 = [][]int{
			{1, 2}, {2, 3}, {3, 4}, {1, 3},
		}
		res = 1
		testTemp()

		params1 = [][]int{
			{1, 2}, {2, 3},
		}
		res = 0
		testTemp()

		params1 = [][]int{
			{1, 2}, {1, 2}, {1, 2},
		}
		res = 2
		testTemp()

	})
}

func TestFindLongestChain(t *testing.T) {
	utils.TestWarp("646 测试用例", func() {
		params1 := [][]int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindLongestChain(params1) == res)
		}

		params1 = [][]int{
			{1, 2}, {2, 3}, {3, 4},
		}
		res = 2
		testTemp()

		params1 = [][]int{
			{1, 2}, {7, 8}, {4, 5},
		}
		res = 3
		testTemp()
	})
}

func TestReconstructQueue(t *testing.T) {
	utils.TestWarp("406 测试用例", func() {
		params1 := [][]int{}
		params2 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(ReconstructQueue(params1), res))
		}

		params1 = [][]int{
			{7, 0},
			{4, 4},
			{7, 1},
			{5, 0},
			{6, 1},
			{5, 2},
		}
		res = [][]int{
			{5, 0},
			{7, 0},
			{5, 2},
			{6, 1},
			{4, 4},
			{7, 1},
		}
		testTemp()

		params1 = [][]int{
			{6, 0},
			{5, 0},
			{4, 0},
			{3, 2},
			{2, 2},
			{1, 4},
		}
		res = [][]int{
			{4, 0},
			{5, 0},
			{2, 2},
			{3, 2},
			{1, 4},
			{6, 0},
		}
		testTemp()
	})
}

func TestMajorityElement(t *testing.T) {
	utils.TestWarp("169 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MajorityElement(params1) == res)
		}

		params1 = []int{
			3, 2, 3,
		}
		res = 3
		testTemp()

		params1 = []int{
			2, 2, 1, 1, 1, 2, 2,
		}
		res = 2
		testTemp()
	})
}

func TestFindKthLargest(t *testing.T) {
	utils.TestWarp("215 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindKthLargest(params1, params2) == res)
		}

		params1 = []int{
			3, 2, 1, 5, 6, 4,
		}
		params2 = 2
		res = 5
		testTemp()

		params1 = []int{
			3, 2, 3, 1, 2, 4, 5, 5, 6,
		}
		params2 = 4
		res = 4
		testTemp()
	})
}

func TestSortColors(t *testing.T) {
	utils.TestWarp("75 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			SortColors(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(params1, res))
		}

		params1 = []int{
			2, 0, 2, 1, 1, 0,
		}
		res = []int{
			0, 0, 1, 1, 2, 2,
		}
		testTemp()

		params1 = []int{
			2, 0, 1,
		}
		res = []int{
			0, 1, 2,
		}
		testTemp()
	})
}

func TestWiggleSort(t *testing.T) {
	utils.TestWarp("324 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			WiggleSort(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(params1, res))
		}

		params1 = []int{
			1, 5, 1, 1, 6, 4,
		}
		res = []int{
			1, 6, 1, 5, 1, 4,
		}
		testTemp()

		params1 = []int{
			1, 3, 2, 2, 3, 1,
		}
		res = []int{
			2, 3, 1, 3, 1, 2,
		}
		testTemp()
	})
}

func TestFindMinMoves(t *testing.T) {
	utils.TestWarp("517 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindMinMoves(params1) == res)
		}

		params1 = []int{
			1, 0, 5,
		}
		res = 3
		testTemp()

		params1 = []int{
			0, 3, 0,
		}
		res = 2
		testTemp()

		params1 = []int{
			0, 2, 0,
		}
		res = -1
		testTemp()
	})
}

func TestPredictPartyVictory(t *testing.T) {
	utils.TestWarp("649 测试用例", func() {
		params1 := ""
		params2 := 0
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, PredictPartyVictory(params1) == res)
		}

		params1 = "RD"
		res = "Radiant"
		testTemp()

		params1 = "RDD"
		res = "Dire"
		testTemp()
	})
}

func TestCheckValidString(t *testing.T) {
	utils.TestWarp("678 测试用例", func() {
		params1 := ""
		params2 := 0
		res := true
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, CheckValidString(params1) == res)
		}

		params1 = "()"
		res = true
		testTemp()

		params1 = "(*)"
		res = true
		testTemp()

		params1 = "(*))"
		res = true
		testTemp()
	})
}

func TestStrongPasswordChecker(t *testing.T) {
	utils.TestWarp("420 测试用例", func() {
		params1 := ""
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, StrongPasswordChecker(params1) == res)
		}

		params1 = "a"
		res = 5
		testTemp()

		params1 = "aA1"
		res = 3
		testTemp()

		params1 = "1337C0d3"
		res = 0
		testTemp()
	})
}
