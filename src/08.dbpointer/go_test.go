package dbpointer

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestMaximalRectangle(t *testing.T) {
	utils.TestWarp("345 测试用例", func() {
		params1 := ""
		params2 := []int{}
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ReverseVowels(params1) == res)
		}

		params1 = "hello"
		res = "holle"
		testTemp()

		params1 = "leetcode"
		res = "leotcede"
		testTemp()
	})
}

func TestValidPalindrome(t *testing.T) {
	utils.TestWarp("680 测试用例", func() {
		params1 := ""
		params2 := []int{}
		res := true
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ValidPalindrome(params1) == res)
		}

		params1 = "aba"
		res = true
		testTemp()

		params1 = "abca"
		res = true
		testTemp()

		params1 = "abc"
		res = false
		testTemp()
	})
}

func TestTwoSum(t *testing.T) {
	utils.TestWarp("167 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(TwoSum(params1, params2), res))
		}

		params1 = []int{2, 7, 11, 15}
		params2 = 9
		res = []int{1, 2}
		testTemp()

		params1 = []int{2, 3, 4}
		params2 = 6
		res = []int{1, 3}
		testTemp()

		params1 = []int{-1, 0}
		params2 = -1
		res = []int{1, 2}
		testTemp()
	})
}

func TestThreeSum(t *testing.T) {
	utils.TestWarp("15 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(ThreeSum(params1), res))
		}

		params1 = []int{-1, 0, 1, 2, -1, -4}
		res = [][]int{
			{-1, -1, 2},
			{-1, 0, 1},
		}
		testTemp()

		params1 = []int{0, 1, 1}
		res = [][]int{}
		testTemp()

		params1 = []int{0, 0, 0}
		res = [][]int{
			{0, 0, 0},
		}
		testTemp()
	})
}

func TestThreeSumClosest(t *testing.T) {
	utils.TestWarp("16 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ThreeSumClosest(params1, params2) == res)
		}

		params1 = []int{-1, 2, 1, -4}
		params2 = 1
		res = 2
		testTemp()

		params1 = []int{0, 0, 0}
		params2 = 1
		res = 0
		testTemp()

		params1 = []int{2, 3, 8, 9, 10}
		params2 = 16
		res = 15
		testTemp()
	})
}

func TestMaxArea(t *testing.T) {
	utils.TestWarp("11 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MaxArea(params1) == res)
		}

		params1 = []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
		res = 49
		testTemp()

		params1 = []int{1, 1}
		res = 1
		testTemp()
	})
}

func TestTrap(t *testing.T) {
	utils.TestWarp("42 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, Trap(params1) == res)
		}

		params1 = []int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
		res = 6
		testTemp()

		params1 = []int{4, 2, 0, 3, 2, 5}
		res = 9
		testTemp()
	})
}

func TestRemoveElement(t *testing.T) {
	utils.TestWarp("27 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, RemoveElement(params1, params2) == res)
		}

		params1 = []int{3, 2, 2, 3}
		params2 = 3
		res = 2
		testTemp()

		params1 = []int{0, 1, 2, 2, 3, 0, 4, 2}
		params2 = 2
		res = 5
		testTemp()
	})
}

func TestRemoveDuplicates(t *testing.T) {
	utils.TestWarp("26 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, RemoveDuplicates(params1) == res)
		}

		params1 = []int{1, 1, 2}
		res = 2
		testTemp()

		params1 = []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}
		res = 5
		testTemp()
	})
}

func TestRemoveDuplicates1(t *testing.T) {
	utils.TestWarp("80 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, RemoveDuplicates1(params1) == res)
		}

		params1 = []int{1, 1, 1, 2, 2, 3}
		res = 5
		testTemp()

		params1 = []int{0, 0, 1, 1, 1, 1, 2, 3, 3}
		res = 7
		testTemp()
	})
}

func TestDeleteDuplicates(t *testing.T) {
	utils.TestWarp("83 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, IsSameList(DeleteDuplicates(CreateLintNode(params1)), CreateLintNode(res)))
		}

		params1 = []int{1, 1, 2}
		res = []int{1, 2}
		testTemp()

		params1 = []int{1, 1, 2, 3, 3}
		res = []int{1, 2, 3}
		testTemp()
	})
}

func TestDeleteDuplicates1(t *testing.T) {
	utils.TestWarp("82 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, IsSameList(DeleteDuplicates1(CreateLintNode(params1)), CreateLintNode(res)))
		}

		params1 = []int{1, 2, 3, 3, 4, 4, 5}
		res = []int{1, 2, 5}
		testTemp()

		params1 = []int{1, 1, 1, 2, 3}
		res = []int{2, 3}
		testTemp()
	})
}

