package graph

import "math"

func JudgePoint24(cards []int) bool {
	var dfs func(nums []float64) bool

	dfs = func(nums []float64) bool {
		n := len(nums)
		if n == 1 {
			return math.Abs(nums[0]-24) < 1e-9
		}

		for i := 0; i < n; i++ {
			for j := i + 1; j < n; j++ {
				a := nums[i]
				b := nums[j]
				newNums := []float64{}

				for k := 0; k < n; k++ {
					if k != i && k != j {
						newNums = append(newNums, nums[k])
					}
				}

				isValid := dfs(append([]float64{a + b}, newNums...)) ||
					dfs(append([]float64{a - b}, newNums...)) ||
					dfs(append([]float64{b - a}, newNums...)) ||
					dfs(append([]float64{a * b}, newNums...))

				if a != 0 {
					isValid = isValid || dfs(append([]float64{a / b}, newNums...))
				}

				if b != 0 {
					isValid = isValid || dfs(append([]float64{b / a}, newNums...))
				}

				if isValid {
					return true
				}
			}
		}

		return false
	}

	nums := []float64{}
	for _, v := range cards {
		nums = append(nums, float64(v))
	}

	return dfs(nums)
}
