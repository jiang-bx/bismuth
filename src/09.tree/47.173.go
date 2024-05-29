package tree

type BSTIterator struct {
	list  []int
	index int
}

func Constructor(root *TreeNode) BSTIterator {
	b := BSTIterator{
		list:  []int{},
		index: 0,
	}

	b.dfs(root)

	return b
}

func (b *BSTIterator) dfs(node *TreeNode) {
	if node == nil {
		return
	}
	b.dfs(node.Left)
	b.list = append(b.list, node.Val)
	b.dfs(node.Right)
}

func (b *BSTIterator) Next() int {
	val := b.list[b.index]
	b.index++
	return val
}

func (b *BSTIterator) HasNext() bool {
	return b.index < len(b.list)
}
