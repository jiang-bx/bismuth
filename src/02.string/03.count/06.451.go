package count

import (
	"sort"
)

func FrequencySort(s string) string {
	/**
	mp := make(map[byte]int)

	for i := range s {
		mp[s[i]]++
	}

	type arrItem struct {
		ch    byte
		count int
	}

	arr := make([]arrItem, 0, len(mp))

	for k, v := range mp {
		arr = append(arr, arrItem{
			ch:    k,
			count: v,
		})
	}

	sort.Slice(arr, func(i, j int) bool {
		return arr[j].count < arr[i].count
	})

	res := make([]byte, 0, len(s))
	for _, v := range arr {
		res = append(res, bytes.Repeat([]byte{v.ch}, v.count)...)
	}

	return string(res)
	*/

	type arrItem struct {
		ch    string
		count int
	}

	arr := make([]arrItem, 128)

	for i := range s {
		arr[s[i]].ch += string(s[i])
		arr[s[i]].count++
	}

	sort.Slice(arr, func(i, j int) bool {
		return arr[i].count > arr[j].count
	})

	res := ""
	for _, v := range arr {
		res += v.ch
	}

	return res
}
