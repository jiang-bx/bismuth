package sub_array_greedy

func CanCompleteCircuit(gas []int, cost []int) int {
	total, cur, idx := 0, 0, 0
	for i, v := range gas {
		diff := v - cost[i]
		total += diff
		cur += diff

		// 重新选择起点
		if cur < 0 {
			idx = i + 1
			cur = 0
		}
	}

	if total < 0 {
		return -1
	}
	return idx
}
