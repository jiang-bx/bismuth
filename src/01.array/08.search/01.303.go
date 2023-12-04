package arraySearch

type NumArray struct {
	sums []int
}

func Constructor(nums []int) NumArray {
	sums := make([]int, len(nums)+1)

	for i, v := range nums {
		sums[i+1] = sums[i] + v
	}

	return NumArray{
		sums: sums,
	}
}

func (n *NumArray) SumRange(left int, right int) int {
	return n.sums[right+1] - n.sums[left]
}
