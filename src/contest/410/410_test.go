package c410

import (
	"fmt"
	"testing"
)

func TestCountGoodNodes(t *testing.T) {
	val1 := countGoodNodes([][]int{
		{0, 1},
		{1, 2},
		{1, 3},
		{1, 4},
		{0, 5},
		{5, 6},
		{6, 7},
		{7, 8},
		{0, 9},
		{9, 10},
		{9, 12},
		{10, 11},
	})

	fmt.Println(val1)

	val2 := countGoodNodes([][]int{
		{6, 0},
		{1, 0},
		{5, 1},
		{2, 5},
		{3, 1},
		{4, 3},
	})

	fmt.Println(val2)

}

func TestCountOfPairs1(t *testing.T) {
	val := countOfPairs([]int{2, 3, 2})
	fmt.Println(val)
}
