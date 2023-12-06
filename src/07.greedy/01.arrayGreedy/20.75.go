package array_greedy

import "math/rand"

func SortColors(nums []int) {
	n := len(nums)
	zero := 0
	two := n
	i := 0

	for i < two {
		if nums[i] == 0 {
			Swap(&nums[i], &nums[zero])
			zero++
			i++
		} else if nums[i] == 1 {
			i++
		} else {
			two--
			Swap(&nums[i], &nums[two])
		}
	}
}

func QuickSort(arr []int) {
	qSort(arr, 0, len(arr)-1)
}

func QSort(arr []int, left int, right int) {
	index := -1
	if left < right {
		index = partition(arr, left, right)
		if left < index-1 {
			qSort(arr, left, index-1)
		}
		if index < right {
			qSort(arr, index, right)
		}
	}
}

func Partiton(arr []int, left int, right int) int {
	datum := arr[rand.Int()%(right-left+1)+left]
	i := left
	j := right

	for i <= j {
		for arr[i] < datum {
			i++
		}
		for arr[j] > datum {
			j--
		}

		if i <= j {
			Swap(&arr[i], &arr[j])
			i++
			j--
		}
	}

	return i
}

func Swap(a *int, b *int) {
	temp := *a
	*a = *b
	*b = temp
}

func SelectSort(arr []int) {
	n := len(arr)

	for i := 0; i < n-1; i++ {
		minIndex := i
		for j := i + 1; j < n; j++ {
			if arr[minIndex] > arr[j] {
				minIndex = j
			}
		}
		temp := arr[minIndex]
		arr[minIndex] = arr[i]
		arr[i] = temp
	}
}
