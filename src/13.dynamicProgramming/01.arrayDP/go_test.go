package arraydp

import (
	"encoding/json"
	"leetcode/src/utils"
	"testing"
)

func TestFib(t *testing.T) {
	utils.TestWarp("509 测试用例", func() {
		params1 := 0
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, Fib(params1) == res)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = 2
			res = 1
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = 3
			res = 2
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = 4
			res = 3
			testTemp()
		})

	})
}
