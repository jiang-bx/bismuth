package tree

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func CreateTree(nums []int) *TreeNode {
	nodes := []*TreeNode{}
	n := len(nums)

	for _, v := range nums {
		nodes = append(nodes, &TreeNode{
			Val: v,
		})
	}

	for i := 0; i < n/2; i++ {
		l := i*2 + 1
		r := i*2 + 2
		if l < n {
			nodes[i].Left = nodes[l]
			if nodes[l].Val == math.MinInt {
				nodes[i].Left = nil
			}
		}

		if r < n {
			nodes[i].Right = nodes[r]
			if nodes[r].Val == math.MinInt {
				nodes[i].Right = nil
			}
		}
	}

	if n > 0 {
		return nodes[0]
	}

	return nil
}

func IsSameTree(p *TreeNode, q *TreeNode) bool {
	if p == nil && q == nil {
		return true
	}

	if p == nil || q == nil {
		return false
	}

	if p.Val != q.Val {
		return false
	}

	return IsSameTree(p.Left, q.Left) && IsSameTree(p.Right, q.Right)
}
