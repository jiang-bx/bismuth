package precisionoperation

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"strconv"
	"testing"
)

func TestPlusOne(t *testing.T) {
	utils.TestWarp("66 测试用例", func() {
		params1 := []int{}
		res := []int{}

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(PlusOne(params1), res))
		}

		params1 = []int{1, 2, 3}
		res = []int{1, 2, 4}
		testTemp()

		params1 = []int{4, 3, 2, 1}
		res = []int{4, 3, 2, 2}
		testTemp()

		params1 = []int{0}
		res = []int{1}
		testTemp()

		params1 = []int{9, 9}
		res = []int{1, 0, 0}
		testTemp()
	})
}

func TestAddBinary(t *testing.T) {
	utils.TestWarp("66 测试用例", func() {
		params1 := ""
		params2 := ""
		res := ""

		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + res
			utils.TestCondition(t, desc, AddBinary(params1, params2) == res)
		}

		params1 = "11"
		params2 = "1"
		res = "100"
		testTemp()

		params1 = "1010"
		params2 = "1011"
		res = "10101"
		testTemp()

		params1 = "1111"
		params2 = "1111"
		res = "11110"
		testTemp()

		params1 = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
		params2 = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
		res = "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
		testTemp()
	})
}

func TestAddStrings(t *testing.T) {
	utils.TestWarp("415 测试用例", func() {
		params1 := ""
		params2 := ""
		res := ""

		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + res
			utils.TestCondition(t, desc, AddStrings(params1, params2) == res)
		}

		params1 = "11"
		params2 = "123"
		res = "134"
		testTemp()

		params1 = "456"
		params2 = "77"
		res = "533"
		testTemp()

		params1 = "0"
		params2 = "0"
		res = "0"
		testTemp()
	})
}

func TestMultiply(t *testing.T) {
	utils.TestWarp("43 测试用例", func() {
		params1 := ""
		params2 := ""
		res := ""

		testTemp := func() {
			desc := params1 + ", " + params2 + " should return " + res
			utils.TestCondition(t, desc, Multiply(params1, params2) == res)
		}

		params1 = "2"
		params2 = "3"
		res = "6"
		testTemp()

		params1 = "456"
		params2 = "123"
		res = "56088"
		testTemp()

		params1 = "56088"
		params2 = "0"
		res = "0"
		testTemp()

		params1 = "999"
		params2 = "99999"
		res = "99899001"
		testTemp()
	})
}

func TestIsAdditiveNumber(t *testing.T) {
	utils.TestWarp("306 测试用例", func() {
		params1 := ""
		res := false

		testTemp := func() {
			desc := params1 + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsAdditiveNumber(params1) == res)
		}

		params1 = "112358"
		res = true
		testTemp()

		params1 = "199100199"
		res = true
		testTemp()
	})
}
