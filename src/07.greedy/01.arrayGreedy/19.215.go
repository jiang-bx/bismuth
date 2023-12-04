package array_greedy

func FindKthLargest(nums []int, k int) int {
	/**
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] > nums[j]
	})

	return nums[k-1]
	*/

	swap := func(arr []int, i int, j int) {
		temp := arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}

	heapfiy := func(arr []int, k int, i int) {
		for {
			minIndex := i
			if 2*i <= k && arr[2*i] < arr[i] {
				minIndex = 2 * i
			}

			if 2*i+1 <= k && arr[2*i+1] < arr[minIndex] {
				minIndex = 2*i + 1
			}

			if minIndex != i {
				swap(arr, i, minIndex)
				i = minIndex
			} else {
				break
			}
		}
	}

	buildHeap := func(arr []int, l int) {
		if l == 1 {
			return
		}

		for i := l / 2; i >= 1; i-- {
			heapfiy(arr, l, i)
		}
	}

	heap := []int{-1}
	heap = append(heap, nums[:k]...)

	buildHeap(heap, k)

	for i := k; i < len(nums); i++ {
		if heap[1] < nums[i] {
			heap[1] = nums[i]
			heapfiy(heap, k, 1)
		}
	}

	return heap[1]
}
