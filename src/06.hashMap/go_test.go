package hashmap

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"testing"
)

func TestContainsDuplicate(t *testing.T) {
	utils.TestWarp("217 测试用例", func() {
		params1 := []int{}
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			utils.TestCondition(t, desc, ContainsDuplicate(params1) == res)
		}

		params1 = []int{1, 2, 3, 1}
		res = true
		testTemp()

		params1 = []int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}
		res = true
		testTemp()

		params1 = []int{1, 2, 3, 4}
		res = false
		testTemp()

		params1 = []int{1, 5, -2, -4, 0}
		res = false
		testTemp()

	})
}

func TestJudgeSquareSum(t *testing.T) {
	utils.TestWarp("633 测试用例", func() {
		params1 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			utils.TestCondition(t, desc, JudgeSquareSum(params1) == res)
		}

		params1 = 5
		res = true
		testTemp()

		params1 = 3
		res = false
		testTemp()

	})
}

func TestIntersection(t *testing.T) {
	utils.TestWarp("349 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			utils.TestCondition(t, desc, reflect.DeepEqual(Intersection(params1, params2), res))
		}

		params1 = []int{1, 2, 2, 1}
		params2 = []int{2, 2}
		res = []int{2}
		testTemp()

		params1 = []int{4, 9, 5}
		params2 = []int{9, 4, 9, 8, 4}
		res = []int{9, 4}
		testTemp()

	})
}

func TestLongestConsecutive(t *testing.T) {
	utils.TestWarp("238 测试用例", func() {
		params1 := []int{}

		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			utils.TestCondition(t, desc, LongestConsecutive(params1) == res)
		}

		params1 = []int{100, 4, 200, 1, 3, 2}
		res = 4
		testTemp()

		params1 = []int{0, 3, 7, 2, 5, 8, 4, 6, 0, 1}
		res = 9
		testTemp()
	})
}

func TestIsHappy(t *testing.T) {
	utils.TestWarp("202 测试用例", func() {
		params1 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			utils.TestCondition(t, desc, IsHappy(params1) == res)
		}

		params1 = 19
		res = true
		testTemp()

		params1 = 2
		res = false
		testTemp()
	})
}

func TestFindWords(t *testing.T) {
	utils.TestWarp("500 测试用例", func() {
		params1 := []string{}
		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(FindWords(params1), res))
		}

		params1 = []string{"Hello", "Alaska", "Dad", "Peace"}
		res = []string{"Alaska", "Dad"}
		testTemp()

		params1 = []string{"omk"}
		res = []string{}
		testTemp()

		params1 = []string{"adsdf", "sfd"}
		res = []string{"adsdf", "sfd"}
		testTemp()
	})
}

func TestWordPattern(t *testing.T) {
	utils.TestWarp("290 测试用例", func() {
		params1 := ""
		params2 := ""
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)
			utils.TestCondition(t, desc, WordPattern(params1, params2) == res)
		}

		params1 = "abba"
		params2 = "dog cat cat dog"
		res = true
		testTemp()

		params1 = "abba"
		params2 = "dog cat cat fish"
		res = false
		testTemp()

		params1 = "aaaa"
		params2 = "dog cat cat dog"
		res = false
		testTemp()
	})
}

func TestFindPairs(t *testing.T) {
	utils.TestWarp("532 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindPairs(params1, params2) == res)
		}

		params1 = []int{3, 1, 4, 1, 5}
		params2 = 2
		res = 2
		testTemp()

		params1 = []int{1, 2, 3, 4, 5}
		params2 = 1
		res = 4
		testTemp()

		params1 = []int{1, 3, 1, 5, 4}
		params2 = 0
		res = 1
		testTemp()

	})
}

func TestIsIsomorphic(t *testing.T) {
	utils.TestWarp("205 测试用例", func() {
		params1 := ""
		params2 := ""
		res := true
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + params2 + " should return " + string(res1)
			utils.TestCondition(t, desc, IsIsomorphic(params1, params2) == res)
		}

		params1 = "egg"
		params2 = "add"
		res = true
		testTemp()

		params1 = "foo"
		params2 = "bar"
		res = false
		testTemp()

		params1 = "paper"
		params2 = "title"
		res = true
		testTemp()

	})
}

