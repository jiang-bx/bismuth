package tree

type BSTIterator struct {
}

func Constructor(root *TreeNode) BSTIterator {
	return BSTIterator{}
}

func (this *BSTIterator) Next() int {
	return 1
}

func (this *BSTIterator) HasNext() bool {
	return false
}
