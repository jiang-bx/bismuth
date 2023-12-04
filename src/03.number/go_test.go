package number_bit

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"strconv"
	"testing"
)

func TestReverse(t *testing.T) {
	utils.TestWarp("7 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, Reverse(params) == res)
		}

		params = 123
		res = 321
		testTemp()

		params = -123
		res = -321
		testTemp()

		params = 120
		res = 21
		testTemp()

		params = 0
		res = 0
		testTemp()

		params = 1534236469
		res = 0
		testTemp()
	})
}

func TestIsPalindrome(t *testing.T) {
	utils.TestWarp("9 测试用例", func() {
		params := 0
		res := false
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsPalindrome(params) == res)
		}

		params = 121
		res = true
		testTemp()

		params = -121
		res = false
		testTemp()

		params = 10
		res = false
		testTemp()

		params = 0
		res = true
		testTemp()
	})
}

func TestLargestPalindrome(t *testing.T) {
	utils.TestWarp("9 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, LargestPalindrome(params) == res)
		}

		params = 2
		res = 987
		testTemp()

		params = 1
		res = 9
		testTemp()

		params = 8
		res = 475
		testTemp()
	})
}

func TestNearestPalindromic(t *testing.T) {
	utils.TestWarp("9 测试用例", func() {
		params := ""
		res := ""
		testTemp := func() {
			desc := params + " should return " + res
			utils.TestCondition(t, desc, NearestPalindromic(params) == res)
		}

		params = "123"
		res = "121"
		testTemp()

		params = "1"
		res = "0"
		testTemp()

		params = "168861"
		res = "167761"
		testTemp()

		params = "13330"
		res = "13331"
		testTemp()
	})
}

func TestIsPowerOfTwo(t *testing.T) {
	utils.TestWarp("231 测试用例", func() {
		params := 0
		res := false
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsPowerOfTwo(params) == res)
		}

		params = 1
		res = true
		testTemp()

		params = 16
		res = true
		testTemp()

		params = 4
		res = true
		testTemp()

		params = 3
		res = false
		testTemp()

		params = 5
		res = false
		testTemp()

		params = 6
		res = false
		testTemp()
	})
}

func TestIsPowerOfFour(t *testing.T) {
	utils.TestWarp("342 测试用例", func() {
		params := 0
		res := false
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsPowerOfFour(params) == res)
		}

		params = 1
		res = true
		testTemp()

		params = 16
		res = true
		testTemp()

		params = 4
		res = true
		testTemp()

		params = 3
		res = false
		testTemp()

		params = 5
		res = false
		testTemp()

		params = 2
		res = false
		testTemp()
	})
}

func TestIsPowerOfThree(t *testing.T) {
	utils.TestWarp("326 测试用例", func() {
		params := 0
		res := false
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsPowerOfThree(params) == res)
		}

		params = 27
		res = true
		testTemp()

		params = 9
		res = true
		testTemp()

		params = 0
		res = false
		testTemp()

		params = 45
		res = false
		testTemp()
	})
}

func TestConvertToBase7(t *testing.T) {
	utils.TestWarp("326 测试用例", func() {
		params := 0
		res := ""
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + res
			utils.TestCondition(t, desc, ConvertToBase7(params) == res)
		}

		params = 100
		res = "202"
		testTemp()

		params = -7
		res = "-10"
		testTemp()

		params = -8
		res = "-11"
		testTemp()

		params = 0
		res = "0"
		testTemp()
	})
}

func TestIsUgly(t *testing.T) {
	utils.TestWarp("326 测试用例", func() {
		params := 0
		res := false
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsUgly(params) == res)
		}

		params = 6
		res = true
		testTemp()

		params = 1
		res = true
		testTemp()

		params = 14
		res = false
		testTemp()
	})
}

func TestReverseBits(t *testing.T) {
	utils.TestWarp("190 测试用例", func() {
		params := uint32(0)
		res := uint32(0)
		testTemp := func() {
			desc := strconv.Itoa(int(params)) + " should return " + strconv.Itoa(int(res))
			utils.TestCondition(t, desc, ReverseBits(params) == res)
		}

		params = 0b00000010100101000001111010011100
		res = 0b00111001011110000010100101000000
		testTemp()

		params = 0b11111111111111111111111111111101
		res = 0b10111111111111111111111111111111
		testTemp()
	})
}

func TestHammingWeight(t *testing.T) {
	utils.TestWarp("191 测试用例", func() {
		var params uint = 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(int(params)) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, HammingWeight(params) == res)
		}

		params = 0b00000000000000000000000000001011
		res = 3
		testTemp()

		params = 0b00000000000000000000000010000000
		res = 1
		testTemp()

		params = 0b11111111111111111111111111111101
		res = 31
		testTemp()
	})
}