func TestFractionToDecimal(t *testing.T) {
	utils.TestWarp("166 测试用例", func() {
		params1 := 0
		params2 := 0
		res := ""
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FractionToDecimal(params1, params2) == res)
		}

		params1 = 1
		params2 = 2
		res = "0.5"
		testTemp()

		params1 = 2
		params2 = 1
		res = "2"
		testTemp()

		params1 = 4
		params2 = 333
		res = "0.(012)"
		testTemp()

	})
}

func TestGetMaxRepetitions(t *testing.T) {
	utils.TestWarp("466 测试用例", func() {
		params1 := ""
		params2 := 0
		params3 := ""
		params4 := 0

		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, GetMaxRepetitions(params1, params2, params3, params4) == res)
		}

		params1 = "acb"
		params2 = 4
		params3 = "ab"
		params4 = 2
		res = 2
		testTemp()

		params1 = "acb"
		params2 = 1
		params3 = "acb"
		params4 = 1
		res = 1
		testTemp()

	})
}

func TestCopyRandomList(t *testing.T) {
	utils.TestWarp("138 测试用例", func() {
		// CopyRandomList()
	})
}

func TestTwoSum(t *testing.T) {
	utils.TestWarp("01 测试用例", func() {
		params1 := []int{}
		params2 := 0

		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(TwoSum(params1, params2), res))
		}

		params1 = []int{2, 7, 11, 15}
		params2 = 9
		res = []int{0, 1}
		testTemp()

		params1 = []int{3, 2, 4}
		params2 = 6
		res = []int{1, 2}
		testTemp()

		params1 = []int{3, 3}
		params2 = 6
		res = []int{0, 1}
		testTemp()
	})
}

func TestTwoSum1(t *testing.T) {
	utils.TestWarp("167 测试用例", func() {
		params1 := []int{}
		params2 := 0

		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(TwoSum1(params1, params2), res))
		}

		params1 = []int{2, 7, 11, 15}
		params2 = 9
		res = []int{1, 2}
		testTemp()

		params1 = []int{3, 2, 4}
		params2 = 6
		res = []int{1, 3}
		testTemp()

		params1 = []int{-1, 0}
		params2 = -1
		res = []int{1, 2}
		testTemp()
	})
}

func TestFindRestaurant(t *testing.T) {
	utils.TestWarp("599 测试用例", func() {
		params1 := []string{}
		params2 := []string{}

		res := []string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(FindRestaurant(params1, params2), res))
		}

		params1 = []string{"Shogun", "Tapioca Express", "Burger King", "KFC"}
		params2 = []string{"Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"}
		res = []string{"Shogun"}
		testTemp()

		params1 = []string{"Shogun", "Tapioca Express", "Burger King", "KFC"}
		params2 = []string{"KFC", "Shogun", "Burger King"}
		res = []string{"Shogun"}
		testTemp()

	})
}

func TestContainsNearbyDuplicate(t *testing.T) {
	utils.TestWarp("219 测试用例", func() {
		params1 := []int{}
		params2 := 0

		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, ContainsNearbyDuplicate(params1, params2) == res)
		}

		params1 = []int{1, 2, 3, 1}
		params2 = 3
		res = true
		testTemp()

		params1 = []int{1, 0, 1, 1}
		params2 = 1
		res = true
		testTemp()

		params1 = []int{1, 2, 3, 1, 2, 3}
		params2 = 2
		res = false
		testTemp()
	})
}

func TestContainsNearbyAlmostDuplicate(t *testing.T) {
	utils.TestWarp("220 测试用例", func() {
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
			utils.TestCondition(t, desc, ContainsNearbyAlmostDuplicate(params1, params2, params3) == res)
		}

		params1 = []int{1, 2, 3, 1}
		params2 = 3
		params3 = 0
		res = true
		testTemp()

		params1 = []int{1, 5, 9, 1, 5, 9}
		params2 = 2
		params3 = 3
		res = false
		testTemp()

	})
}

func TestFindLHS(t *testing.T) {
	utils.TestWarp("594 测试用例", func() {
		params1 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindLHS(params1) == res)
		}

		params1 = []int{1, 3, 2, 2, 5, 2, 3, 7}
		res = 5
		testTemp()

		params1 = []int{1, 2, 3, 4}
		res = 2
		testTemp()

		params1 = []int{1, 1, 1, 1}
		res = 0
		testTemp()
	})
}

