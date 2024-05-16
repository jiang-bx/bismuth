package tree

import (
	"encoding/json"
	"leetcode/src/utils"
	"math"
	"reflect"
	"testing"
)

func TestFindDuplicate(t *testing.T) {
	utils.TestWarp("100 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, IsSameTree(CreateTree(params1), CreateTree(params2)) == res)
		}

		params1 = []int{1, 2, 3}
		params2 = []int{1, 2, 3}
		res = true
		testTemp()

		params1 = []int{1, 2}
		params2 = []int{1, math.MinInt, 2}
		res = false
		testTemp()

		params1 = []int{1, 2, 1}
		params2 = []int{1, 1, 2}
		res = false
		testTemp()
	})
}

func TestCountNodes(t *testing.T) {
	utils.TestWarp("222 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, CountNodes(CreateTree(params1)) == res)
		}

		params1 = []int{1, 2, 3, 4, 5, 6}
		res = 6
		testTemp()

		params1 = []int{}
		res = 0
		testTemp()

		params1 = []int{1}
		res = 1
		testTemp()
	})
}

func TestIsSymmetric(t *testing.T) {
	utils.TestWarp("101 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, IsSymmetric(CreateTree(params1)) == res)
		}

		params1 = []int{1, 2, 2, 3, 4, 4, 3}
		res = true
		testTemp()

		params1 = []int{1, 2, 2, math.MinInt, 3, math.MinInt, 3}
		res = false
		testTemp()
	})
}

func TestInvertTree(t *testing.T) {
	utils.TestWarp("226 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)
			p2 := CreateTree(res)

			utils.TestCondition(t, desc, IsSameTree(InvertTree(p1), p2) == true)
		}

		params1 = []int{4, 2, 7, 1, 3, 6, 9}
		res = []int{4, 7, 2, 9, 6, 3, 1}
		testTemp()

		params1 = []int{2, 1, 3}
		res = []int{2, 3, 1}
		testTemp()

		params1 = []int{}
		res = []int{}
		testTemp()
	})
}

func TestPathSum(t *testing.T) {
	utils.TestWarp("437 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, PathSum(p1, params2) == res)
		}

		params1 = []int{10, 5, -3, 3, 2, math.MinInt, 11, 3, -2, math.MinInt, 1}
		params2 = 8
		res = 3
		testTemp()

		params1 = []int{5, 4, 8, 11, math.MinInt, 13, 4, 7, 2, math.MinInt, math.MinInt, math.MinInt, math.MinInt, 5, 1}
		params2 = 22
		res = 3
		testTemp()
	})
}

func TestFindTilt(t *testing.T) {
	utils.TestWarp("563 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, FindTilt(p1) == res)
		}

		params1 = []int{1, 2, 3}
		res = 1
		testTemp()

		params1 = []int{4, 2, 9, 3, 5, math.MinInt, 7}
		res = 15
		testTemp()

		params1 = []int{21, 7, 14, 1, 1, 2, 2, 3, 3}
		res = 9
		testTemp()
	})
}

func TestMergeTrees(t *testing.T) {
	utils.TestWarp("617 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)
			p2 := CreateTree(params2)
			r1 := CreateTree(res)

			utils.TestCondition(t, desc, IsSameTree(MergeTrees(p1, p2), r1) == true)
		}

		params1 = []int{1, 3, 2, 5}
		params2 = []int{2, 1, 3, math.MinInt, 4, math.MinInt, 7}
		res = []int{3, 4, 5, 5, 4, math.MinInt, 7}
		testTemp()

		params1 = []int{1}
		params2 = []int{1, 2}
		res = []int{2, 2}
		testTemp()
	})
}

func TestFindFrequentTreeSum(t *testing.T) {
	utils.TestWarp("508 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(FindFrequentTreeSum(p1), res))
		}

		params1 = []int{5, 2, -3}
		res = []int{2, -3, 4}
		testTemp()

		params1 = []int{5, 2, -5}
		res = []int{2}
		testTemp()

		params1 = []int{1}
		res = []int{1}
		testTemp()
	})
}

