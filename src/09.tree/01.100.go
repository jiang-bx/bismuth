package tree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func CreateTree(nums []int) *TreeNode {
	return &TreeNode{}
}

func IsSameTree(p *TreeNode, q *TreeNode) bool {
	return false
}
