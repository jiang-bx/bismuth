package c_414

import (
	"testing"
)

func TestConvertDateToBinary(t *testing.T) {
	t.Run("2080-02-29", func(t *testing.T) {
		a := ConvertDateToBinary("2080-02-29")
		res := "100000100000-10-11101"
		if a == res {
			t.Log("成功")
		} else {
			t.Fatalf("失败")
		}
	})
}

func TestMaxPossibleScore(t *testing.T) {
	params1 := []int{}
	params2 := 1
	res := 1

	t.Run("test1", func(t *testing.T) {
		params1 = []int{6, 0, 3}
		params2 = 2
		res = 4

		if MaxPossibleScore(params1, params2) == res {
			t.Log("通过 PASS")
		} else {
			t.Fatalf("失败")
		}
	})
}

func TestFindMaximumScore(t *testing.T) {
	params1 := []int{}
	var res int64 = 1

	t.Run("test1", func(t *testing.T) {
		params1 = []int{1, 3, 1, 5}
		res = 7

		if FindMaximumScore(params1) == res {
			t.Log("通过 PASS")
		} else {
			t.Fatalf("失败")
		}
	})

	t.Run("test2", func(t *testing.T) {
		params1 = []int{4, 3, 1, 3, 2}
		res = 16

		if FindMaximumScore(params1) == res {
			t.Log("通过 PASS")
		} else {
			t.Fatalf("失败")
		}
	})
}
