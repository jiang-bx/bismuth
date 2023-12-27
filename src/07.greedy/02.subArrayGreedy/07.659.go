package sub_array_greedy

func IsPossible(nums []int) bool {
	nc, tail := map[int]int{}, map[int]int{}

	for _, v := range nums {
		nc[v]++
	}

	for _, num := range nums {
		if nc[num] == 0 {
			continue
		} else if nc[num] > 0 && tail[num-1] > 0 {
			nc[num]--
			tail[num-1]--
			tail[num]++
		} else if nc[num] > 0 && nc[num+1] > 0 && nc[num+2] > 0 {
			nc[num]--
			nc[num+1]--
			nc[num+2]--
			tail[num+2]++
		} else {
			return false
		}
	}

	return true
}
