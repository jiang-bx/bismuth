package tree

import (
	"math"
	"strconv"
)

/**
 * 树的 高度 为 height ，矩阵的行数 m 应该等于 height + 1 。
 * 矩阵的列数 n 应该等于 2^(height+1) - 1 。
 * 根节点 需要放置在 顶行 的 正中间 ，对应位置为 res[0][(n-1)/2] 。
 * 对于放置在矩阵中的每个节点，设对应位置为 res[r][c] ，
 * 将其左子节点放置在 res[r+1][c-2^(height-r-1)] ，
 * 右子节点放置在 res[r+1][c+2^(height-r-1)] 。
 */

func pow(x int, y int) int {
	return int(math.Pow(float64(x), float64(y)))
}

func PrintTree(root *TreeNode) [][]string {
	var getHeight func(node *TreeNode, h int)
	var fillAns func(node *TreeNode, r int, c int)
	height := 0
	getHeight = func(node *TreeNode, h int) {
		if node == nil {
			return
		}
		h++
		if h > height {
			height = h
		}

		getHeight(node.Left, h)
		getHeight(node.Right, h)
	}
	getHeight(root, 0)
	height--

	m := height + 1
	n := pow(2, height+1) - 1
	ans := make([][]string, m)
	for i := range ans {
		ans[i] = make([]string, n)
	}

	fillAns = func(node *TreeNode, r, c int) {
		val := ""
		if node != nil {
			val = strconv.Itoa(node.Val)
		}
		ans[r][c] = val

		k := pow(2, height-r-1)

		if node.Left != nil {
			fillAns(node.Left, r+1, c-k)
		}

		if node.Right != nil {
			fillAns(node.Right, r+1, c+k)
		}
	}

	fillAns(root, 0, (n-1)/2)

	return ans
}
