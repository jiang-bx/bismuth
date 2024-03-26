package tree

var ans = 0

func FindTilt(root *TreeNode) int {
	dfs563(root)
	v := ans
	ans = 0
	return v
}
func dfs563(root *TreeNode) int {
	if root == nil {
		return 0
	}
	l := dfs563(root.Left)
	r := dfs563(root.Right)
	if l >= r {
		ans += l - r
	} else {
		ans += r - l
	}

	return l + r + root.Val
}
