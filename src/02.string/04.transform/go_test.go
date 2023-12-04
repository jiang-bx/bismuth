package transform

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"strconv"
	"strings"
	"testing"
)

func Test(t *testing.T) {
	utils.TestWarp("299 测试用例", func() {
		str1 := ""
		str2 := ""
		res := ""
		testTemp := func() {
			desc := str1 + ", " + str2 + " should return " + res
			utils.TestCondition(t, desc, GetHint(str1, str2) == res)
		}

		str1 = "1807"
		str2 = "7810"
		res = "1A3B"
		testTemp()

		str1 = "1123"
		str2 = "0111"
		res = "1A1B"
		testTemp()

		str1 = "11"
		str2 = "10"
		res = "1A0B"
		testTemp()
	})
}

func TestFizzBuzz(t *testing.T) {
	utils.TestWarp("412 测试用例", func() {
		num := 0
		res := []string{}
		testTemp := func() {
			desc := strconv.Itoa(num) + " should return " + strings.Join(res, ",")
			utils.TestCondition(t, desc, reflect.DeepEqual(FizzBuzz(num), res))
		}

		num = 3
		res = []string{"1", "2", "Fizz"}
		testTemp()

		num = 5
		res = []string{"1", "2", "Fizz", "4", "Buzz"}
		testTemp()

		num = 15
		res = []string{"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"}
		testTemp()
	})
}

func TestFindRelativeRanks(t *testing.T) {
	utils.TestWarp("506 测试用例", func() {
		nums := []int{5, 4, 3, 2, 1}
		res := []string{"Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"}
		testTemp := func() {
			numsStr, _ := json.Marshal(nums)
			desc := string(numsStr) + " should return " + strings.Join(res, ",")
			utils.TestCondition(t, desc, reflect.DeepEqual(FindRelativeRanks(nums), res))
		}

		testTemp()

		nums = []int{10, 3, 8, 9, 4}
		res = []string{"Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"}
		testTemp()
	})
}

func TestFindMinDifference(t *testing.T) {
	utils.TestWarp("539 测试用例", func() {
		params1 := []string{}
		res := 0
		testTemp := func() {
			params1Str, _ := json.Marshal(params1)
			desc := string(params1Str) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, FindMinDifference(params1) == res)
		}

		params1 = []string{"23:59", "00:00"}
		res = 1
		testTemp()

		params1 = []string{"00:00", "23:59", "00:00"}
		res = 0
		testTemp()

		params1 = []string{"05:31", "22:08", "00:35"}
		res = 147
		testTemp()
	})
}

func TestOptimalDivision(t *testing.T) {
	utils.TestWarp("539 测试用例", func() {
		params1 := []int{}
		res := ""
		testTemp := func() {
			params1Str, _ := json.Marshal(params1)
			desc := string(params1Str) + " should return " + res
			utils.TestCondition(t, desc, OptimalDivision(params1) == res)
		}

		params1 = []int{1000, 100, 10, 2}
		res = "1000/(100/10/2)"
		testTemp()

		params1 = []int{2, 3, 4}
		res = "2/(3/4)"
		testTemp()
	})
}

func TestComplexNumberMultiply(t *testing.T) {
	utils.TestWarp("539 测试用例", func() {
		params1 := ""
		params2 := ""
		res := ""
		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + res
			utils.TestCondition(t, desc, ComplexNumberMultiply(params1, params2) == res)
		}

		params1 = "1+1i"
		params2 = "1+1i"
		res = "0+2i"
		testTemp()

		params1 = "1+-1i"
		params2 = "1+-1i"
		res = "0+-2i"
		testTemp()
	})
}

func TestFractionAddition(t *testing.T) {
	utils.TestWarp("592 测试用例", func() {
		params1 := ""
		res := ""
		testTemp := func() {
			desc := params1 + " should return " + res
			utils.TestCondition(t, desc, FractionAddition(params1) == res)
		}

		params1 = "-1/2+1/2"
		res = "0/1"
		testTemp()

		params1 = "-1/2+1/2+1/3"
		res = "1/3"
		testTemp()

		params1 = "1/3-1/2"
		res = "-1/6"
		testTemp()
	})
}

func TestSolveEquation(t *testing.T) {
	utils.TestWarp("640 测试用例", func() {
		params1 := ""
		res := ""
		testTemp := func() {
			desc := params1 + " should return " + res
			utils.TestCondition(t, desc, SolveEquation(params1) == res)
		}

		params1 = "x+5-3+x=6+x-2"
		res = "x=2"
		testTemp()

		params1 = "x=x"
		res = "Infinite solutions"
		testTemp()

		params1 = "2x=x"
		res = "x=0"
		testTemp()

		params1 = "x=x+2"
		res = "No solution"
		testTemp()
	})
}