func TestIsSubtree(t *testing.T) {
	utils.TestWarp("572 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)
			p2 := CreateTree(params2)

			utils.TestCondition(t, desc, IsSubtree(p1, p2) == res)
		}

		params1 = []int{3, 4, 5, 1, 2}
		params2 = []int{4, 1, 2}
		res = true
		testTemp()

		params1 = []int{3, 4, 5, 1, 2, math.MinInt, math.MinInt, math.MinInt, math.MinInt, 0}
		params2 = []int{4, 1, 2}
		res = false
		testTemp()
	})
}

func TestDiameterOfBinaryTree(t *testing.T) {
	utils.TestWarp("543 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, DiameterOfBinaryTree(p1) == res)
		}

		params1 = []int{1, 2, 3, 4, 5}
		res = 3
		testTemp()

		params1 = []int{1, 2}
		res = 1
		testTemp()
	})
}

func TestConstructMaximumBinaryTree(t *testing.T) {
	utils.TestWarp("654 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(res)

			utils.TestCondition(t, desc, IsSameTree(ConstructMaximumBinaryTree(params1), p1) == true)
		}

		params1 = []int{3, 2, 1, 6, 0, 5}
		res = []int{6, 3, 5, math.MinInt, 2, 0, math.MinInt, math.MinInt, math.MinInt, math.MinInt, 1}
		testTemp()

		params1 = []int{3, 2, 1}
		res = []int{3, math.MinInt, 2, math.MinInt, math.MinInt, math.MinInt, 1}
		testTemp()
	})
}

func TestLongestUnivaluePath(t *testing.T) {
	utils.TestWarp("687 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, LongestUnivaluePath(p1) == res)
		}

		params1 = []int{5, 4, 5, 1, 1, math.MinInt, 5}
		res = 2
		testTemp()

		params1 = []int{1, 4, 5, 4, 4, math.MinInt, 5}
		res = 2
		testTemp()
	})
}

func TestIsScramble(t *testing.T) {
	utils.TestWarp("87 测试用例", func() {
		params1 := ""
		params2 := ""
		res := true
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, IsScramble(params1, params2) == res)
		}

		params1 = "great"
		params2 = "rgeat"
		res = true
		testTemp()

		params1 = "abcde"
		params2 = "caebd"
		res = false
		testTemp()

		params1 = "a"
		params2 = "a"
		res = true
		testTemp()
	})
}

func TestLevelOrder(t *testing.T) {
	utils.TestWarp("102 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(LevelOrder(p1), res))
		}

		params1 = []int{3, 9, 20, math.MinInt, math.MinInt, 15, 7}
		res = [][]int{
			{3},
			{9, 20},
			{15, 7},
		}
		testTemp()

		params1 = []int{1}
		res = [][]int{
			{1},
		}
		testTemp()

		params1 = []int{}
		res = [][]int{}
		testTemp()
	})
}

func TestGetImportance(t *testing.T) {
	utils.TestWarp("690 测试用例", func() {
		params1 := []*Employee{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, GetImportance(params1, params2) == res)
		}

		params1 = []*Employee{
			{
				Id:           1,
				Importance:   5,
				Subordinates: []int{2, 3},
			},
			{
				Id:           2,
				Importance:   3,
				Subordinates: []int{},
			},
			{
				Id:           3,
				Importance:   3,
				Subordinates: []int{},
			},
		}
		params2 = 1
		res = 11
		testTemp()
	})
}

func TestWidthOfBinaryTree(t *testing.T) {
	utils.TestWarp("662 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, WidthOfBinaryTree(p1) == res)
		}

		params1 = []int{1, 3, 2, 5, 3, math.MinInt, 9}
		res = 4
		testTemp()
	})
}

func TestFindSecondMinimumValue(t *testing.T) {
	utils.TestWarp("671 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, FindSecondMinimumValue(p1) == res)
		}

		params1 = []int{2, 2, 5, math.MinInt, math.MinInt, 5, 7}
		res = 5
		testTemp()

		params1 = []int{2, 2, 2}
		res = -1
		testTemp()
	})
}

func TestFindBottomLeftValue(t *testing.T) {
	utils.TestWarp("513 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := 1
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, FindBottomLeftValue(p1) == res)
		}

		params1 = []int{2, 1, 3}
		res = 1
		testTemp()

		params1 = []int{1, 2, 3, 4, math.MinInt, 5, 6, math.MinInt, math.MinInt, math.MinInt, math.MinInt, 7}
		res = 7
		testTemp()
	})
}

