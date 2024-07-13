package graph

// CountArrangement1 DFS + 回溯
//
//	@param n
//	@return int
func CountArrangement1(n int) int {
	var dfs func(num int) int
	visited := make([]bool, n+1)

	dfs = func(num int) int {
		if num > n {
			return 1
		}

		ans := 0

		for i := 1; i <= n; i++ {
			if !visited[i] && (i%num == 0 || num%i == 0) {
				visited[i] = true
				ans += dfs(num + 1)
				visited[i] = false
			}
		}

		return ans
	}

	return dfs(1)
}

// CountArrangement2 DFS + 状态压缩
//
//	@param n
//	@return int
func CountArrangement2(n int) int {
	var dfs func(num int, visited int) int

	dfs = func(num int, visited int) int {
		if num > n {
			return 1
		}

		ans := 0

		for i := 1; i <= n; i++ {
			if ((1<<i)&visited == 0) && (i%num == 0 || num%i == 0) {
				ans += dfs(num+1, (1<<i)|visited)
			}
		}

		return ans
	}

	return dfs(1, 0)
}

// CountArrangement DFS + 记忆优化
//
//	@param n
//	@return int
func CountArrangement(n int) int {
	var dfs func(num int, visited int) int

	mask := 1 << n
	memo := make([][]int, n+1)
	for i := range memo {
		memo[i] = make([]int, mask)
	}

	dfs = func(num int, visited int) int {
		if num > n {
			return 1
		}

		ans := 0

		if memo[num][visited] != 0 {
			return memo[num][visited]
		}

		for i := 1; i <= n; i++ {
			if ((1<<(i-1))&visited == 0) && (i%num == 0 || num%i == 0) {
				ans += dfs(num+1, (1<<(i-1))|visited)
			}
		}

		memo[num][visited] = ans

		return ans
	}

	return dfs(1, 0)
}