func TestFindComplement(t *testing.T) {
	utils.TestWarp("476 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(int(params)) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, FindComplement(params) == res)
		}

		params = 5
		res = 2
		testTemp()

		params = 1
		res = 0
		testTemp()

		params = 2147483647
		res = 0
		testTemp()
	})
}

func TestHammingDistance(t *testing.T) {
	utils.TestWarp("461 测试用例", func() {
		params1 := 0
		params2 := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(int(params1)) + ", " + strconv.Itoa(int(params2)) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, HammingDistance(params1, params2) == res)
		}

		params1 = 1
		params2 = 4
		res = 2
		testTemp()

		params1 = 3
		params2 = 1
		res = 1
		testTemp()

		params1 = 4
		params2 = 3
		res = 3
		testTemp()

		params1 = 4
		params2 = 4
		res = 0
		testTemp()
	})
}

func TestTotalHammingDistance(t *testing.T) {
	utils.TestWarp("477 测试用例", func() {
		params1 := []int{}
		res := 0
		testTemp := func() {
			params1Str, _ := json.Marshal(params1)
			desc := string(params1Str) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, TotalHammingDistance(params1) == res)
		}

		params1 = []int{4, 14, 2}
		res = 6
		testTemp()

		params1 = []int{4, 14, 4}
		res = 4
		testTemp()
	})
}

func TestHasAlternatingBits(t *testing.T) {
	utils.TestWarp("693 测试用例", func() {
		params := 0
		res := false
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, HasAlternatingBits(params) == res)
		}

		params = 5
		res = true
		testTemp()

		params = 7
		res = false
		testTemp()

		params = 11
		res = false
		testTemp()
	})
}

func TestValidUtf8(t *testing.T) {
	utils.TestWarp("393 测试用例", func() {
		params1 := []int{}
		res := false
		testTemp := func() {
			params1Str, _ := json.Marshal(params1)
			desc := string(params1Str) + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, ValidUtf8(params1) == res)
		}

		params1 = []int{197, 130, 1}
		res = true
		testTemp()

		params1 = []int{235, 140, 4}
		res = false
		testTemp()

		params1 = []int{250, 145, 145, 145, 145}
		res = false
		testTemp()

		params1 = []int{145}
		res = false
		testTemp()
	})
}

func TestTrailingZeroes(t *testing.T) {
	utils.TestWarp("172 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, TrailingZeroes(params) == res)
		}

		params = 5
		res = 1
		testTemp()

		params = 3
		res = 0
		testTemp()

		params = 0
		res = 0
		testTemp()

		params = 25
		res = 6
		testTemp()
	})
}

func TestPoorPigs(t *testing.T) {
	utils.TestWarp("458 测试用例", func() {
		params1 := 0
		params2 := 0
		params3 := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params1) + ", " + strconv.Itoa(params2) + ", " + strconv.Itoa(params3) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, PoorPigs(params1, params2, params3) == res)
		}

		params1 = 1000
		params2 = 15
		params3 = 60
		res = 5
		testTemp()

		params1 = 4
		params2 = 15
		params3 = 15
		res = 2
		testTemp()

		params1 = 4
		params2 = 15
		params3 = 30
		res = 2
		testTemp()
	})
}

func TestAddDigits(t *testing.T) {
	utils.TestWarp("258 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, AddDigits(params) == res)
		}

		params = 38
		res = 2
		testTemp()

		params = 0
		res = 0
		testTemp()

		params = 199
		res = 1
		testTemp()
	})
}

func TestBulbSwitch(t *testing.T) {
	utils.TestWarp("319 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, BulbSwitch(params) == res)
		}

		params = 3
		res = 1
		testTemp()

		params = 0
		res = 0
		testTemp()

		params = 1
		res = 1
		testTemp()

		params = 100000
		res = 316
		testTemp()
	})
}

func TestToHex(t *testing.T) {
	utils.TestWarp("405 测试用例", func() {
		params := 0
		res := ""
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + res
			utils.TestCondition(t, desc, ToHex(params) == res)
		}

		params = 26
		res = "1a"
		testTemp()

		params = -1
		res = "ffffffff"
		testTemp()
	})
}

func TestTitleToNumber(t *testing.T) {
	utils.TestWarp("171 测试用例", func() {
		params := ""
		res := 0
		testTemp := func() {
			desc := params + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, TitleToNumber(params) == res)
		}

		params = "A"
		res = 1
		testTemp()

		params = "AB"
		res = 28
		testTemp()

		params = "ZY"
		res = 701
		testTemp()

		params = "FXSHRXW"
		res = 2147483647
		testTemp()
	})
}

