package graph

// 自己尝试实现, 不能通过全部用例
func Exist1(board [][]byte, word string) bool {
	var backtrack func(r, i, j int) bool
	m := len(board)
	n := len(board[0])
	w := len(word)
	p := make([][]bool, m)

	if w > m*n {
		return false
	}

	for i := range p {
		p[i] = make([]bool, n)
	}

	backtrack = func(r, i, j int) bool {
		if r+1 >= w {
			return true
		}

		// 判断
		ch := word[r+1]

		top := false
		right := false
		bottom := false
		left := false

		// 上
		if i > 0 && ch == board[i-1][j] && !p[i-1][j] {
			p[i-1][j] = true
			top = backtrack(r+1, i-1, j)
			p[i-1][j] = false
		}
		// 右
		if j < n-1 && ch == board[i][j+1] && !p[i][j+1] {
			p[i][j+1] = true
			right = backtrack(r+1, i, j+1)
			p[i][j+1] = false
		}
		// 下
		if i < m-1 && ch == board[i+1][j] && !p[i+1][j] {
			p[i+1][j] = true
			bottom = backtrack(r+1, i+1, j)
			p[i+1][j] = false
		}
		// 左
		if j > 0 && ch == board[i][j-1] && !p[i][j-1] {
			p[i][j-1] = true
			left = backtrack(r+1, i, j-1)
			p[i][j-1] = false
		}

		return top || right || bottom || left
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if word[0] == board[i][j] && backtrack(0, i, j) {
				return true
			}
		}
	}
	return false
}

func Exist(board [][]byte, word string) bool {
	var backtrack func(r, i, j int) bool
	m := len(board)
	n := len(board[0])
	w := len(word)

	backtrack = func(r, i, j int) bool {
		// 直接判断 i, j 是否越界, 或者没找到
		if i < 0 || j < 0 || i >= m || j >= n || board[i][j] != word[r] {
			return false
		}

		// 到最后一个字符了, 找到了
		if r == w-1 {
			return true
		}

		// 找到之后, 修改为 . 标记已使用
		board[i][j] = '.'

		// 继续找 上 右 下 左
		res := backtrack(r+1, i-1, j) || backtrack(r+1, i, j+1) || backtrack(r+1, i+1, j) || backtrack(r+1, i, j-1)

		// 回溯时, 恢复
		board[i][j] = word[r]

		return res
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if backtrack(0, i, j) {
				return true
			}
		}
	}
	return false
}
