package array_traverse

import (
	"leetcode/src/utils"
	"testing"
)

func TestThirdMax(t *testing.T) {
	if ThirdMax([]int{}) != 0 {
		t.Errorf("no Pass")
	} else {
		t.Logf("[]int{} Pass")
	}

	if ThirdMax([]int{1, 2, 3}) != 1 {
		t.Errorf(" 1, 2, 3 no Pass")
	} else {
		t.Logf("[]int{1, 2, 3} Pass")
	}

	if ThirdMax([]int{1, 2}) != 2 {
		t.Errorf("1, 2 no Pass")
	} else {
		t.Logf("[]int{1, 2} Pass")
	}

	if ThirdMax([]int{2, 2, 3, 1}) != 1 {
		t.Errorf("2, 2, 3, 1 no Pass")
	} else {
		t.Logf("[]int{2, 2, 3, 1} Pass")
	}

	if ThirdMax([]int{8, 3, 4, 5, 6, 7, 2}) != 6 {
		t.Errorf(" 8, 3, 4, 5, 6, 7, 2 no Pass")
	} else {
		t.Logf("[[]int{8, 3, 4, 5, 6, 7, 2} Pass")
	}
}

func TestFindMaxConsecutiveOnes(t *testing.T) {
	if FindMaxConsecutiveOnes([]int{1, 1, 0, 1, 1, 1}) != 3 {
		t.Errorf("1,1,0,1,1,1 no Pass")
	} else {
		t.Logf("1,1,0,1,1,1 pass")
	}

	if FindMaxConsecutiveOnes([]int{1, 0, 1, 1, 0, 1}) != 2 {
		t.Errorf("1,0,1,1,0,1 no Pass")
	} else {
		t.Logf("1,0,1,1,0,1 pass")
	}
}

func TestFindPoisonedDuration(t *testing.T) {
	utils.TestWarp("[]int{1, 4}, 2 不等于 4", func() {
		if FindPoisonedDuration([]int{1, 4}, 2) != 4 {
			t.Errorf("不能通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1,2], 2 测试", func() {
		if FindPoisonedDuration([]int{1, 2}, 2) != 3 {
			t.Errorf("不能通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1,2,3,4,5,6,7,8,9], 1 测试", func() {
		if FindPoisonedDuration([]int{1, 2, 3, 4, 5, 6, 7, 8, 9}, 1) != 9 {
			t.Errorf("不能通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1,2,3,4,5], 5 测试", func() {
		if FindPoisonedDuration([]int{1, 2, 3, 4, 5}, 5) != 9 {
			t.Errorf("不能通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1,5,6], 3 测试", func() {
		if FindPoisonedDuration([]int{1, 5, 6}, 3) != 7 {
			t.Errorf("不能通过")
		} else {
			t.Logf("通过")
		}
	})

}

func TestMaximumProduct(t *testing.T) {
	utils.TestWarp("[1,2,3], 6 测试", func() {
		if MaximumProduct([]int{1, 2, 3}) != 6 {
			t.Errorf("不能通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[1,2,3,4], 24 测试", func() {
		if MaximumProduct([]int{1, 2, 3, 4}) != 24 {
			t.Errorf("不能通过")
		} else {
			t.Logf("通过")
		}
	})

	utils.TestWarp("[-1,-2,-3], -6 测试", func() {
		if MaximumProduct([]int{-1, -2, -3}) != -6 {
			t.Errorf("不能通过")
		} else {
			t.Logf("通过")
		}
	})
}
