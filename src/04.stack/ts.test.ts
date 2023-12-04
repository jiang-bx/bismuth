import { calPoints } from "./01.682";
import { simplifyPath } from "./02.71";
import { lengthLongestPath } from "./03.388";
import { evalRPN } from "./04.150";
import { calculate } from "./05.227";
import { calculate1 } from "./06.224";
import { isValid } from "./07.20";
import { exclusiveTime } from "./08.636";
import { isTagValid } from "./09.591";
import { longestValidParentheses } from "./10.32";
import { deserialize } from "./11.385";
import { NestedInteger, NestedIterator } from "./12.341";
import { decodeString } from "./13.394";

describe("682 测试用例", () => {
    test(`["5","2","C","D","+"] should return 30`, () => {
        expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30);
    });

    test(`["5","-2","4","C","D","9","+","+"] should return 27`, () => {
        expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
    });

    test(`["1"] should return 1`, () => {
        expect(calPoints(["1"])).toBe(1);
    });
});

describe("71 测试用例", () => {
    test(`"/home/" should return "/home"`, () => {
        expect(simplifyPath("/home/")).toBe("/home");
    });

    test(`"/../" should return "/"`, () => {
        expect(simplifyPath("/../")).toBe("/");
    });

    test(`"/home//foo/" should return "home/foo"`, () => {
        expect(simplifyPath("/home//foo/")).toBe("/home/foo");
    });

    test(`"//a/./b/../../c" should return "/c"`, () => {
        expect(simplifyPath("//a/./b/../../c")).toBe("/c");
    });
});

describe("388 测试用例", () => {
    test(`"dir\n        file.txt" should return 16`, () => {
        expect(lengthLongestPath("dir\n        file.txt")).toBe(16);
    });

    // return;
    test(`"dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" should return 20`, () => {
        expect(
            lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext")
        ).toBe(20);
    });

    test(`"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" should return 32`, () => {
        expect(
            lengthLongestPath(
                "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
            )
        ).toBe(32);
    });

    test(`"a" should return 0`, () => {
        expect(lengthLongestPath("a")).toBe(0);
    });

    test(`"file1.txt\nfile2.txt\nlongfile.txt" should return 12`, () => {
        expect(lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt")).toBe(
            12
        );
    });
});

describe("150 测试用例", () => {
    test(`["2","1","+","3","*"] should return 9`, () => {
        expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
    });

    test(`["4","13","5","/","+"] should return 6`, () => {
        expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
    });

    test(`["10","6","9","3","+","-11","*","/","*","17","+","5","+"] should return 22`, () => {
        expect(
            evalRPN([
                "10",
                "6",
                "9",
                "3",
                "+",
                "-11",
                "*",
                "/",
                "*",
                "17",
                "+",
                "5",
                "+",
            ])
        ).toBe(22);
    });
});

describe("227 测试用例", () => {
    test(`3+2-2 should return 3`, () => {
        expect(calculate("3+2-2")).toBe(3);
    });

    test(`3+2*2 should return 7`, () => {
        expect(calculate("3+2*2")).toBe(7);
    });

    test(` 3/2  should return 1`, () => {
        expect(calculate(" 3/2 ")).toBe(1);
    });

    test(`3+5 / 2  should return 5`, () => {
        expect(calculate("3+5 / 2 ")).toBe(5);
    });

    test(`1-1+1  should return 1`, () => {
        expect(calculate("1-1+1")).toBe(1);
    });
});

describe("224 测试用例", () => {
    test(`3+2-2 should return 3`, () => {
        expect(calculate1("3+2-2")).toBe(3);
    });

    test(`3+2*2 should return 7`, () => {
        expect(calculate1("3+2*2")).toBe(7);
    });

    test(` 3/2  should return 1`, () => {
        expect(calculate1(" 3/2 ")).toBe(1);
    });

    test(`3+5 / 2  should return 5`, () => {
        expect(calculate1("3+5 / 2 ")).toBe(5);
    });

    test(`1-1+1  should return 1`, () => {
        expect(calculate1("1-1+1")).toBe(1);
    });

    test(`(1+(4+5+2)-3)+(6+8)  should return 23`, () => {
        expect(calculate1("(1+(4+5+2)-3)+(6+8)")).toBe(23);
    });

    test(`1*(3-3)+(2+1)  should return 3`, () => {
        expect(calculate1("1*(3-3)+(2+1)")).toBe(3);
    });
});

describe("20 测试用例", () => {
    test(`() should return true`, () => {
        expect(isValid("()")).toBe(true);
    });

    test(`()[]{} should return true`, () => {
        expect(isValid("()[]{}")).toBe(true);
    });

    test(`([]) should return true`, () => {
        expect(isValid("([])")).toBe(true);
    });

    test(`([)] should return false`, () => {
        expect(isValid("([)]")).toBe(false);
    });
});

