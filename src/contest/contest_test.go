package contest

import (
	"reflect"
	"testing"
)

func checkPass(t *testing.T, pass bool) {
	if pass {
		t.Log("PASS")
	} else {
		t.Fatalf("失败")
	}
}

func Test415(t *testing.T) {
	c := &C_415{}
	t.Run("GetSneakyNumbers test", func(t *testing.T) {
		t.Run(" GetSneakyNumbers test1", func(t *testing.T) {
			checkPass(t, reflect.DeepEqual(
				c.GetSneakyNumbers([]int{0, 1, 1, 0}),
				[]int{0, 1},
			))
		})

		t.Run("test2", func(t *testing.T) {
			checkPass(t, reflect.DeepEqual(
				c.GetSneakyNumbers([]int{0, 3, 2, 1, 3, 2}),
				[]int{2, 3},
			))
		})
	})

	t.Run("MaxScore test 1", func(t *testing.T) {
		checkPass(t, c.MaxScore(
			[]int{3, 2, 5, 6},
			[]int{2, -6, 4, -5, -3, 2, -7},
		) == 26)
	})

	t.Run("MaxScore test 2", func(t *testing.T) {
		checkPass(t, c.MaxScore(
			[]int{-1, 4, 5, -2},
			[]int{-5, -1, -3, -2, -4},
		) == -1)
	})
}

func Test416(t *testing.T) {
	c := &C_416{}
	t.Run("reportSpam test 1", func(t *testing.T) {
		checkPass(t, c.reportSpam(
			[]string{"s", "a", "aj", "ps", "h", "ou", "e", "i", "x"},
			[]string{"j", "a", "b", "fa", "z", "a", "no", "ih", "nq"},
		) == false)
	})

	t.Run("reportSpam test 2", func(t *testing.T) {
		checkPass(t, c.reportSpam(
			[]string{"hello", "world", "leetcode"},
			[]string{"world", "hello"},
		) == true)
	})

	t.Run("minNumberOfSeconds test 1", func(t *testing.T) {
		checkPass(t, c.minNumberOfSeconds(
			4,
			[]int{2, 1, 1},
		) == 3)
	})

	t.Run("minNumberOfSeconds test 2", func(t *testing.T) {
		checkPass(t, c.minNumberOfSeconds(
			10,
			[]int{3, 2, 2, 4},
		) == 12)
	})

	t.Run("minNumberOfSeconds test 3", func(t *testing.T) {
		checkPass(t, c.minNumberOfSeconds(
			5,
			[]int{1},
		) == 15)
	})
}
