package graph

type Node struct {
	Val       int
	Neighbors []*Node
}

func CloneGraph1(node *Node) *Node {
	if node == nil {
		return nil
	}

	var m = make(map[int]*Node)
	var dfs func(cur *Node) *Node

	dfs = func(cur *Node) *Node {
		if _, ok := m[cur.Val]; ok {
			return m[cur.Val]
		}

		copyNode := &Node{Val: cur.Val}
		m[cur.Val] = copyNode

		for _, v := range cur.Neighbors {
			copyNode.Neighbors = append(copyNode.Neighbors, dfs(v))
		}

		return copyNode
	}

	return dfs(node)
}

func CloneGraph(node *Node) *Node {
	if node == nil {
		return nil
	}

	// m 的 val 是 clone 后的值
	var m = make(map[int]*Node)
	var stack = []*Node{node}
	m[node.Val] = &Node{Val: node.Val}

	for len(stack) > 0 {
		cur := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		for _, v := range cur.Neighbors {
			if _, ok := m[v.Val]; !ok {
				m[v.Val] = &Node{Val: v.Val}
				stack = append(stack, v)
			}

			m[cur.Val].Neighbors = append(m[cur.Val].Neighbors, m[v.Val])
		}
	}

	return m[node.Val]
}
