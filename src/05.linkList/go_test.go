package linklist

import (
	"encoding/json"
	"leetcode/src/utils"
	"strconv"
	"testing"
)

func createLinedNodeByList(list []int) *ListNode {
	var head *ListNode
	lastNode := &ListNode{}
	for _, v := range list {
		curNode := &ListNode{Val: v}
		if head == nil {
			head = curNode
		} else {
			lastNode.Next = curNode
		}
		lastNode = curNode
	}

	return head
}

func TestRemoveElements(t *testing.T) {
	utils.TestWarp("203 测试用例", func() {
	})
}

func TestDeleteNode(t *testing.T) {
	utils.TestWarp("237 测试用例", func() {
	})
}

func TestRemoveNthFromEnd(t *testing.T) {
	utils.TestWarp("19 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		params2 := 0
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ",.n = " + strconv.Itoa(params2) + " should return " + string(res1)

			val, _ := json.Marshal(RemoveNthFromEnd(params1, params2))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{1, 2, 3, 4, 5})
		params2 = 2
		res = createLinedNodeByList([]int{1, 2, 3, 5})
		testTemp()

		params1 = createLinedNodeByList([]int{1})
		params2 = 1
		res = createLinedNodeByList([]int{})
		testTemp()

		params1 = createLinedNodeByList([]int{1, 2})
		params2 = 1
		res = createLinedNodeByList([]int{1})
		testTemp()
	})
}

func TestFlatten(t *testing.T) {
	utils.TestWarp("430 测试用例", func() {
		params1 := CreateNodeByList([]int{})
		res := CreateNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			val, _ := json.Marshal(Flatten(params1))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = CreateNodeByList([]int{1, 2, 3, 4, 5, 6, 0, 0, 0, 7, 8, 9, 10, 0, 0, 11, 12})
		res = CreateNodeByList([]int{1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6})
		testTemp()

		params1 = CreateNodeByList([]int{1, 2, 0, 3})
		res = CreateNodeByList([]int{1, 3, 2})
		testTemp()

		params1 = CreateNodeByList([]int{})
		res = CreateNodeByList([]int{})
		testTemp()

		params1 = CreateNodeByList([]int{1, 0, 2, 0, 3, 0})
		res = CreateNodeByList([]int{1, 3, 2})
		testTemp()

	})
}

func TestRotateRight(t *testing.T) {
	utils.TestWarp("61 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		params2 := 0
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " , k = " + strconv.Itoa(params2) + " should return " + string(res1)

			val, _ := json.Marshal(RotateRight(params1, params2))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{1, 2, 3, 4, 5})
		params2 = 2
		res = createLinedNodeByList([]int{4, 5, 1, 2, 3})
		testTemp()

		params1 = createLinedNodeByList([]int{0, 1, 2})
		params2 = 4
		res = createLinedNodeByList([]int{2, 0, 1})
		testTemp()

		params1 = createLinedNodeByList([]int{1, 2})
		params2 = 1
		res = createLinedNodeByList([]int{2, 1})
		testTemp()

		params1 = createLinedNodeByList([]int{1, 2})
		params2 = 2
		res = createLinedNodeByList([]int{1, 2})
		testTemp()
	})
}

func TestSwapPairs(t *testing.T) {
	utils.TestWarp("24 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			val, _ := json.Marshal(SwapPairs(params1))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{1, 2, 3, 4})
		res = createLinedNodeByList([]int{2, 1, 4, 3})
		testTemp()

		params1 = createLinedNodeByList([]int{})
		res = createLinedNodeByList([]int{})
		testTemp()

		params1 = createLinedNodeByList([]int{1})
		res = createLinedNodeByList([]int{1})
		testTemp()

	})
}

func TestReverseList(t *testing.T) {
	utils.TestWarp("206 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			val, _ := json.Marshal(ReverseList(params1))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{1, 2, 3, 4, 5})
		res = createLinedNodeByList([]int{5, 4, 3, 2, 1})
		testTemp()

		params1 = createLinedNodeByList([]int{})
		res = createLinedNodeByList([]int{})
		testTemp()

		params1 = createLinedNodeByList([]int{1, 2})
		res = createLinedNodeByList([]int{2, 1})
		testTemp()

	})
}

func TestReverseBetween(t *testing.T) {
	utils.TestWarp("92 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		params2 := 0
		params3 := 0
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			val, _ := json.Marshal(ReverseBetween(params1, params2, params3))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{1, 2, 3, 4, 5})
		params2 = 2
		params3 = 4
		res = createLinedNodeByList([]int{1, 4, 3, 2, 5})
		testTemp()

		params1 = createLinedNodeByList([]int{5})
		params2 = 1
		params3 = 1
		res = createLinedNodeByList([]int{5})
		testTemp()

	})
}

