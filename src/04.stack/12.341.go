/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * type NestedInteger struct {
 * }
 *
 * // Return true if this NestedInteger holds a single integer, rather than a nested list.
 * func (this NestedInteger) IsInteger() bool {}
 *
 * // Return the single integer that this NestedInteger holds, if it holds a single integer
 * // The result is undefined if this NestedInteger holds a nested list
 * // So before calling this method, you should have a check
 * func (this NestedInteger) GetInteger() int {}
 *
 * // Set this NestedInteger to hold a single integer.
 * func (n *NestedInteger) SetInteger(value int) {}
 *
 * // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 * func (this *NestedInteger) Add(elem NestedInteger) {}
 *
 * // Return the nested list that this NestedInteger holds, if it holds a nested list
 * // The list length is zero if this NestedInteger holds a single integer
 * // You can access NestedInteger's List element directly if you want to modify it
 * func (this NestedInteger) GetList() []*NestedInteger {}
 */
package stack

type NestedInteger struct {
	num        int
	hasInteger bool
	list       []*NestedInteger
}

func (n NestedInteger) IsInteger() bool {
	return n.hasInteger
}

func (n NestedInteger) GetInteger() int {
	return n.num
}

func (n *NestedInteger) SetInteger(value int) {
	n.hasInteger = true
	n.num = value
}

func (n *NestedInteger) Add(elem NestedInteger) {
	n.hasInteger = false
	n.list = append(n.list, &elem)
}

func (n NestedInteger) GetList() []*NestedInteger {
	return n.list
}

type NestedIterator struct {
	nestedList []*NestedInteger
}

func ConstructorNestedIterator(nestedList []*NestedInteger) *NestedIterator {
	return &NestedIterator{
		nestedList: nestedList,
	}
}

func (n *NestedIterator) HasNext() bool {
	if len(n.nestedList) == 0 {
		return false
	}

	first := n.nestedList[0]
	if first.IsInteger() {
		return true
	} else {
		n.nestedList = n.nestedList[1:]
		n.nestedList = append(first.GetList(), n.nestedList...)
		return n.HasNext()
	}
}

func (n *NestedIterator) Next() int {
	first := n.nestedList[0]
	n.nestedList = n.nestedList[1:]
	return first.GetInteger()
}