func TestConvertToTitle(t *testing.T) {
	utils.TestWarp("168 测试用例", func() {
		params := 0
		res := ""
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + res
			utils.TestCondition(t, desc, ConvertToTitle(params) == res)
		}

		params = 1
		res = "A"
		testTemp()

		params = 28
		res = "AB"
		testTemp()

		params = 701
		res = "ZY"
		testTemp()

		params = 2147483647
		res = "FXSHRXW"
		testTemp()
	})
}

func TestMaximumSwap(t *testing.T) {
	utils.TestWarp("168 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, MaximumSwap(params) == res)
		}

		params = 2736
		res = 7236
		testTemp()

		params = 9973
		res = 9973
		testTemp()
	})
}

func TestCountDigitOne(t *testing.T) {
	utils.TestWarp("233 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, CountDigitOne(params) == res)
		}

		params = 13
		res = 6
		testTemp()

		params = 0
		res = 0
		testTemp()

		params = 32104
		res = 23626
		testTemp()
	})
}

func TestCountNumbersWithUniqueDigits(t *testing.T) {
	utils.TestWarp("357 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, CountNumbersWithUniqueDigits(params) == res)
		}

		params = 2
		res = 91
		testTemp()

		params = 0
		res = 1
		testTemp()
	})
}

func TestFindNthDigit(t *testing.T) {
	utils.TestWarp("400 测试用例", func() {
		params := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, FindNthDigit(params) == res)
		}

		params = 3
		res = 3
		testTemp()

		params = 11
		res = 0
		testTemp()
	})
}

func TestConstructRectangle(t *testing.T) {
	utils.TestWarp("492 测试用例", func() {
		params := 0
		res := []int{}
		testTemp := func() {
			resStr, _ := json.Marshal(res)
			desc := strconv.Itoa(params) + " should return " + string(resStr)
			utils.TestCondition(t, desc, reflect.DeepEqual(ConstructRectangle(params), res))
		}

		params = 4
		res = []int{2, 2}
		testTemp()

		params = 37
		res = []int{37, 1}
		testTemp()

		params = 122122
		res = []int{427, 286}
		testTemp()
	})
}

func TestDivide(t *testing.T) {
	utils.TestWarp("29 测试用例", func() {
		params1 := 0
		params2 := 0
		res := 0
		testTemp := func() {
			desc := strconv.Itoa(params1) + ", " + strconv.Itoa(params2) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, Divide(params1, params2) == res)
		}

		params1 = 10
		params2 = 3
		res = 3
		testTemp()

		params1 = 7
		params2 = -3
		res = -2
		testTemp()

		params1 = -2147483648
		params2 = -1
		res = 2147483647
		testTemp()
	})
}

func TestCheckPerfectNumber(t *testing.T) {
	utils.TestWarp("507 测试用例", func() {
		params1 := 0
		res := false
		testTemp := func() {
			desc := strconv.Itoa(params1) + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, CheckPerfectNumber(params1) == res)
		}

		params1 = 28
		res = true
		testTemp()

		params1 = 7
		res = false
		testTemp()

		params1 = 100000000
		res = false
		testTemp()
	})
}

func TestMyPow(t *testing.T) {
	utils.TestWarp("50 测试用例", func() {
		params1 := 1.00
		params2 := 1
		res := 1.00
		testTemp := func() {
			desc := strconv.FormatFloat(params1, 'f', 5, 64) + ", " + strconv.Itoa(params2) + " should return " + strconv.FormatFloat(res, 'f', 5, 64)
			utils.TestCondition(t, desc, MyPow(params1, params2) == res)
		}

		params1 = 2.00000
		params2 = 10
		res = 1024
		testTemp()

		params1 = 2.10000
		params2 = 3
		res = 9.261
		testTemp()

		params1 = 2.00000
		params2 = -2
		res = 0.25000
		testTemp()
	})
}

func TestSuperPow(t *testing.T) {
	utils.TestWarp("50 测试用例", func() {
		params1 := 1
		params2 := []int{}
		res := 1
		testTemp := func() {
			str2, _ := json.Marshal(params2)
			desc := strconv.Itoa(params1) + ", " + string(str2) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, SuperPow(params1, params2) == res)
		}

		params1 = 2
		params2 = []int{3}
		res = 8
		testTemp()

		params1 = 2
		params2 = []int{1, 0}
		res = 1024
		testTemp()

		params1 = 1
		params2 = []int{4, 3, 3, 8, 5, 2}
		res = 1
		testTemp()

		params1 = 2147483647
		params2 = []int{2, 0, 0}
		res = 1198
		testTemp()
	})
}
