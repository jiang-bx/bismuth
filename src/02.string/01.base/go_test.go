package base

import (
	"leetcode/src/utils"
	"testing"
)

func TestDetectCapitalUse(t *testing.T) {
	utils.TestWarp("520 测试用例", func() {
		utils.TestCondition(t, "USA should return true", DetectCapitalUse("USA") == true)
		utils.TestCondition(t, "FlaG should return false", DetectCapitalUse("FlaG") == false)
	})
}

func TestIsPalindrome(t *testing.T) {
	utils.TestWarp("125 测试用例", func() {
		utils.TestCondition(t, "A man, a plan, a canal: Panama should return true", IsPalindrome("A man, a plan, a canal: Panama") == true)

		utils.TestCondition(t, "race a car should return false", IsPalindrome("race a car") == false)

		utils.TestCondition(t, " should return true", IsPalindrome(" ") == true)
	})
}

func TestLongestCommonPrefix(t *testing.T) {
	utils.TestWarp("14 测试用例", func() {
		utils.TestCondition(t, `["ab","a"] should return "a"`, LongestCommonPrefix([]string{"ab", "a"}) == "a")

		utils.TestCondition(t, "['flower','flow','flight'] should return fl", LongestCommonPrefix([]string{"flower", "flow", "flight"}) == "fl")

		utils.TestCondition(t, `["dog","racecar","car"] should return ""`, LongestCommonPrefix([]string{"dog", "racecar", "car"}) == "")

	})
}

func TestCountSegments(t *testing.T) {
	utils.TestWarp("434 测试用例", func() {
		utils.TestCondition(t, "Hello, my name is John should return 5", CountSegments("Hello, my name is John") == 5)
	})
}

func TestLengthOfLastWord(t *testing.T) {
	utils.TestWarp("58 测试用例", func() {
		utils.TestCondition(t, "Hello World return 5", LengthOfLastWord("Hello World") == 5)

		utils.TestCondition(t, "   fly me   to   the moon   return 4", LengthOfLastWord("   fly me   to   the moon  ") == 4)

		utils.TestCondition(t, "luffy is still joyboy return 6", LengthOfLastWord("luffy is still joyboy") == 6)
	})
}
