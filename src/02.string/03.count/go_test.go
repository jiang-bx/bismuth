package count

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"strconv"
	"testing"
)

func TestFirstUniqChar(t *testing.T) {
	utils.TestWarp("387 测试用例", func() {
		res := 0
		str := "leetcode"
		desc := str + " should return 0"
		utils.TestCondition(t, desc, FirstUniqChar(str) == res)

		str = "loveleetcode"
		res = 2
		desc = str + " should return 2"
		utils.TestCondition(t, desc, FirstUniqChar(str) == res)

		str = "aabb"
		res = -1
		desc = str + " should return -1"
		utils.TestCondition(t, desc, FirstUniqChar(str) == res)
	})
}

func TestFindTheDifference(t *testing.T) {
	utils.TestWarp("389 测试用例", func() {
		str1 := "abcd"
		str2 := "abcde"
		var res byte = 'e'
		desc := str1 + ", " + str2 + " should return " + string(res)
		utils.TestCondition(t, desc, FindTheDifference(str1, str2) == res)

		str1 = ""
		str2 = "y"
		res = 'y'
		desc = str1 + ", " + str2 + " should return " + string(res)
		utils.TestCondition(t, desc, FindTheDifference(str1, str2) == res)
	})
}

func TestCanConstruct(t *testing.T) {
	utils.TestWarp("383 测试用例", func() {
		str1 := "a"
		str2 := "b"
		res := false
		desc := str1 + ", " + str2 + " should return " + strconv.FormatBool(res)
		utils.TestCondition(t, desc, CanConstruct(str1, str2) == res)

		str1 = "aa"
		str2 = "ab"
		res = false
		desc = str1 + ", " + str2 + " should return " + strconv.FormatBool(res)
		utils.TestCondition(t, desc, CanConstruct(str1, str2) == res)

		str1 = "aa"
		str2 = "aab"
		res = true
		desc = str1 + ", " + str2 + " should return " + strconv.FormatBool(res)
		utils.TestCondition(t, desc, CanConstruct(str1, str2) == res)
	})
}

func TestIsAnagram(t *testing.T) {
	utils.TestWarp("242 测试用例", func() {
		str1 := "anagram"
		str2 := "nagaram"
		res := true
		desc := str1 + ", " + str2 + " should return " + strconv.FormatBool(res)
		utils.TestCondition(t, desc, IsAnagram(str1, str2) == res)

		str1 = "rat"
		str2 = "car"
		res = false
		desc = str1 + ", " + str2 + " should return " + strconv.FormatBool(res)
		utils.TestCondition(t, desc, IsAnagram(str1, str2) == res)
	})
}

func TestGroupAnagrams(t *testing.T) {
	// 该测试用例有问题
	utils.TestWarp("49 测试用例", func() {
		str1 := []string{"eat", "tea", "tan", "ate", "nat", "bat"}
		res := [][]string{{"bat"}, {"nat", "tan"}, {"ate", "eat", "tea"}}
		des1, _ := json.Marshal(str1)
		des2, _ := json.Marshal(res)
		desc := string(des1) + " should return " + string(des2)
		utils.TestCondition(t, desc, reflect.DeepEqual(GroupAnagrams(str1), res))

		str1 = []string{""}
		res = [][]string{{""}}
		des1, _ = json.Marshal(str1)
		des2, _ = json.Marshal(res)
		desc = string(des1) + " should return " + string(des2)
		utils.TestCondition(t, desc, reflect.DeepEqual(GroupAnagrams(str1), res))

		str1 = []string{"a"}
		res = [][]string{{"a"}}
		des1, _ = json.Marshal(str1)
		des2, _ = json.Marshal(res)
		desc = string(des1) + " should return " + string(des2)
		utils.TestCondition(t, desc, reflect.DeepEqual(GroupAnagrams(str1), res))
	})
}

func TestFrequencySort(t *testing.T) {
	testTemp := func(str, res string) {
		desc := str + " should return " + res
		utils.TestCondition(t, desc, FrequencySort(str) == res)
	}

	utils.TestWarp("451 测试用例", func() {
		str := "tree"
		res := "eetr"
		testTemp(str, res)
		// desc := str + " should return " + res
		// utils.TestCondition(t, desc, FrequencySort(str) == res)

		str = "cccaaa"
		res = "aaaccc"
		testTemp(str, res)
		// desc = str + " should return " + res
		// utils.TestCondition(t, desc, FrequencySort(str) == res)

		str = "Aabb"
		res = "bbAa"
		testTemp(str, res)
		// desc = str + " should return " + res
		// utils.TestCondition(t, desc, FrequencySort(str) == res)
	})
}

func TestOriginalDigits(t *testing.T) {
	testTemp := func(str, res string) {
		desc := str + " should return " + res
		utils.TestCondition(t, desc, OriginalDigits(str) == res)
	}

	utils.TestWarp("423 测试用例", func() {
		str := "owoztneoer"
		res := "012"
		testTemp(str, res)

		str = "fviefuro"
		res = "45"
		testTemp(str, res)

		str = "zeroonetwothreefourfivesixseveneightnine"
		res = "0123456789"
		testTemp(str, res)

		str = "zerozero"
		res = "00"
		testTemp(str, res)
	})
}

func TestJudgeCircle(t *testing.T) {
	str := ""
	res := false
	testTemp := func() {
		desc := str + " should return " + strconv.FormatBool(res)
		utils.TestCondition(t, desc, JudgeCircle(str) == res)
	}

	str = "UD"
	res = true
	testTemp()

	str = "LL"
	res = false
	testTemp()
}

func TestCheckRecord(t *testing.T) {
	str := ""
	res := false
	testTemp := func() {
		desc := str + " should return " + strconv.FormatBool(res)
		utils.TestCondition(t, desc, CheckRecord(str) == res)
	}

	str = "PPALLP"
	res = true
	testTemp()

	str = "PPALLL"
	res = false
	testTemp()
}

func TestCountBinarySubstrings(t *testing.T) {
	str := ""
	res := 0
	testTemp := func() {
		desc := str + " should return " + strconv.Itoa(res)
		utils.TestCondition(t, desc, CountBinarySubstrings(str) == res)
	}

	str = "00110011"
	res = 6
	testTemp()

	str = "10101"
	res = 4
	testTemp()
}

func TestFindSubstringInWraproundString(t *testing.T) {
	utils.TestWarp("467 测试用例", func() {
		str := ""
		res := 0
		testTemp := func() {
			desc := str + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, FindSubstringInWraproundString(str) == res)
		}

		str = "a"
		res = 1
		testTemp()

		str = "aca"
		res = 2
		testTemp()

		str = "zab"
		res = 6
		testTemp()
	})
}

func TestEncode(t *testing.T) {
	utils.TestWarp("535 测试用例", func() {
		url := ""
		testTemp := func() {
			desc := url + " should return " + url
			obj := ConstructorCodec()
			utils.TestCondition(t, desc, obj.decode(obj.encode(url)) == url)
		}

		url = "https://leetcode.com/problems/design-tinyurl"
		testTemp()
	})
}
