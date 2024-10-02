package array_greedy

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
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

func TestIsPerfectSquare(t *testing.T) {
	utils.TestWarp("367 测试用例", func() {
		params1 := 1
		params2 := 1
		params3 := [][]string{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, IsPerfectSquare(params1) == res)
		}

		params1 = 16
		res = true
		testTemp()

		params1 = 14
		res = false
		testTemp()
	})
}

func TestArrangeCoins(t *testing.T) {
	utils.TestWarp("441 测试用例", func() {
		params1 := 1
		params2 := 1
		params3 := [][]string{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, ArrangeCoins(params1) == res)
		}

		params1 = 5
		res = 2
		testTemp()

		params1 = 8
		res = 3
		testTemp()
	})
}

func TestSearchRange(t *testing.T) {
	utils.TestWarp("34 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := [][]string{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(SearchRange(params1, params2), res))
		}

		params1 = []int{5, 7, 7, 8, 8, 10}
		params2 = 8
		res = []int{3, 4}
		testTemp()

		params1 = []int{5, 7, 7, 8, 8, 10}
		params2 = 6
		res = []int{-1, -1}
		testTemp()

		params1 = []int{}
		params2 = 0
		res = []int{-1, -1}
		testTemp()
	})
}

func TestSingleNonDuplicate(t *testing.T) {
	utils.TestWarp("540 测试用例", func() {
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

			utils.TestCondition(t, desc, SingleNonDuplicate(params1) == res)
		}

		params1 = []int{1, 1, 2, 3, 3, 4, 4, 8, 8}
		res = 2
		testTemp()

		params1 = []int{3, 3, 7, 7, 10, 11, 11}
		res = 10
		testTemp()
	})
}

func TestHIndex(t *testing.T) {
	utils.TestWarp("275 测试用例", func() {
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

			utils.TestCondition(t, desc, HIndex(params1) == res)
		}

		params1 = []int{0, 1, 3, 5, 6}
		res = 3
		testTemp()

		params1 = []int{1, 2, 100}
		res = 2
		testTemp()

		params1 = []int{100}
		res = 1
		testTemp()

		params1 = []int{0}
		res = 0
		testTemp()
	})
}

func TestFindRightInterval(t *testing.T) {
	utils.TestWarp("436 测试用例", func() {
		params1 := [][]int{}
		params2 := 1
		params3 := [][]string{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(FindRightInterval(params1), res))
		}

		params1 = [][]int{{1, 2}}
		res = []int{-1}
		testTemp()

		params1 = [][]int{
			{3, 4},
			{2, 3},
			{1, 2},
		}
		res = []int{-1, 0, 1}
		testTemp()

		params1 = [][]int{
			{1, 4},
			{2, 3},
			{3, 4},
		}
		res = []int{-1, 2, -1}
		testTemp()
	})
}

func TestLengthOfLIS(t *testing.T) {
	utils.TestWarp("300 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := [][]string{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				LengthOfLIS(params1) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{10, 9, 2, 5, 3, 7, 101, 18}
			res = 4
			testTemp()
		})

		t.Run("test1", func(t *testing.T) {
			params1 = []int{0, 1, 0, 3, 2, 3}
			res = 4
			testTemp()
		})

		t.Run("test1", func(t *testing.T) {
			params1 = []int{7, 7, 7, 7, 7, 7, 7}
			res = 1
			testTemp()
		})

	})
}

func TestMaxEnvelopes(t *testing.T) {
	utils.TestWarp("354 测试用例", func() {
		params1 := [][]int{}
		params2 := 0
		params3 := [][]string{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				reflect.DeepEqual(
					MaxEnvelopes(params1),
					res,
				),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = [][]int{
				{5, 4},
				{6, 4},
				{6, 7},
				{2, 3},
			}
			res = 3
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = [][]int{
				{1, 1},
				{1, 1},
				{1, 1},
			}
			res = 1
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = [][]int{
				{2, 100},
				{3, 200},
				{4, 300},
				{5, 500},
				{5, 400},
				{5, 250},
				{6, 370},
				{6, 360},
				{7, 380},
			}
			res = 5
			testTemp()
		})
	})
}

func TestFindClosestElements(t *testing.T) {
	utils.TestWarp("658 测试用例", func() {
		params1 := []int{}
		params2 := 0
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
				reflect.DeepEqual(
					FindClosestElements(params1, params2, params3),
					res,
				),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{1, 2, 3, 4, 5}
			params2 = 4
			params3 = 3
			res = []int{1, 2, 3, 4}
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{1, 2, 3, 4, 5}
			params2 = 4
			params3 = -1
			res = []int{1, 2, 3, 4}
			testTemp()
		})

	})
}

func TestFindPeakElement(t *testing.T) {
	utils.TestWarp("162 测试用例", func() {
		params1 := []int{}
		params2 := 0
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
				FindPeakElement(params1) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{1, 2, 3, 1}
			res = 2
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{1, 2, 1, 3, 5, 6, 4}
			res = 5
			testTemp()
		})

	})
}

