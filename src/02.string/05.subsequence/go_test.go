package subsequence

import (
	"encoding/json"
	"leetcode/src/utils"
	"strconv"
	"testing"
)

func TestIsSubsequence(t *testing.T) {
	utils.TestWarp("392 测试用例", func() {
		params1 := ""
		params2 := ""
		res := false

		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsSubsequence(params1, params2) == res)
		}

		params1 = "abc"
		params2 = "ahbgdc"
		res = true
		testTemp()

		params1 = "axc"
		params2 = "ahbgdc"
		res = false
		testTemp()
	})
}

func TestFindLongestWord(t *testing.T) {
	utils.TestWarp("524 测试用例", func() {
		params1 := ""
		params2 := []string{}
		res := ""

		testTemp := func() {
			params2Str, _ := json.Marshal(params2)
			desc := params1 + ", " + string(params2Str) + " should return " + res
			utils.TestCondition(t, desc, FindLongestWord(params1, params2) == res)
		}

		params1 = "abpcplea"
		params2 = []string{"ale", "apple", "monkey", "plea"}
		res = "apple"
		testTemp()

		params1 = "abpcplea"
		params2 = []string{"a", "b", "c"}
		res = "a"
		testTemp()

		params1 = "abpcplea"
		params2 = []string{
			"ale",
			"apple",
			"monkey",
			"plea",
			"abpcplaaa",
			"abpcllllll",
			"abccclllpppeeaaaa",
		}
		res = "apple"
		testTemp()
	})
}

func TestFindLUSLength(t *testing.T) {
	utils.TestWarp("521 测试用例", func() {
		params1 := ""
		params2 := ""
		res := 0

		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, FindLUSLength(params1, params2) == res)
		}

		params1 = "aba"
		params2 = "cdc"
		res = 3
		testTemp()

		params1 = "aaa"
		params2 = "bbb"
		res = 3
		testTemp()

		params1 = "aaa"
		params2 = "aaa"
		res = -1
		testTemp()
	})
}

func TestFindLUSLength2(t *testing.T) {
	utils.TestWarp("522 测试用例", func() {
		params1 := []string{}
		res := 0

		testTemp := func() {
			pStr1, _ := json.Marshal(params1)
			desc := string(pStr1) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, FindLUSLength2(params1) == res)
		}

		params1 = []string{"aba", "cdc", "eae"}
		res = 3
		testTemp()

		params1 = []string{"aaa", "aaa", "aa"}
		res = -1
		testTemp()

		params1 = []string{"aabbcc", "aabbcc", "cb"}
		res = 2
		testTemp()
	})
}