func TestTriangleNumber(t *testing.T) {
	utils.TestWarp("611 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, TriangleNumber(params1) == res)
		}

		params1 = []int{2, 2, 3, 4}
		res = 3
		testTemp()

		params1 = []int{4, 2, 3, 4}
		res = 4
		testTemp()
	})
}

func TestFindRepeatedDnaSequences(t *testing.T) {
	utils.TestWarp("187 测试用例", func() {
		params1 := ""
		params2 := 0
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(FindRepeatedDnaSequences(params1), res))
		}

		params1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
		res = []string{"AAAAACCCCC", "CCCCCAAAAA"}
		testTemp()

		params1 = "AAAAAAAAAAAAA"
		res = []string{"AAAAAAAAAA"}
		testTemp()
	})
}

func TestFindMaxAverage(t *testing.T) {
	utils.TestWarp("643 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := float64(0)
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindMaxAverage(params1, params2) == res)
		}

		params1 = []int{1, 12, -5, -6, 50, 3}
		params2 = 4
		res = 12.75
		testTemp()

		params1 = []int{5}
		params2 = 1
		res = 5.00000
		testTemp()
	})
}

func TestFindLengthOfLCIS(t *testing.T) {
	utils.TestWarp("674 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindLengthOfLCIS(params1) == res)
		}

		params1 = []int{1, 3, 5, 4, 7}
		res = 3
		testTemp()

		params1 = []int{2, 2, 2, 2, 2}
		res = 1
		testTemp()
	})
}

func TestMinSubArrayLen(t *testing.T) {
	utils.TestWarp("209 测试用例", func() {
		params1 := 0
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MinSubArrayLen(params1, params2) == res)
		}

		params1 = 7
		params2 = []int{2, 3, 1, 2, 4, 3}
		res = 2
		testTemp()

		params1 = 4
		params2 = []int{1, 4, 4}
		res = 1
		testTemp()

		params1 = 11
		params2 = []int{1, 1, 1, 1, 1, 1, 1, 1}
		res = 0
		testTemp()
	})
}

func TestLengthOfLongestSubstring(t *testing.T) {
	utils.TestWarp("3 测试用例", func() {
		params1 := ""
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, LengthOfLongestSubstring(params1) == res)
		}

		params1 = "abcabcbb"
		res = 3
		testTemp()

		params1 = "bbbbb"
		res = 1
		testTemp()

		params1 = "pwwkew"
		res = 3
		testTemp()
	})
}

func TestFindAnagrams(t *testing.T) {
	utils.TestWarp("438 测试用例", func() {
		params1 := ""
		params2 := ""
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(FindAnagrams(params1, params2), res))
		}

		params1 = "cbaebabacd"
		params2 = "abc"
		res = []int{0, 6}
		testTemp()

		params1 = "abab"
		params2 = "ab"
		res = []int{0, 1, 2}
		testTemp()
	})
}

func TestCheckInclusion(t *testing.T) {
	utils.TestWarp("567 测试用例", func() {
		params1 := ""
		params2 := ""
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, CheckInclusion(params1, params2) == res)
		}

		params1 = "ab"
		params2 = "eidbaooo"
		res = true
		testTemp()

		params1 = "ab"
		params2 = "eidboaoo"
		res = false
		testTemp()
	})
}

func TestCharacterReplacement(t *testing.T) {
	utils.TestWarp("424 测试用例", func() {
		params1 := ""
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, CharacterReplacement(params1, params2) == res)
		}

		params1 = "ABAB"
		params2 = 2
		res = 4
		testTemp()

		params1 = "AABABBA"
		params2 = 1
		res = 4
		testTemp()
	})
}

func TestMinWindow(t *testing.T) {
	utils.TestWarp("76 测试用例", func() {
		params1 := ""
		params2 := ""
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, MinWindow(params1, params2) == res)
		}

		params1 = "ADOBECODEBANC"
		params2 = "ABC"
		res = "BANC"
		testTemp()

		params1 = "a"
		params2 = "a"
		res = "a"
		testTemp()

		params1 = "a"
		params2 = "aa"
		res = ""
		testTemp()
	})
}

func TestFindSubstring(t *testing.T) {
	utils.TestWarp("30 测试用例", func() {
		params1 := ""
		params2 := []string{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(FindSubstring(params1, params2), res))
		}

		params1 = "barfoothefoobarman"
		params2 = []string{"foo", "bar"}
		res = []int{0, 9}
		testTemp()

		params1 = "wordgoodgoodgoodbestword"
		params2 = []string{"word", "good", "best", "word"}
		res = []int{}
		testTemp()

		params1 = "barfoofoobarthefoobarman"
		params2 = []string{"bar", "foo", "the"}
		res = []int{6, 9, 12}
		testTemp()
	})
}
