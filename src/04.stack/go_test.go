package stack

import (
	"encoding/json"
	"leetcode/src/utils"
	"reflect"
	"strconv"
	"testing"
)

func TestCalPoints(t *testing.T) {
	utils.TestWarp("682 测试用例", func() {
		params1 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			desc := string(str1) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, CalPoints(params1) == res)
		}

		params1 = []string{"5", "2", "C", "D", "+"}
		res = 30
		testTemp()

		params1 = []string{"5", "-2", "4", "C", "D", "9", "+", "+"}
		res = 27
		testTemp()

		params1 = []string{"1"}
		res = 1
		testTemp()
	})
}

func TestSimplifyPath(t *testing.T) {
	utils.TestWarp("71 测试用例", func() {
		params1 := ""
		res := ""
		testTemp := func() {

			desc := params1 + " should return " + res
			utils.TestCondition(t, desc, SimplifyPath(params1) == res)
		}

		params1 = "/home/"
		res = "/home"
		testTemp()

		params1 = "/../"
		res = "/"
		testTemp()

		params1 = "/home//foo/"
		res = "/home/foo"
		testTemp()

		params1 = "/a/./b/../../c/"
		res = "/c"
		testTemp()

		params1 = "/"
		res = "/"
		testTemp()
	})
}

func TestLengthLongestPath(t *testing.T) {
	utils.TestWarp("388 测试用例", func() {
		params1 := ""
		res := 0
		testTemp := func() {

			desc := params1 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, LengthLongestPath(params1) == res)
		}

		params1 = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
		res = 20
		testTemp()

		params1 = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
		res = 32
		testTemp()

		params1 = "a"
		res = 0
		testTemp()

		params1 = "file1.txt\nfile2.txt\nlongfile.txt"
		res = 12
		testTemp()

		params1 = "dir\n        file.txt"
		res = 16
		testTemp()
	})
}

func TestEvalRPN(t *testing.T) {
	utils.TestWarp("150 测试用例", func() {
		params1 := []string{}
		res := 0
		testTemp := func() {
			str1, _ := json.Marshal(params1)
			desc := string(str1) + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, EvalRPN(params1) == res)
		}

		params1 = []string{"2", "1", "+", "3", "*"}
		res = 9
		testTemp()

		params1 = []string{"4", "13", "5", "/", "+"}
		res = 6
		testTemp()

		params1 = []string{"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"}
		res = 22
		testTemp()
	})
}

func TestCalculate(t *testing.T) {
	utils.TestWarp("227 测试用例", func() {
		params1 := ""
		res := 0
		testTemp := func() {
			desc := params1 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, Calculate(params1) == res)
		}

		params1 = "1-1+1"
		res = 1
		testTemp()

		params1 = "3+2-2"
		res = 3
		testTemp()

		params1 = "3+2*2"
		res = 7
		testTemp()

		params1 = " 3/2 "
		res = 1
		testTemp()

		params1 = " 3+5 / 2 "
		res = 5
		testTemp()
	})
}

func TestCalculate1(t *testing.T) {
	utils.TestWarp("224 测试用例", func() {
		params1 := ""
		res := 0
		testTemp := func() {
			desc := params1 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, Calculate1(params1) == res)
		}

		params1 = "1-1+1"
		res = 1
		testTemp()

		params1 = "3+2-2"
		res = 3
		testTemp()

		params1 = "3+2*2"
		res = 7
		testTemp()

		params1 = " 3/2 "
		res = 1
		testTemp()

		params1 = " 3+5 / 2 "
		res = 5
		testTemp()

		params1 = "(1+(4+5+2)-3)+(6+8)"
		res = 23
		testTemp()

		params1 = "1*(3-3)+(2+1)"
		res = 3
		testTemp()
	})
}

func TestIsValid(t *testing.T) {
	utils.TestWarp("20 测试用例", func() {
		params1 := ""
		res := true
		testTemp := func() {
			desc := params1 + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsValid(params1) == res)
		}

		params1 = "()"
		res = true
		testTemp()

		params1 = "()[]{}"
		res = true
		testTemp()

		params1 = "([])"
		res = true
		testTemp()

		params1 = "([)]"
		res = false
		testTemp()
	})
}

func TestExclusiveTime(t *testing.T) {
	utils.TestWarp("636 测试用例", func() {
		params1 := 0
		params2 := []string{}
		res := []int{}
		testTemp := func() {
			str2, _ := json.Marshal(params2)
			res1, _ := json.Marshal(res)

			desc := strconv.Itoa(params1) + ", " + string(str2) + " should return " + string(res1)
			utils.TestCondition(t, desc, reflect.DeepEqual(ExclusiveTime(params1, params2), res))
		}

		params1 = 1
		params2 = []string{"0:start:0", "0:end:0"}
		res = []int{1}
		testTemp()

		params1 = 2
		params2 = []string{"0:start:0", "0:start:2", "0:end:5", "1:start:7", "1:end:7", "0:end:8"}
		res = []int{8, 1}
		testTemp()

		params1 = 2
		params2 = []string{"0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"}
		res = []int{7, 1}
		testTemp()

		params1 = 1
		params2 = []string{"0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"}
		res = []int{8}
		testTemp()

		params1 = 2
		params2 = []string{"0:start:0", "1:start:2", "1:end:5", "0:end:6"}
		res = []int{3, 4}
		testTemp()
	})
}

