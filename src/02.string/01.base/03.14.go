package base

func LongestCommonPrefix(strList []string) string {
	/*
		res := ""
		flag := false

		for i := 0; i < len(strList[0]); i++ {
			for j := 1; j < len(strList); j++ {
				if i >= len(strList[j]) || strList[j][i] != strList[0][i] {
					flag = true
					// strList[0] = strList[0][:i]
					break
				}
			}
			if flag {
				break
			}
			res = res + string(strList[0][i])
		}

		return res
	*/

	flag := false

	for i := 0; i < len(strList[0]); i++ {
		for j := 1; j < len(strList); j++ {
			if i >= len(strList[j]) || strList[j][i] != strList[0][i] {
				flag = true
				strList[0] = strList[0][:i]
				break
			}
		}
		if flag {
			break
		}
	}

	return strList[0]
}
