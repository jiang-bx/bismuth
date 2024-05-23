package tree

import (
	"strconv"
	"strings"
)

// Serializes a tree to a single string.
func Serialize(root *TreeNode) string {
	var dfs func(node *TreeNode)
	ans := []string{}

	dfs = func(node *TreeNode) {
		if node == nil {
			ans = append(ans, "null")
			return
		}

		ans = append(ans, strconv.Itoa(node.Val))
		dfs(node.Left)
		dfs(node.Right)
	}

	dfs(root)

	return strings.Join(ans, ",")
}

// Deserializes your encoded data to tree.
func Deserialize(data string) *TreeNode {
	var dfs func() *TreeNode
	queue := strings.Split(data, ",")

	dfs = func() *TreeNode {
		v := queue[0]
		queue = queue[1:]

		if v == "null" {
			return nil
		}

		c, _ := strconv.Atoi(v)
		node := &TreeNode{Val: c}
		node.Left = dfs()
		node.Right = dfs()
		return node
	}

	return dfs()
}