func TestIsTagValid(t *testing.T) {
	utils.TestWarp("591 测试用例", func() {
		params1 := ""
		res := true
		testTemp := func() {

			desc := params1 + " should return " + strconv.FormatBool(res)
			utils.TestCondition(t, desc, IsTagValid(params1) == res)
		}

		params1 = "<DIV>This is the first line <![CDATA[<div>]]></DIV>"
		res = true
		testTemp()

		params1 = "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"
		res = true
		testTemp()

		params1 = "<A>  <B> </A>   </B>"
		res = false
		testTemp()

		params1 = "</A></A></A></A>"
		res = false
		testTemp()

		params1 = "<DIV>  div tag is not closed  <DIV>"
		res = false
		testTemp()

		params1 = "<DIV>  unmatched <  </DIV>"
		res = false
		testTemp()

		params1 = "<DIV> closed tags with invalid tag name  <b>123</b> </DIV>"
		res = false
		testTemp()
	})
}

func TestLongestValidParentheses(t *testing.T) {
	utils.TestWarp("32 测试用例", func() {
		params1 := ""
		res := 0
		testTemp := func() {

			desc := params1 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, LongestValidParentheses(params1) == res)
		}

		params1 = "(()"
		res = 2
		testTemp()

		params1 = ")()())"
		res = 4
		testTemp()

		params1 = ""
		res = 0
		testTemp()

		params1 = "()(()"
		res = 2
		testTemp()

		params1 = ")(((((()())()()))()(()))("
		res = 22
		testTemp()

		params1 = "()"
		res = 2
		testTemp()
	})
}

func TestDeserialize(t *testing.T) {
	utils.TestWarp("385 测试用例", func() {
		params1 := ""
		res := 0
		testTemp := func() {

			desc := params1 + " should return " + strconv.Itoa(res)
			utils.TestCondition(t, desc, LongestValidParentheses(params1) == res)
		}

		params1 = "(()"
		res = 2
		testTemp()

		params1 = ")()())"
		res = 4
		testTemp()

		params1 = ""
		res = 0
		testTemp()

		params1 = "()(()"
		res = 2
		testTemp()

		params1 = ")(((((()())()()))()(()))("
		res = 22
		testTemp()

		params1 = "()"
		res = 2
		testTemp()
	})
}

func TestNestedIterator(t *testing.T) {
	utils.TestWarp("341 测试用例", func() {
		temp1 := func() {
			desc := "[[1,1],2,[1,1]] should return [1,1,2,1,1]"
			list := []*NestedInteger{}
			a := &NestedInteger{}
			a.SetInteger(1)
			b := &NestedInteger{}
			b.SetInteger(1)
			c := &NestedInteger{}
			c.Add(*a)
			c.Add(*b)
			list = append(list, c)

			d := &NestedInteger{}
			d.SetInteger(2)
			list = append(list, d)

			res := []int{}
			obj := ConstructorNestedIterator(list)

			for obj.HasNext() {
				res = append(res, obj.Next())
			}

			utils.TestCondition(t, desc, reflect.DeepEqual(res, []int{1, 1, 2}))
		}
		temp1()

		temp2 := func() {
			desc := "[[]] should return []"
			list := []*NestedInteger{}
			a := &NestedInteger{}

			list = append(list, a)

			res := []int{}
			obj := ConstructorNestedIterator(list)

			for obj.HasNext() {
				res = append(res, obj.Next())
			}

			utils.TestCondition(t, desc, reflect.DeepEqual(res, []int{}))
		}
		temp2()

	})
}

func TestDecodeString(t *testing.T) {
	utils.TestWarp("394 测试用例", func() {
		params1 := ""
		res := ""
		testTemp := func() {
			desc := params1 + " should return " + res
			utils.TestCondition(t, desc, DecodeString(params1) == res)
		}

		params1 = "3[a]2[bc]"
		res = "aaabcbc"
		testTemp()

		params1 = "3[a2[c]]"
		res = "accaccacc"
		testTemp()

		params1 = "2[abc]3[cd]ef"
		res = "abcabccdcdcdef"
		testTemp()

		params1 = "abcabccdcdcdef"
		res = "abcabccdcdcdef"
		testTemp()
	})
}
