package tree

func SortedArrayToBST(nums []int) *TreeNode {
	var dfs func(start, end int) *TreeNode
	dfs = func(start, end int) *TreeNode {
		if start > end {
			return nil
		}

		mid := start + (end-start)/2

		return &TreeNode{nums[mid], dfs(start, mid-1), dfs(mid+1, end)}
	}
	return dfs(0, len(nums)-1)
}
