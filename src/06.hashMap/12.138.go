package hashmap

type Node struct {
	Val    int
	Next   *Node
	Random *Node
}

func CopyRandomList(head *Node) *Node {
	var newHead = &Node{
		Val:  -1,
		Next: head,
	}

	var curNode = newHead

	var copyHead *Node

	var hashMap = make(map[*Node]*Node)

	for curNode.Next != nil {
		next := curNode.Next
		hashMap[next] = &Node{
			Val: next.Val,
		}
		curNode = curNode.Next
	}

	curNode = newHead

	for curNode.Next != nil {
		next := curNode.Next
		copyNode := hashMap[next]
		curNode = curNode.Next

		if next.Next != nil {
			copyNode.Next = hashMap[next.Next]
		}

		if next.Random != nil {
			copyNode.Random = hashMap[next.Random]
		}

		if copyHead == nil {
			copyHead = copyNode
		}
	}

	return copyHead
}
