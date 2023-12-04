package hashmap

import (
	"strings"
)

func FindDuplicate(paths []string) [][]string {
	// ans := [][]string{}
	// mp := map[string][]string{}
	// reg := regexp.MustCompile(`^(.+)\((.+)\)$`)

	// for _, v := range paths {
	// 	files := strings.Split(v, " ")
	// 	dir := files[0]

	// 	for i := 1; i < len(files); i++ {
	// 		match := reg.FindStringSubmatch(files[i])

	// 		if match == nil {
	// 			continue
	// 		}

	// 		content := match[2]
	// 		path := dir + "/" + match[1]

	// 		mp[content] = append(mp[content], path)
	// 	}
	// }

	// for _, v := range mp {
	// 	if len(v) >= 2 {
	// 		ans = append(ans, v)
	// 	}
	// }

	// return ans

	// 使用 make 能减小内存, 不是 正则 减少时间
	ans := make([][]string, 0)
	mp := make(map[string][]string)

	for _, v := range paths {
		files := strings.Split(v, " ")
		dir := files[0]

		for i := 1; i < len(files); i++ {

			match := strings.Split(files[i], "(")

			content := match[1]

			mp[content] = append(mp[content], dir+"/"+match[0])
		}
	}

	for _, v := range mp {
		if len(v) >= 2 {
			ans = append(ans, v)
		}
	}

	return ans
}
