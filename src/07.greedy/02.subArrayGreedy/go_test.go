package sub_array_greedy

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestStrongPasswordChecker(t *testing.T) {
	utils.TestWarp("53 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MaxSubArray(params1) == res)
		}

		params1 = []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}
		res = 6
		testTemp()

		params1 = []int{1}
		res = 1
		testTemp()

		params1 = []int{5, 4, -1, 7, 8}
		res = 23
		testTemp()
	})
}

func TestCanCompleteCircuit(t *testing.T) {
	utils.TestWarp("134 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, CanCompleteCircuit(params1, params2) == res)
		}

		params1 = []int{1, 2, 3, 4, 5}
		params2 = []int{3, 4, 5, 1, 2}
		res = 3
		testTemp()

		params1 = []int{2, 3, 4}
		params2 = []int{3, 4, 3}
		res = -1
		testTemp()
	})
}

func TestFindUnsortedSubarray(t *testing.T) {
	utils.TestWarp("581 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindUnsortedSubarray(params1) == res)
		}

		params1 = []int{2, 6, 4, 8, 10, 9, 15}
		res = 5
		testTemp()

		params1 = []int{1, 2, 3, 4}
		res = 0
		testTemp()

		params1 = []int{1}
		res = 0
		testTemp()
	})
}

func TestMaxProduct(t *testing.T) {
	utils.TestWarp("152 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MaxProduct(params1) == res)
		}

		params1 = []int{2, 3, -2, 4}
		res = 6
		testTemp()

		params1 = []int{-2, 0, -1}
		res = 0
		testTemp()
	})
}

func TestIncreasingTriplet(t *testing.T) {
	utils.TestWarp("334 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, IncreasingTriplet(params1) == res)
		}

		params1 = []int{1, 2, 3, 4, 5}
		res = true
		testTemp()

		params1 = []int{5, 4, 3, 2, 1}
		res = false
		testTemp()

		params1 = []int{2, 1, 5, 0, 4, 6}
		res = true
		testTemp()
	})
}

func TestWiggleMaxLength(t *testing.T) {
	utils.TestWarp("376 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, WiggleMaxLength(params1) == res)
		}

		params1 = []int{1, 7, 4, 9, 2, 5}
		res = 6
		testTemp()

		params1 = []int{1, 17, 5, 10, 13, 15, 10, 5, 16, 8}
		res = 7
		testTemp()

		params1 = []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
		res = 2
		testTemp()
	})
}

func TestIsPossible(t *testing.T) {
	utils.TestWarp("659 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := true
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, IsPossible(params1) == res)
		}

		params1 = []int{1, 2, 3, 3, 4, 5}
		res = true
		testTemp()

		params1 = []int{1, 2, 3, 3, 4, 4, 5, 5}
		res = true
		testTemp()

		params1 = []int{1, 2, 3, 4, 4, 5}
		res = false
		testTemp()
	})
}

func TestIntegerBreak(t *testing.T) {
	utils.TestWarp("343 测试用例", func() {
		params1 := 0
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, IntegerBreak(params1) == res)
		}

		params1 = 2
		res = 1
		testTemp()

		params1 = 10
		res = 36
		testTemp()
	})
}

func TestNextGreaterElement(t *testing.T) {
	utils.TestWarp("496 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(NextGreaterElement(params1, params2), res))
		}

		params1 = []int{4, 1, 2}
		params2 = []int{1, 3, 4, 2}
		res = []int{-1, 3, -1}
		testTemp()

		params1 = []int{2, 4}
		params2 = []int{1, 2, 3, 4}
		res = []int{3, -1}
		testTemp()
	})
}

func TestNextGreaterElements(t *testing.T) {
	utils.TestWarp("503 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(NextGreaterElements(params1), res))
		}

		params1 = []int{1, 2, 1}
		res = []int{2, -1, 2}
		testTemp()

		params1 = []int{1, 2, 3, 4, 3}
		res = []int{2, 3, 4, -1, 4}
		testTemp()
	})
}

func TestFind132pattern(t *testing.T) {
	utils.TestWarp("456 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := true
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, Find132pattern(params1) == res)
		}

		params1 = []int{1, 2, 3, 4}
		res = false
		testTemp()

		params1 = []int{3, 1, 4, 2}
		res = true
		testTemp()

		params1 = []int{-1, 3, 2, 0}
		res = true
		testTemp()
	})
}

func TestRemoveDuplicateLetters(t *testing.T) {
	utils.TestWarp("316 测试用例", func() {
		params1 := ""
		params2 := []int{}
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, RemoveDuplicateLetters(params1) == res)
		}

		params1 = "bcabc"
		res = "abc"
		testTemp()

		params1 = "cbacdcbc"
		res = "acdb"
		testTemp()
	})
}

func TestRemoveKdigits(t *testing.T) {
	utils.TestWarp("402 测试用例", func() {
		params1 := ""
		params2 := 0
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, RemoveKdigits(params1, params2) == res)
		}

		params1 = "1432219"
		params2 = 3
		res = "1219"
		testTemp()

		params1 = "10200"
		params2 = 1
		res = "200"
		testTemp()

		params1 = "10"
		params2 = 2
		res = "0"
		testTemp()
	})
}

func TestMaxNumber(t *testing.T) {
	utils.TestWarp("321 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		params3 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(MaxNumber(params1, params2, params3), res))
		}

		params1 = []int{3, 4, 6, 5}
		params2 = []int{9, 1, 2, 5, 8, 3}
		params3 = 5
		res = []int{9, 8, 6, 5, 3}
		testTemp()

		params1 = []int{6, 7}
		params2 = []int{6, 0, 4}
		params3 = 5
		res = []int{6, 7, 6, 0, 4}
		testTemp()

		params1 = []int{3, 9}
		params2 = []int{8, 9}
		params3 = 3
		res = []int{9, 8, 9}
		testTemp()
	})
}

func TestLargestRectangleArea(t *testing.T) {
	utils.TestWarp("84 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, LargestRectangleArea(params1) == res)
		}

		params1 = []int{2, 1, 5, 6, 2, 3}
		res = 10
		testTemp()

		params1 = []int{2, 4}
		res = 4
		testTemp()
	})
}

func TestMaximalRectangle(t *testing.T) {
	utils.TestWarp("85 测试用例", func() {
		params1 := [][]byte{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MaximalRectangle(params1) == res)
		}

		params1 = [][]byte{
			{'1', '0', '1', '0', '0'},
			{'1', '0', '1', '1', '1'},
			{'1', '1', '1', '1', '1'},
			{'1', '0', '0', '1', '0'},
		}
		res = 6
		testTemp()

		params1 = [][]byte{
			{'0'},
		}
		res = 0
		testTemp()

		params1 = [][]byte{
			{'1'},
		}
		res = 1
		testTemp()
	})
}
