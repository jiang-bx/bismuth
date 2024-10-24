package arraydp

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
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

func TestClimbStairs(t *testing.T) {
	utils.TestWarp("70 测试用例", func() {
		params1 := 0
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ClimbStairs(params1) == res)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = 2
			res = 2
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = 3
			res = 3
			testTemp()
		})

	})
}

func TestCountBits(t *testing.T) {
	utils.TestWarp("338 测试用例", func() {
		params1 := 0
		params2 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(CountBits(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = 2
			res = []int{0, 1, 1}
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = 5
			res = []int{0, 1, 1, 2, 1, 2}
			testTemp()
		})

	})
}

func TestJump(t *testing.T) {
	utils.TestWarp("45 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(Jump(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{2, 3, 1, 1, 4}
			res = 2
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{2, 3, 0, 1, 4}
			res = 2
			testTemp()
		})

	})
}

func TestCanJump(t *testing.T) {
	utils.TestWarp("55 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(CanJump(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{2, 3, 1, 1, 4}
			res = true
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{3, 2, 1, 0, 4}
			res = false
			testTemp()
		})

	})
}

func TestRob(t *testing.T) {
	utils.TestWarp("198 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(Rob(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{1, 2, 3, 1}
			res = 4
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{2, 7, 9, 3, 1}
			res = 12
			testTemp()
		})

	})
}

func TestRob_213(t *testing.T) {
	utils.TestWarp("213 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(Rob_213(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{2, 3, 2}
			res = 3
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{1, 2, 3, 1}
			res = 4
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = []int{1, 2, 3}
			res = 3
			testTemp()
		})

	})
}

func TestMinSteps(t *testing.T) {
	utils.TestWarp("650 测试用例", func() {
		params1 := 1
		params2 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(MinSteps(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = 3
			res = 3
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = 1
			res = 0
			testTemp()
		})

	})
}

func TestNumDecodings(t *testing.T) {
	utils.TestWarp("91 测试用例", func() {
		params1 := ""
		params2 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(NumDecodings(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = "12"
			res = 2
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = "226"
			res = 3
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = "06"
			res = 0
			testTemp()
		})

	})
}

func TestNumDecodings_639(t *testing.T) {
	utils.TestWarp("639 测试用例", func() {
		params1 := ""
		params2 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(NumDecodings_639(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = "*"
			res = 9
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = "1*"
			res = 18
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = "2*"
			res = 15
			testTemp()
		})

		t.Run("test4", func(t *testing.T) {
			params1 = "*10*1"
			res = 99
			testTemp()
		})

	})
}

func TestCheckRecord_552(t *testing.T) {
	utils.TestWarp("552 测试用例", func() {
		params1 := 1
		params2 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(CheckRecord_552(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = 2
			res = 8
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = 1
			res = 3
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = 10101
			res = 183236316
			testTemp()
		})

	})
}

func TestMaxProfit_123(t *testing.T) {
	utils.TestWarp("123 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(MaxProfit_123(params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{3, 3, 5, 0, 0, 3, 1, 4}
			res = 6
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{1, 2, 3, 4, 5}
			res = 4
			testTemp()
		})

		t.Run("test3", func(t *testing.T) {
			params1 = []int{7, 6, 4, 3, 1}
			res = 0
			testTemp()
		})

		t.Run("test4", func(t *testing.T) {
			params1 = []int{1}
			res = 0
			testTemp()
		})

	})
}

func TestMaxProfit_188(t *testing.T) {
	utils.TestWarp("188 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(
				t,
				desc,
				reflect.DeepEqual(MaxProfit_188(params2, params1), res),
			)
		}

		t.Run("test1", func(t *testing.T) {
			params1 = []int{2, 4, 1}
			params2 = 2
			res = 2
			testTemp()
		})

		t.Run("test2", func(t *testing.T) {
			params1 = []int{3, 2, 6, 5, 0, 3}
			params2 = 2
			res = 7
			testTemp()
		})

	})
}
