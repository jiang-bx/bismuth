package packagedp

import (
	"encoding/json"
	"leetcode/src/utils"
	"testing"
)

func TestCoinChange(t *testing.T) {
	utils.TestWarp("322 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, CoinChange(params1, params2) == res)
		}

		params1 = []int{1, 2, 5}
		params2 = 11
		res = 3
		testTemp()

		params1 = []int{2}
		params2 = 3
		res = -1
		testTemp()

		params1 = []int{1}
		params2 = 0
		res = 0
		testTemp()

	})
}
