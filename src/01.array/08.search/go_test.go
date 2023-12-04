package arraySearch

import (
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestNumArray(t *testing.T) {
	utils.TestWarp("303 测试用例", func() {
		test1 := func() {
			steps := [][]int{{0, 2}, {2, 5}, {0, 5}}
			nums := []int{-2, 0, 3, -5, 2, -1}
			res := []int{}
			obj := Constructor(nums)

			for _, v := range steps {
				res = append(res, obj.SumRange(v[0], v[1]))
			}

			utils.TestCondition(t, "1 号测试", reflect.DeepEqual(res, []int{
				1, -1, -3,
			}))
		}
		test1()
	})
}

func TestNumMatrix(t *testing.T) {
	utils.TestWarp("304 测试用例", func() {
		test1 := func() {
			matrix := [][]int{
				{3, 0, 1, 4, 2},
				{5, 6, 3, 2, 1},
				{1, 2, 0, 1, 5},
				{4, 1, 0, 1, 7},
				{1, 0, 3, 0, 5},
			}

			steps := [][]int{
				{2, 1, 4, 3},
				{1, 1, 2, 2},
				{1, 2, 2, 4},
			}

			res := []int{}

			obj := ConstructorNumMatrix(matrix)

			for _, v := range steps {
				res = append(res, obj.SumRegion(v[0], v[1], v[2], v[3]))
			}

			utils.TestCondition(t, "1 号", reflect.DeepEqual(res, []int{8, 11, 12}))
		}

		test1()
	})
}

func TestProductExceptSelf(t *testing.T) {
	utils.TestWarp("238 测试用例", func() {
		utils.TestCondition(t, "[1,2,3,4] should return [24,12,8,6]", reflect.DeepEqual(ProductExceptSelf([]int{1, 2, 3, 4}), []int{24, 12, 8, 6}))

		utils.TestCondition(t, "[-1,1,0,-3,3] should return [0,0,9,0,0]", reflect.DeepEqual(ProductExceptSelf([]int{-1, 1, 0, -3, 3}), []int{0, 0, 9, 0, 0}))
	})
}
