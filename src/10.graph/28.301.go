package graph

// RemoveInvalidParentheses1 暴力解法
//
//	@param s
//	@return []string
func RemoveInvalidParentheses1(s string) []string {
	res := map[string]bool{}
	n := len(s)
	l := 0
	r := 0
	for _, v := range s {
		if v == '(' {
			l++
		} else if v == ')' {
			r++
		}
	}
	max := l
	if l > r {
		max = r
	}
	k := 0

	var dfs func(r int, cur string, score int)

	dfs = func(r int, cur string, score int) {
		if score < 0 || score > max {
			return
		}

		if r == n {
			if score == 0 && len(cur) >= k {
				if len(cur) > k {
					res = map[string]bool{}
				}

				k = len(cur)
				res[cur] = true
			}
			return
		}

		ch := s[r]

		if ch == '(' {
			dfs(r+1, cur+string(ch), score+1)
			dfs(r+1, cur, score)
		} else if ch == ')' {
			dfs(r+1, cur+string(ch), score-1)
			dfs(r+1, cur, score)
		} else {
			dfs(r+1, cur+string(ch), score)
		}
	}

	dfs(0, "", 0)

	ans := []string{}

	for i := range res {
		ans = append(ans, i)
	}

	return ans
}

func RemoveInvalidParentheses(s string) []string {
	res := map[string]bool{}
	n := len(s)

	// 多余左括号
	l := 0

	// 多余右括号
	r := 0
	l1 := 0
	r1 := 0
	for _, v := range s {
		if v == '(' {
			l++
			l1++
		} else if v == ')' {
			if l != 0 {
				l--
			} else {
				r++
			}
			r1++
		}
	}

	// 最大路径子串的长度, 也就是字符串长度 减掉 多余的的左右括号就得到了 最少删除最小数量的无效括号 结果
	k := n - l - r

	max := l1
	if l1 > r1 {
		max = r1
	}

	// dfs
	// left 多余左括号
	// right 多余右括号
	// score 分数, 用于标记左右括号的得分
	var dfs func(r int, cur string, left int, right int, score int)

	dfs = func(r int, cur string, left int, right int, score int) {
		if left < 0 || right < 0 || score < 0 || score > max {
			return
		}

		if left == 0 && right == 0 {
			if len(cur) == k {
				res[cur] = true
			}
		}

		if r == n {
			return
		}

		ch := s[r]

		if ch == '(' {
			// 添加左括号
			dfs(r+1, cur+string(ch), left, right, score+1)
			// 不添加左括号, 多余的左括号数量 - 1
			dfs(r+1, cur, left-1, right, score)
		} else if ch == ')' {
			// 同理
			dfs(r+1, cur+string(ch), left, right, score-1)
			dfs(r+1, cur, left, right-1, score)
		} else {
			dfs(r+1, cur+string(ch), left, right, score)
		}
	}

	dfs(0, "", l, r, 0)

	ans := []string{}

	for i := range res {
		ans = append(ans, i)
	}

	return ans
}
