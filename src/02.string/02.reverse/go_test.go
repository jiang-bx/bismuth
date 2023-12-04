package reverse

import (
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestDetectCapitalUse(t *testing.T) {
	strToByte := func(s string) []byte {
		b := []byte{}
		for _, v := range s {
			b = append(b, byte(v))
		}

		return b
	}

	utils.TestWarp("344 测试用例", func() {
		strArr11 := strToByte("hello")
		strArr12 := strToByte("olleh")
		ReverseString(strArr11)
		utils.TestCondition(t, `["h","e","l","l","o"] should return ["o","l","l","e","h"]`, reflect.DeepEqual(strArr11, strArr12))

		strArr21 := strToByte("Hannah")
		strArr22 := strToByte("hannaH")
		ReverseString(strArr21)
		utils.TestCondition(t, `["H","a","n","n","a","h"] should return ["h","a","n","n","a","H"]`, reflect.DeepEqual(strArr21, strArr22))
	})
}

func TestReverseStr(t *testing.T) {
	utils.TestWarp("541 测试用例", func() {
		utils.TestCondition(t, `s = "abcdefg", k = 2 return "bacdfeg"`, ReverseStr("abcdefg", 2) == "bacdfeg")

		utils.TestCondition(t, `s = "abcd", k = 2 return "bacd"`, ReverseStr("abcd", 2) == "bacd")

	})
}

func TestReverseWords(t *testing.T) {
	utils.TestWarp("557 测试用例", func() {
		utils.TestCondition(t, `Let's take LeetCode contest should return s'teL ekat edoCteeL tsetnoc`, ReverseWords("Let's take LeetCode contest") == "s'teL ekat edoCteeL tsetnoc")

		utils.TestCondition(t, `God Ding should return doG gniD`, ReverseWords("God Ding") == "doG gniD")
	})
}

func TestReverseWords151(t *testing.T) {
	utils.TestWarp("151 测试用例", func() {
		utils.TestCondition(t, `the sky is blue should return blue is sky the`, ReverseWords151("the sky is blue") == "blue is sky the")

		utils.TestCondition(t, `  hello world   should return world hello`, ReverseWords151("  hello world  ") == "world hello")

		utils.TestCondition(t, `a good   example should return example good a`, ReverseWords151("a good   example") == "example good a")
	})
}