func TestLargestValues(t *testing.T) {
	utils.TestWarp("515 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(LargestValues(p1), res))
		}

		params1 = []int{1, 3, 2, 5, 3, math.MinInt, 9}
		res = []int{1, 3, 9}
		testTemp()

		params1 = []int{1, 2, 3}
		res = []int{1, 3}
		testTemp()
	})
}

func TestAverageOfLevels(t *testing.T) {
	utils.TestWarp("637 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []float64{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(AverageOfLevels(p1), res))
		}

		params1 = []int{3, 9, 20, math.MinInt, math.MinInt, 15, 7}
		res = []float64{3.00000, 14.50000, 11.00000}
		testTemp()

		params1 = []int{3, 9, 20, 15, 7}
		res = []float64{3.00000, 14.50000, 11.00000}
		testTemp()
	})
}

func TestZigzagLevelOrder(t *testing.T) {
	utils.TestWarp("103 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(ZigzagLevelOrder(p1), res))
		}

		params1 = []int{3, 9, 20, math.MinInt, math.MinInt, 15, 7}
		res = [][]int{{3}, {20, 9}, {15, 7}}
		testTemp()

		params1 = []int{1}
		res = [][]int{{1}}
		testTemp()

		params1 = []int{}
		res = [][]int{}
		testTemp()
	})
}

func TestCopy(t *testing.T) {
	ans := []int{1, 2, 3, 4, 5}
	ans = append(ans, -1)

	// 把 ans[0:] 所有得内容, 复制到 ans[1:] 中, 超出得抛弃
	copy(ans[1:], ans[0:])
	ans[0] = -1
}

func TestLevelOrderBottom(t *testing.T) {
	utils.TestWarp("107 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(LevelOrderBottom(p1), res))
		}

		params1 = []int{3, 9, 20, math.MinInt, math.MinInt, 15, 7}
		res = [][]int{{15, 7}, {9, 20}, {3}}
		testTemp()

		params1 = []int{1}
		res = [][]int{{1}}
		testTemp()

		params1 = []int{}
		res = [][]int{}
		testTemp()
	})
}

func TestBinaryTreePaths(t *testing.T) {
	utils.TestWarp("257 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(BinaryTreePaths(p1), res))
		}

		params1 = []int{1, 2, 3, math.MinInt, 5}
		res = []string{"1->2->5", "1->3"}
		testTemp()

		params1 = []int{1}
		res = []string{"1"}
		testTemp()

		params1 = []int{}
		res = []string{}
		testTemp()
	})
}

func TestAddOneRow(t *testing.T) {
	utils.TestWarp("623 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)
			p2 := CreateTree(res)

			val := AddOneRow(p1, params2, params3)

			utils.TestCondition(t, desc, IsSameTree(val, p2) == true)
		}

		params1 = []int{4, 2, 6, 3, 1, 5}
		params2 = 1
		params3 = 2
		res = []int{4, 1, 1, 2, math.MinInt, math.MinInt, 6, 3, 1, math.MinInt, math.MinInt, math.MinInt, math.MinInt, 5}
		testTemp()

		params1 = []int{4, 2, math.MinInt, 3, 1}
		params2 = 1
		params3 = 3
		res = []int{4, 2, math.MinInt, 1, 1, math.MinInt, math.MinInt, 3, math.MinInt, math.MinInt, 1}
		testTemp()
	})
}

func TestFindTarget(t *testing.T) {
	utils.TestWarp("653 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, FindTarget(p1, params2) == res)
		}

		params1 = []int{5, 3, 6, 2, 4, math.MinInt, 7}
		params2 = 9
		res = true
		testTemp()

		params1 = []int{5, 3, 6, 2, 4, math.MinInt, 7}
		params2 = 28
		res = false
		testTemp()
	})
}

func TestMaxDepth(t *testing.T) {
	utils.TestWarp("104 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, MaxDepth(p1) == res)
		}

		params1 = []int{3, 9, 20, math.MinInt, math.MinInt, 15, 7}
		res = 3
		testTemp()

		params1 = []int{1, math.MinInt, 2}
		res = 2
		testTemp()
	})
}

func TestMinDepth(t *testing.T) {
	utils.TestWarp("111 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, MinDepth(p1) == res)
		}

		params1 = []int{3, 9, 20, math.MinInt, math.MinInt, 15, 7}
		res = 2
		testTemp()

		params1 = []int{1, math.MinInt, 2, math.MinInt, math.MinInt, math.MinInt, 3}
		res = 3
		testTemp()
	})
}

