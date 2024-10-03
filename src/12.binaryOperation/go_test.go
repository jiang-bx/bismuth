package binary_operation

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestSplitArray(t *testing.T) {
	utils.TestWarp("89 测试用例", func() {
		params1 := 1
		params2 := 1
		params3 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			utils.TestCondition(
				t, desc,
				reflect.DeepEqual(GrayCode(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = 2
			res = []int{0, 1, 3, 2}
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = 1
			res = []int{0, 1}
			testTemp()
		})

	})
}
