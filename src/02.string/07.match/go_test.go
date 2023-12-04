package match

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"strconv"
	"testing"
)

func TestIsAdditiveNumber(t *testing.T) {
	utils.TestWarp("482 测试用例", func() {
		params1 := ""
		params2 := 0
		res := ""

		testTemp := func() {
			desc := params1 + strconv.Itoa(params2) + " should return " + res
			utils.TestCondition(t, desc, LicenseKeyFormatting(params1, params2) == res)
		}

		params1 = "5F3Z-2e-9-w"
		params2 = 4
		res = "5F3Z-2E9W"
		testTemp()

		params1 = "2-5g-3-J"
		params2 = 2
		res = "2-5G-3J"
		testTemp()

		params1 = "2-4A0r7-4k"
		params2 = 3
		res = "24-A0R-74K"
		testTemp()
	})
}

func TestMaximum69Number(t *testing.T) {
	utils.TestWarp("6 测试用例", func() {
		params1 := 0
		res := 0

		testTemp := func() {
			desc := strconv.Itoa(params1) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, Maximum69Number(params1) == res)
		}

		params1 = 9669
		res = 9969
		testTemp()

		params1 = 9996
		res = 9999
		testTemp()

		params1 = 9999
		res = 9999
		testTemp()
	})
}

func TestFullJustify(t *testing.T) {
	utils.TestWarp("68 测试用例", func() {
		params1 := []string{}
		params2 := 0
		res := []string{}

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + strconv.Itoa(params2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(FullJustify(params1, params2), res))
		}

		params1 = []string{"This", "is", "an", "example", "of", "text", "justification."}
		params2 = 16
		res = []string{
			"This    is    an",
			"example  of text",
			"justification.  ",
		}
		testTemp()

		params1 = []string{"What", "must", "be", "acknowledgment", "shall", "be"}
		params2 = 16
		res = []string{
			"What   must   be",
			"acknowledgment  ",
			"shall be        ",
		}
		testTemp()

		params1 = []string{"Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"}
		params2 = 20
		res = []string{
			"Science  is  what we",
			"understand      well",
			"enough to explain to",
			"a  computer.  Art is",
			"everything  else  we",
			"do                  ",
		}
		testTemp()
	})
}

func TestStrStr(t *testing.T) {
	utils.TestWarp("28 测试用例", func() {
		params1 := ""
		params2 := ""
		res := 0

		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, StrStr(params1, params2) == res)
		}

		params1 = "sadbutsad"
		params2 = "sad"
		res = 0
		testTemp()

		params1 = "leetcode"
		params2 = "leeto"
		res = -1
		testTemp()

		params1 = "hello"
		params2 = "ll"
		res = 2
		testTemp()

		params1 = "mississippi"
		params2 = "issip"
		res = 4
		testTemp()

		params1 = "a"
		params2 = "a"
		res = 0
		testTemp()
	})
}

func TestRepeatedStringMatch(t *testing.T) {
	utils.TestWarp("686 测试用例", func() {
		params1 := ""
		params2 := ""
		res := 0

		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, RepeatedStringMatch(params1, params2) == res)
		}

		params1 = "abcd"
		params2 = "cdabcdab"
		res = 3
		testTemp()

		params1 = "a"
		params2 = "aa"
		res = 2
		testTemp()

		params1 = "a"
		params2 = "a"
		res = 1
		testTemp()

		params1 = "abc"
		params2 = "wxyz"
		res = -1
		testTemp()
	})
}

func TestRepeatedSubstringPattern(t *testing.T) {
	utils.TestWarp("459 测试用例", func() {
		params1 := ""
		res := false

		testTemp := func() {
			desc := params1 + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, RepeatedSubstringPattern(params1) == res)
		}

		params1 = "abab"
		res = true
		testTemp()

		params1 = "aba"
		res = false
		testTemp()

		params1 = "abcabcabcabc"
		res = true
		testTemp()
	})
}

func TestShortestPalindrome(t *testing.T) {
	utils.TestWarp("214 测试用例", func() {
		params1 := ""
		res := ""

		testTemp := func() {
			desc := params1 + " should return " + res
			utils.TestCondition(t, desc, ShortestPalindrome(params1) == res)
		}

		params1 = "aacecaaa"
		res = "aaacecaaa"
		testTemp()

		params1 = "abcd"
		res = "dcbabcd"
		testTemp()

		params1 = "aaacecaaa"
		res = "aaacecaaa"
		testTemp()

		params1 = ""
		res = ""
		testTemp()
	})
}

func TestLongestPalindrome(t *testing.T) {
	utils.TestWarp("214 测试用例", func() {
		params1 := ""
		res := ""

		testTemp := func() {
			desc := params1 + " should return " + res
			utils.TestCondition(t, desc, LongestPalindrome(params1) == res)
		}

		params1 = "babad"
		res = "bab"
		testTemp()

		params1 = "cbbd"
		res = "bb"
		testTemp()

		params1 = "a"
		res = "a"
		testTemp()
	})
}
