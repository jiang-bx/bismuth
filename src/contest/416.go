package contest

import (
	"container/heap"
	"math"
	"slices"
	"sort"
)

type C_416 struct{}

func (c *C_416) reportSpam(message []string, bannedWords []string) bool {
	m := map[string]int{}

	for _, v := range message {
		m[v]++
	}

	k := 0
	for _, v := range bannedWords {
		if _, ok := m[v]; ok {
			k += m[v]
			m[v] = 0
			if k >= 2 {
				return true
			}
		}
	}

	return false
}

func (c *C_416) MinNumberOfSeconds1(mountainHeight int, workerTimes []int) int64 {

	// workerTimes 需要同时工作
	// 为每个 work 分配 降低高度的 值
	// t + 2t + 3t + ... + xt = t.(x(x + 1) / 2)

	maxT := slices.Max(workerTimes)
	h := (mountainHeight-1)/len(workerTimes) + 1
	ans := 1 + sort.Search(maxT*h*(h+1)/2, func(m int) bool {
		m++
		leftH := mountainHeight
		for _, t := range workerTimes {
			leftH -= int((math.Sqrt(float64(m/t*8+1)) - 1) / 2)
			if leftH <= 0 {
				return true
			}
		}
		return false
	})

	return int64(ans)
}

type Worker struct {
	totalTime int `json:"totalTime" dc:"工人总共花费的时间"`
	time      int `json:"time"      dc:"工人降低1单位高度所需的时间"`
	index     int `json:"index"     dc:"工人的索引"`
}

type MinHeap []Worker

func (h MinHeap) Len() int {
	return len(h)
}

func (h MinHeap) Less(i, j int) bool {
	return h[i].totalTime < h[j].totalTime
}

func (h MinHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(Worker))
}

func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func (c *C_416) minNumberOfSeconds(mountainHeight int, workerTimes []int) int64 {

	m := len(workerTimes)
	f := make([]int, m)
	minHeap := &MinHeap{}

	for i, v := range workerTimes {
		heap.Push(minHeap, Worker{
			totalTime: v,
			time:      v,
			index:     i,
		})
	}

	for mountainHeight > 0 {
		worker := heap.Pop(minHeap).(Worker)

		mountainHeight--

		f[worker.index] += worker.time

		time := worker.time + workerTimes[worker.index]

		newTotalTime := worker.totalTime + time

		heap.Push(minHeap, Worker{
			totalTime: newTotalTime,
			time:      time,
			index:     worker.index,
		})
	}

	maxTime := 0
	for _, time := range f {
		if time > maxTime {
			maxTime = time
		}
	}

	return int64(maxTime)
}