func TestReverseKGroup(t *testing.T) {
	utils.TestWarp("25 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		params2 := 0
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			val, _ := json.Marshal(ReverseKGroup(params1, params2))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{1, 2, 3, 4, 5})
		params2 = 2
		res = createLinedNodeByList([]int{2, 1, 4, 3, 5})
		testTemp()

		params1 = createLinedNodeByList([]int{1, 2, 3, 4, 5})
		params2 = 3
		res = createLinedNodeByList([]int{3, 2, 1, 4, 5})
		testTemp()

	})
}

func TestAddTwoNumbers(t *testing.T) {
	utils.TestWarp("2 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		params2 := createLinedNodeByList([]int{})
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			val, _ := json.Marshal(AddTwoNumbers(params1, params2))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{2, 4, 3})
		params2 = createLinedNodeByList([]int{5, 6, 4})
		res = createLinedNodeByList([]int{7, 0, 8})
		testTemp()

		params1 = createLinedNodeByList([]int{0})
		params2 = createLinedNodeByList([]int{0})
		res = createLinedNodeByList([]int{0})
		testTemp()

		params1 = createLinedNodeByList([]int{9, 9, 9, 9, 9, 9, 9})
		params2 = createLinedNodeByList([]int{9, 9, 9, 9})
		res = createLinedNodeByList([]int{8, 9, 9, 9, 0, 0, 0, 1})
		testTemp()
	})
}

func TestAddTwoNumbers2(t *testing.T) {
	utils.TestWarp("445 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		params2 := createLinedNodeByList([]int{})
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			val, _ := json.Marshal(AddTwoNumbers2(params1, params2))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{2, 4, 3})
		params2 = createLinedNodeByList([]int{5, 6, 4})
		res = createLinedNodeByList([]int{8, 0, 7})
		testTemp()

		params1 = createLinedNodeByList([]int{0})
		params2 = createLinedNodeByList([]int{0})
		res = createLinedNodeByList([]int{0})
		testTemp()

		params1 = createLinedNodeByList([]int{7, 2, 4, 3})
		params2 = createLinedNodeByList([]int{5, 6, 4})
		res = createLinedNodeByList([]int{7, 8, 0, 7})
		testTemp()
	})
}

func TestMergeTwoLists(t *testing.T) {
	utils.TestWarp("21 测试用例", func() {
		params1 := createLinedNodeByList([]int{})
		params2 := createLinedNodeByList([]int{})
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)
			desc := string(str1) + ", " + string(str2) + " should return " + string(res1)

			val, _ := json.Marshal(MergeTwoLists(params1, params2))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = createLinedNodeByList([]int{1, 2, 4})
		params2 = createLinedNodeByList([]int{1, 3, 4})
		res = createLinedNodeByList([]int{1, 1, 2, 3, 4, 4})
		testTemp()

		params1 = createLinedNodeByList([]int{})
		params2 = createLinedNodeByList([]int{0})
		res = createLinedNodeByList([]int{0})
		testTemp()

		params1 = createLinedNodeByList([]int{})
		params2 = createLinedNodeByList([]int{})
		res = createLinedNodeByList([]int{})
		testTemp()
	})
}

func TestMergeKLists(t *testing.T) {
	utils.TestWarp("23 测试用例", func() {
		var params1 []*ListNode
		res := createLinedNodeByList([]int{})

		testTemp := func() {
			str1, _ := json.Marshal(params1)
			res1, _ := json.Marshal(res)
			desc := string(str1) + " should return " + string(res1)

			val, _ := json.Marshal(MergeKLists(params1))

			utils.TestCondition(t, desc, string(val) == string(res1))
		}

		params1 = []*ListNode{
			createLinedNodeByList([]int{1, 4, 5}),
			createLinedNodeByList([]int{1, 3, 4}),
			createLinedNodeByList([]int{2, 6}),
		}
		res = createLinedNodeByList([]int{1, 1, 2, 3, 4, 4, 5, 6})
		testTemp()

		params1 = []*ListNode{
			createLinedNodeByList([]int{}),
		}
		res = createLinedNodeByList([]int{})
		testTemp()

		params1 = []*ListNode{}
		res = createLinedNodeByList([]int{})
		testTemp()

	})
}