func TestHasPathSum(t *testing.T) {
	utils.TestWarp("112 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, HasPathSum(p1, params2) == res)
		}

		params1 = []int{5, 4, 8, 11, math.MinInt, 13, 4, 7, 2, math.MinInt, math.MinInt, math.MaxInt, math.MaxInt, math.MinInt, 1}
		params2 = 22
		res = true
		testTemp()

		params1 = []int{1, 2, 3}
		params2 = 5
		res = false
		testTemp()

		params1 = []int{}
		params2 = 0
		res = false
		testTemp()
	})
}

func TestPathSum1(t *testing.T) {
	utils.TestWarp("113 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(PathSum1(p1, params2), res))
		}

		params1 = []int{5, 4, 8, 11, math.MinInt, 13, 4, 7, 2, math.MinInt, math.MinInt, math.MinInt, math.MinInt, 5, 1}
		params2 = 22
		res = [][]int{{5, 4, 11, 2}, {5, 8, 4, 5}}
		testTemp()

		params1 = []int{1, 2, 3}
		params2 = 5
		res = [][]int{}
		testTemp()

		params1 = []int{}
		params2 = 0
		res = [][]int{}
		testTemp()
	})
}

func TestSumNumbers(t *testing.T) {
	utils.TestWarp("129 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, SumNumbers(p1) == res)
		}

		params1 = []int{1, 2, 3}
		res = 25
		testTemp()

		params1 = []int{4, 9, 0, 5, 1}
		res = 1026
		testTemp()
	})
}

func TestSumOfLeftLeaves(t *testing.T) {
	utils.TestWarp("404 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, SumOfLeftLeaves(p1) == res)
		}

		params1 = []int{3, 9, 20, math.MinInt, math.MinInt, 15, 7}
		res = 24
		testTemp()

		params1 = []int{1}
		res = 0
		testTemp()
	})
}

func TestRightSideView(t *testing.T) {
	utils.TestWarp("199 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(RightSideView(p1), res))
		}

		params1 = []int{1, 2, 3, math.MinInt, 5, math.MinInt, 4}
		res = []int{1, 3, 4}
		testTemp()

		params1 = []int{1, math.MinInt, 3}
		res = []int{1, 3}
		testTemp()

		params1 = []int{}
		res = []int{}
		testTemp()
	})
}

func TestPrintTree(t *testing.T) {
	utils.TestWarp("655 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := [][]string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(PrintTree(p1), res))
		}

		params1 = []int{1, 2, 3, math.MinInt, 4}
		res = [][]string{
			{"", "", "", "1", "", "", ""},
			{"", "2", "", "", "", "3", ""},
			{"", "", "4", "", "", "", ""},
		}
		testTemp()

		params1 = []int{1, 2}
		res = [][]string{
			{"", "1", ""},
			{"2", "", ""},
		}
		testTemp()
	})
}

func TestPreorderTraversal(t *testing.T) {
	utils.TestWarp("144 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, reflect.DeepEqual(PreorderTraversal(p1), res))
		}

		params1 = []int{1, math.MinInt, 2, math.MinInt, math.MinInt, 3}
		res = []int{1, 2, 3}
		testTemp()

		params1 = []int{1, math.MinInt, 2}
		res = []int{1, 2}
		testTemp()

		params1 = []int{1, 2}
		res = []int{1, 2}
		testTemp()

		params1 = []int{1}
		res = []int{1}
		testTemp()

		params1 = []int{}
		res = []int{}
		testTemp()
	})
}

func TestTree2str(t *testing.T) {
	utils.TestWarp("606 测试用例", func() {
		params1 := []int{}
		params2 := 0
		params3 := 0
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			str3, _ := json.Marshal(params3)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + ", " + string(str3) + " should return " + string(res1)

			p1 := CreateTree(params1)

			utils.TestCondition(t, desc, Tree2str(p1) == res)
		}

		params1 = []int{1, 2, 3, 4}
		res = "1(2(4))(3)"
		testTemp()

		params1 = []int{1, 2, 3, math.MinInt, 4}
		res = "1(2()(4))(3)"
		testTemp()
	})
}
