package linklist

type Node struct {
	Val   int
	Prev  *Node `json:"-"` // 避免循环引用
	Next  *Node `json:"next"`
	Child *Node `json:"child"`
}

func CreateNodeByList(list []int) *Node {
	var head *Node
	var lastNode *Node
	var curLevelList = make([][]*Node, 1000)
	level := 0
	levelIndex := -1
	hasLevel := false

	for i := 0; i < len(list); i++ {
		item := list[i]

		if item > 0 {
			curNode := &Node{
				Val: item,
			}
			if head == nil {
				head = curNode
			} else {
				if lastNode != nil {
					lastNode.Next = curNode
					curNode.Prev = lastNode
				}
			}

			lastNode = curNode

			curLevelList[level] = append(curLevelList[level], curNode)
			levelIndex++

			if level > 0 && !hasLevel {
				curLevelList[level-1][levelIndex].Child = curNode
				hasLevel = true
			}
		} else {
			if list[i-1] != 0 {
				level++
				levelIndex = -1
				hasLevel = false
			} else {
				levelIndex++
			}
			lastNode = nil
		}
	}

	return head
}

func Flatten(root *Node) *Node {
	// 迭代处理
	// curNode := root

	// for curNode != nil {
	// 	if curNode.Child != nil {
	// 		next := curNode.Next
	// 		child := curNode.Child

	// 		// 重新组合
	// 		curNode.Next = child
	// 		child.Prev = curNode
	// 		curNode.Child = nil

	// 		// 找到子链最后一个节点
	// 		for child.Next != nil {
	// 			child = child.Next
	// 		}

	// 		// 链接父链下个节点
	// 		child.Next = next
	// 		if next != nil {
	// 			next.Prev = child
	// 		}
	// 	}

	// 	curNode = curNode.Next
	// }

	// return root

	// 递归处理
	dfs(root)
	return root
}

var prev *Node

func dfs(head *Node) {
	if head == nil {
		return
	}

	next := head.Next

	if prev != nil {
		prev.Next = head
		head.Prev = prev
	}

	prev = head
	dfs(head.Child)
	head.Child = nil
	dfs(next)
}
