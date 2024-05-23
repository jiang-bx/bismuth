package tree

import (
	"strconv"
	"strings"
)

// Serializes a tree to a single string.
func Serialize449(root *TreeNode) string {
	if root == nil {
		return ""
	}

	return strconv.Itoa(root.Val) + " " + Serialize449(root.Left) + Serialize449(root.Right)
}

// Deserializes your encoded data to tree.
func Deserialize449(data string) *TreeNode {
	if data == "" {
		return nil
	}
	var root *TreeNode = nil
	var insert func(node *TreeNode, val int) *TreeNode
	insert = func(node *TreeNode, val int) *TreeNode {
		if node == nil {
			return &TreeNode{Val: val}
		} else if val > node.Val {
			node.Right = insert(node.Right, val)
		} else {
			node.Left = insert(node.Left, val)
		}

		return node
	}

	data = data[:len(data)-1]
	arr := strings.Split(data, " ")

	for _, v := range arr {
		c, _ := strconv.Atoi(v)
		root = insert(root, c)
	}

	return root
}
