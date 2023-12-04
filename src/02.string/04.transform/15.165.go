package transform

func CompareVersion(version1, version2 string) int {
	/**
	arr1, arr2 := strings.Split(version1, "."), strings.Split(version2, ".")
	n1, n2 := len(arr1), len(arr2)
	n := 0
	if n1 > n2 {
		n = n1
	} else {
		n = n2
	}

	trans := func(s string) int {
		var l int
		var i int
		for ; i < len(s); i++ {
			if s[i] != '0' {
				break
			}
		}
		for ; i < len(s); i++ {
			l = l*10 + int(s[i]-'0')
		}
		return l
	}

	for i := 0; i < n; i++ {
		v1, v2 := 0, 0
		if i < n1 {
			v1 = trans(arr1[i])
		}

		if i < n2 {
			v2 = trans(arr2[i])
		}

		if v1 > v2 {
			return 1
		} else if v1 < v2 {
			return -1
		}
	}

	return 0
	*/

	// 双指针
	i, j := 0, 0
	n1, n2 := len(version1), len(version2)

	for i < n1 || j < n2 {
		num1, num2 := 0, 0
		for i < n1 && version1[i] != '.' {
			num1 = num1*10 + int(version1[i]-'0')
			i++
		}

		for j < n2 && version2[j] != '.' {
			num2 = num2*10 + int(version2[j]-'0')
			j++
		}

		if num1 > num2 {
			return 1
		} else if num1 < num2 {
			return -1
		}
		i++
		j++
	}

	return 0
}