func TestFindMedianSortedArrays(t *testing.T) {
	utils.TestWarp("4 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		params3 := 0
		res := 0.0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				FindMedianSortedArrays(params1, params2) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{1, 3}
			params2 = []int{2}
			res = 2.00
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{1, 2}
			params2 = []int{3, 4}
			res = 2.5
			testTemp()
		})

	})
}

func TestFindMin(t *testing.T) {
	utils.TestWarp("153 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
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
				FindMin(params1) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{3, 4, 5, 1, 2}
			res = 1
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{4, 5, 6, 7, 0, 1, 2}
			res = 0
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = []int{11, 13, 15, 17}
			res = 11
			testTemp()
		})

	})
}

func TestFindMinHard(t *testing.T) {
	utils.TestWarp("154 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
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
				FindMinHard(params1) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{1, 3, 5}
			res = 1
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{2, 2, 2, 0, 1}
			res = 0
			testTemp()
		})

	})
}

func TestSearch(t *testing.T) {
	utils.TestWarp("33 测试用例", func() {
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
				Search(params1, params2) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{4, 5, 6, 7, 0, 1, 2}
			params2 = 0
			res = 4
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{4, 5, 6, 7, 0, 1, 2}
			params2 = 3
			res = -1
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = []int{1}
			params2 = 0
			res = -1
			testTemp()
		})

	})
}

func TestSearch81(t *testing.T) {
	utils.TestWarp("81 测试用例", func() {
		params1 := []int{}
		params2 := 1
		params3 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				Search81(params1, params2) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{2, 5, 6, 0, 0, 1, 2}
			params2 = 0
			res = true
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{2, 5, 6, 0, 0, 1, 2}
			params2 = 3
			res = false
			testTemp()
		})

	})
}

func TestSearchMatrix(t *testing.T) {
	utils.TestWarp("74 测试用例", func() {
		params1 := [][]int{}
		params2 := 1
		params3 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				SearchMatrix(params1, params2) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = [][]int{
				{1, 3, 5, 7},
				{10, 11, 16, 20},
				{23, 30, 34, 60},
			}
			params2 = 3
			res = true
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = [][]int{
				{1, 3, 5, 7},
				{10, 11, 16, 20},
				{23, 30, 34, 60},
			}
			params2 = 13
			res = false
			testTemp()
		})

	})
}

func TestSearchMatrixII(t *testing.T) {
	utils.TestWarp("240 测试用例", func() {
		params1 := [][]int{}
		params2 := 1
		params3 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				SearchMatrixII(params1, params2) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = [][]int{
				{1, 4, 7, 11, 15},
				{2, 5, 8, 12, 19},
				{3, 6, 9, 16, 22},
				{10, 13, 14, 17, 24},
				{18, 21, 23, 26, 30},
			}
			params2 = 3
			res = true
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = [][]int{
				{1, 4, 7, 11, 15},
				{2, 5, 8, 12, 19},
				{3, 6, 9, 16, 22},
				{10, 13, 14, 17, 24},
				{18, 21, 23, 26, 30},
			}
			params2 = 20
			res = false
			testTemp()
		})

	})
}

func TestKthSmallest(t *testing.T) {
	utils.TestWarp("378 测试用例", func() {
		params1 := [][]int{}
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
				KthSmallest(params1, params2) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = [][]int{
				{1, 5, 9},
				{10, 11, 13},
				{12, 13, 15},
			}
			params2 = 8
			res = 13
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = [][]int{
				{-5},
			}
			params2 = 1
			res = -5
			testTemp()
		})

	})
}

func TestFindKthNumber(t *testing.T) {
	utils.TestWarp("668 测试用例", func() {
		params1 := 0
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
				FindKthNumber(params1, params2, params3) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = 3
			params2 = 3
			params3 = 5
			res = 3
			testTemp()
		})

		t.Run("test1", func(t *testing.T) {
			params1 = 2
			params2 = 3
			params3 = 6
			res = 6
			testTemp()
		})

	})
}

func TestSplitArray(t *testing.T) {
	utils.TestWarp("410 测试用例", func() {
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
				SplitArray(params1, params2) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{7, 2, 5, 10, 8}
			params2 = 2
			res = 18
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{1, 2, 3, 4, 5}
			params2 = 2
			res = 9
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = []int{1, 4, 4}
			params2 = 3
			res = 4
			testTemp()
		})

	})
}

func TestSmallestGoodBase(t *testing.T) {
	utils.TestWarp("483 测试用例", func() {
		params1 := ""
		params2 := 1
		params3 := 0
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				SmallestGoodBase(params1) == res,
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = "13"
			res = "13"
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = "4681"
			res = "8"
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = "1000000000000000000"
			res = "999999999999999999"
			testTemp()
		})

	})
}
