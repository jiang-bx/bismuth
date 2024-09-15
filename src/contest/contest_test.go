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