func TestCountAndSay(t *testing.T) {
	utils.TestWarp("38 测试用例", func() {
		params1 := 0
		res := ""
		testTemp := func() {
			desc := strconv.Itoa(params1) + " should return " + res
			utils.TestCondition(t, desc, CountAndSay(params1) == res)
		}

		params1 = 1
		res = "1"
		testTemp()

		params1 = 4
		res = "1211"
		testTemp()

		params1 = 5
		res = "111221"
		testTemp()
	})
}

func TestCompress(t *testing.T) {
	utils.TestWarp("443 测试用例", func() {
		params1 := []byte{}
		res := 0
		testTemp := func() {
			desc := string(params1) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, Compress(params1) == res)
		}

		params1 = []byte{
			'a', 'a', 'b', 'b', 'c', 'c', 'c',
		}
		res = 6
		testTemp()

		params1 = []byte{
			'a',
		}
		res = 1
		testTemp()

		params1 = []byte{
			'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
		}
		res = 4
		testTemp()

	})
}

func TestMyAtoi(t *testing.T) {
	utils.TestWarp("8 测试用例", func() {
		params1 := ""
		res := 0
		testTemp := func() {
			desc := params1 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, MyAtoi(params1) == res)
		}

		params1 = "-91283472332"
		res = -2147483648
		testTemp()

		params1 = "9223372036854775808"
		res = 2147483647
		testTemp()

		params1 = "42"
		res = 42
		testTemp()

		params1 = "    -42"
		res = -42
		testTemp()

		params1 = "4193 with words"
		res = 4193
		testTemp()

		params1 = "words and 987"
		res = 0
		testTemp()

		params1 = "+-12"
		res = 0
		testTemp()

		params1 = "00000-42a1234"
		res = 0
		testTemp()

		params1 = "  +  413"
		res = 0
		testTemp()

	})
}

func TestRomanToInt(t *testing.T) {
	utils.TestWarp("13 测试用例", func() {
		params1 := ""
		res := 0
		testTemp := func() {
			desc := params1 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, RomanToInt(params1) == res)
		}

		params1 = "III"
		res = 3
		testTemp()

		params1 = "IV"
		res = 4
		testTemp()

		params1 = "IX"
		res = 9
		testTemp()

		params1 = "LVIII"
		res = 58
		testTemp()

		params1 = "MCMXCIV"
		res = 1994
		testTemp()

	})
}

func TestIntToRoman(t *testing.T) {
	utils.TestWarp("13 测试用例", func() {
		params1 := ""
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(res) + " should return " + params1
			utils.TestCondition(t, desc, IntToRoman(res) == params1)
		}

		params1 = "III"
		res = 3
		testTemp()

		params1 = "IV"
		res = 4
		testTemp()

		params1 = "IX"
		res = 9
		testTemp()

		params1 = "LVIII"
		res = 58
		testTemp()

		params1 = "MCMXCIV"
		res = 1994
		testTemp()

	})
}

func TestNumberToWords(t *testing.T) {
	utils.TestWarp("273 测试用例", func() {
		params1 := 0
		res := ""
		testTemp := func() {
			desc := strconv.Itoa(params1) + " should return " + res
			utils.TestCondition(t, desc, NumberToWords(params1) == res)
		}

		params1 = 123
		res = "One Hundred Twenty Three"
		testTemp()

		params1 = 12345
		res = "Twelve Thousand Three Hundred Forty Five"
		testTemp()

		params1 = 1234567
		res = "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
		testTemp()

		params1 = 2147483648
		res = "Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Eight"
		testTemp()
	})
}

func TestCompareVersion(t *testing.T) {
	utils.TestWarp("165 测试用例", func() {
		params1 := ""
		params2 := ""
		res := 0
		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, CompareVersion(params1, params2) == res)
		}

		params1 = "1.01"
		params2 = "1.001"
		res = 0
		testTemp()

		params1 = "1.0"
		params2 = "1.0.0"
		res = 0
		testTemp()

		params1 = "0.1"
		params2 = "1.1"
		res = -1
		testTemp()
	})
}

func TestMagicalString(t *testing.T) {
	utils.TestWarp("481 测试用例", func() {
		params1 := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params1) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, MagicalString(params1) == res)
		}

		params1 = 6
		res = 3
		testTemp()

		params1 = 1
		res = 1
		testTemp()

		params1 = 7
		res = 4
		testTemp()
	})
}
