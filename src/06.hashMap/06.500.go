package hashmap

import "strings"

func FindWords(words []string) []string {
	hashMap := map[rune]int{}
	for _, v := range "qwertyuiop" {
		hashMap[v] = 1
	}
	for _, v := range "asdfghjkl" {
		hashMap[v] = 2
	}
	for _, v := range "zxcvbnm" {
		hashMap[v] = 3
	}
	res := []string{}
	for _, w := range words {
		t := strings.ToLower(w)
		row := hashMap[rune(t[0])]
		isVaild := false
		for _, ch := range t {
			if row != hashMap[ch] {
				isVaild = true
				break
			}
		}
		if !isVaild {
			res = append(res, w)
		}
	}
	return res
}