func TestIntersect(t *testing.T) {
	utils.TestWarp("350 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		res := []int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(Intersect(params1, params2), res))
		}

		params1 = []int{1, 2, 2, 1}
		params2 = []int{2, 2}
		res = []int{2, 2}
		testTemp()

		params1 = []int{4, 9, 5}
		params2 = []int{9, 4, 9, 8, 4}
		res = []int{4, 9}
		testTemp()
	})
}

func TestLeastBricks(t *testing.T) {
	utils.TestWarp("554 测试用例", func() {
		params1 := [][]int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)
			utils.TestCondition(t, desc, LeastBricks(params1) == res)
		}

		params1 = [][]int{{1, 2, 2, 1}, {3, 1, 2}, {1, 3, 2}, {2, 4}, {3, 1, 2}, {1, 3, 1, 1}}
		res = 2
		testTemp()

		params1 = [][]int{{1}, {1}, {1}}
		res = 3
		testTemp()

	})
}

func TestFindDuplicate(t *testing.T) {
	utils.TestWarp("609 测试用例", func() {
		params1 := []string{}
		res := [][]string{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(FindDuplicate(params1), res))
		}

		params1 = []string{"root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"}
		res = [][]string{
			{"root/a/2.txt", "root/c/d/4.txt", "root/4.txt"},
			{"root/a/1.txt", "root/c/3.txt"},
		}
		testTemp()

		params1 = []string{"root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)"}
		res = [][]string{
			{"root/a/2.txt", "root/c/d/4.txt"},
			{"root/a/1.txt", "root/c/3.txt"},
		}
		testTemp()

	})
}

func TestFourSumCount(t *testing.T) {
	utils.TestWarp("454 测试用例", func() {
		params1 := []int{}
		params2 := []int{}
		params3 := []int{}
		params4 := []int{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)
			utils.TestCondition(t, desc, FourSumCount(params1, params2, params3, params4) == res)
		}

		params1 = []int{1, 2}
		params2 = []int{-2, -1}
		params3 = []int{-1, 2}
		params4 = []int{0, 2}
		res = 2
		testTemp()

		params1 = []int{0}
		params2 = []int{0}
		params3 = []int{0}
		params4 = []int{0}
		res = 1
		testTemp()

	})
}

func TestFourSum(t *testing.T) {
	utils.TestWarp("18 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := [][]int{}
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(FourSum(params1, params2), res))
		}

		params1 = []int{1, 0, -1, 0, -2, 2}
		params2 = 0
		res = [][]int{
			{-2, -1, 1, 2},
			{-2, 0, 0, 2},
			{-1, 0, 0, 1},
		}
		testTemp()

		params1 = []int{2, 2, 2, 2, 2}
		params2 = 8
		res = [][]int{{2, 2, 2, 2}}
		testTemp()
	})
}

func TestSubarraySum(t *testing.T) {
	utils.TestWarp("560 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, SubarraySum(params1, params2) == res)
		}

		params1 = []int{1, 1, 1}
		params2 = 2
		res = 2
		testTemp()

		params1 = []int{1, 2, 3}
		params2 = 3
		res = 2
		testTemp()
	})
}

func TestCheckSubarraySum(t *testing.T) {
	utils.TestWarp("523 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := false
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, CheckSubarraySum(params1, params2) == res)
		}

		params1 = []int{23, 2, 4, 6, 7}
		params2 = 6
		res = true
		testTemp()

		params1 = []int{23, 2, 6, 4, 7}
		params2 = 6
		res = true
		testTemp()

		params1 = []int{23, 2, 6, 4, 7}
		params2 = 13
		res = false
		testTemp()
	})
}

func TestFindMaxLength(t *testing.T) {
	utils.TestWarp("525 测试用例", func() {
		params1 := []int{}
		params2 := 0
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, FindMaxLength(params1) == res)
		}

		params1 = []int{0, 1}
		res = 2
		testTemp()

		params1 = []int{0, 1, 0}
		res = 2
		testTemp()

	})
}