describe("636 测试用例", () => {
    test(`2, ["0:start:0","1:start:2","1:end:5","0:end:6"] should return [3,4]`, () => {
        expect(
            exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"])
        ).toEqual([3, 4]);
    });

    test(`1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"] should return [8]`, () => {
        expect(
            exclusiveTime(1, [
                "0:start:0",
                "0:start:2",
                "0:end:5",
                "0:start:6",
                "0:end:6",
                "0:end:7",
            ])
        ).toEqual([8]);
    });

    test(`2, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"] should return [7, 1]`, () => {
        expect(
            exclusiveTime(2, [
                "0:start:0",
                "0:start:2",
                "0:end:5",
                "1:start:6",
                "1:end:6",
                "0:end:7",
            ])
        ).toEqual([7, 1]);
    });

    test(`2, ["0:start:0","0:start:2","0:end:5","1:start:7","1:end:7","0:end:8"] should return [8, 1]`, () => {
        expect(
            exclusiveTime(2, [
                "0:start:0",
                "0:start:2",
                "0:end:5",
                "1:start:7",
                "1:end:7",
                "0:end:8",
            ])
        ).toEqual([8, 1]);
    });

    test(`1, ["0:start:0","0:end:0"] should return [1]`, () => {
        expect(exclusiveTime(1, ["0:start:0", "0:end:0"])).toEqual([1]);
    });

    test(`1, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5"] should return [6]`, () => {
        expect(
            exclusiveTime(1, [
                "0:start:0",
                "0:start:1",
                "0:start:2",
                "0:end:3",
                "0:end:4",
                "0:end:5",
            ])
        ).toEqual([6]);
    });
});

describe("591 测试用例", () => {
    test(`"<DIV>This is the first line <![CDATA[<div>]]></DIV>" should return true`, () => {
        expect(
            isTagValid("<DIV>This is the first line <![CDATA[<div>]]></DIV>")
        ).toBe(true);
    });

    test(`"<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>" should return true`, () => {
        expect(
            isTagValid("<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>")
        ).toBe(true);
    });

    test(`"<A>  <B> </A>   </B>" should return false`, () => {
        expect(isTagValid("<A>  <B> </A>   </B>")).toBe(false);
    });

    test(`"<DIV>  div tag is not closed  <DIV>" should return false`, () => {
        expect(isTagValid("<DIV>  div tag is not closed  <DIV>")).toBe(false);
    });
});

describe("32 测试用例", () => {
    test(`"(()" should return 2`, () => {
        expect(longestValidParentheses("(()")).toBe(2);
    });

    test(`")()())()" should return 4`, () => {
        expect(longestValidParentheses(")()())()")).toBe(4);
    });

    test(`"" should return 0`, () => {
        expect(longestValidParentheses("")).toBe(0);
    });

    test(`"()(()" should return 2`, () => {
        expect(longestValidParentheses("()(()")).toBe(2);
    });

    test(`")(((((()())()()))()(()))(" should return 22`, () => {
        expect(longestValidParentheses(")(((((()())()()))()(()))(")).toBe(22);
    });
});

describe("385 测试用例", () => {
    test(`324 should return 324`, () => {
        expect(deserialize("324")).toBe(324);
    });

    test(`[123,[456,[789]]] should return [123,[456,[789]]]`, () => {
        expect(longestValidParentheses("[123,[456,[789]]]")).toBe([
            123,
            [456, [789]],
        ]);
    });
});

describe("341 测试用例", () => {
    test(`[[1,1],2,[1,1]] should return [1,1,2,1,1]`, () => {
        const list: NestedInteger[] = [];
        const a = new NestedInteger(1);
        const b = new NestedInteger(1);
        const c = new NestedInteger();
        c.add(a);
        c.add(b);
        list.push(c);
        const d = new NestedInteger(2);
        list.push(d);
        const e = new NestedInteger(1);
        const f = new NestedInteger(1);
        const g = new NestedInteger();
        g.add(e);
        g.add(f);
        list.push(g);

        const res: number[] = [];
        const obj = new NestedIterator(list);
        while (obj.hasNext()) {
            res.push(obj.next());
        }

        expect(res).toEqual([1, 1, 2, 1, 1]);
    });

    test(`[1,[4,[6]]] should return [1,4,6]`, () => {
        const list: NestedInteger[] = [];
        const a = new NestedInteger(1);
        list.push(a);
        const b = new NestedInteger();
        const c = new NestedInteger(4);
        b.add(c);
        const d = new NestedInteger();
        const e = new NestedInteger(6);
        d.add(e);
        b.add(d);
        list.push(b);

        const res: number[] = [];
        const obj = new NestedIterator(list);
        while (obj.hasNext()) {
            res.push(obj.next());
        }

        expect(res).toEqual([1, 4, 6]);
    });

    test(`[[]] should return []`, () => {
        const list: NestedInteger[] = [];
        const a = new NestedInteger();
        list.push(a);

        const res: number[] = [];
        const obj = new NestedIterator(list);
        while (obj.hasNext()) {
            res.push(obj.next());
        }

        expect(res).toEqual([]);
    });

    test(`[[],[3]] should return [3]`, () => {
        const list: NestedInteger[] = [];
        const a = new NestedInteger();
        list.push(a);
        const b = new NestedInteger();
        const c = new NestedInteger(3);
        b.add(c);
        list.push(b);

        const res: number[] = [];
        const obj = new NestedIterator(list);
        while (obj.hasNext()) {
            res.push(obj.next());
        }

        expect(res).toEqual([3]);
    });
});

describe("394 测试用例", () => {
    test(`3[a]2[bc] should return aaabcbc`, () => {
        expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
    });

    test(`3[a2[c]] should return accaccacc`, () => {
        expect(decodeString("3[a2[c]]")).toBe("accaccacc");
    });

    test(`2[abc]3[cd]ef should return abcabccdcdcdef`, () => {
        expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
    });

    test(`abc3[cd]xyz should return abccdcdcdxyz`, () => {
        expect(decodeString("abc3[cd]xyz")).toBe("abccdcdcdxyz");
    });
});
