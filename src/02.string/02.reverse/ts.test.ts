import { reverseWords151 } from "./04.151";
import { reverseString } from "./01.344";
import { reverseStr } from "./02.541";
import { reverseWords } from "./03.557";

describe("344 测试用例", () => {
    test(`["h","e","l","l","o"] should return ["o","l","l","e","h"]`, () => {
        const strArr = ["h", "e", "l", "l", "o"];
        reverseString(strArr);
        expect(strArr).toEqual(["o", "l", "l", "e", "h"]);
    });

    test(`["H","a","n","n","a","h"] should return ["h","a","n","n","a","H"]`, () => {
        const strArr = ["H", "a", "n", "n", "a", "h"];
        reverseString(strArr);
        expect(strArr).toEqual(["h", "a", "n", "n", "a", "H"]);
    });
});

describe("541 测试用例", () => {
    test(`s = "abcdefg", k = 2 return "bacdfeg"`, () => {
        expect(reverseStr("abcdefg", 2)).toBe("bacdfeg");
    });

    test(`s = "abcd", k = 2 return "bacd"`, () => {
        expect(reverseStr("abcd", 2)).toBe("bacd");
    });
});

describe("557 测试用例", () => {
    test(`Let's take LeetCode contest should return s'teL ekat edoCteeL tsetnoc`, () => {
        expect(reverseWords(`Let's take LeetCode contest`)).toBe(
            `s'teL ekat edoCteeL tsetnoc`
        );
    });

    test(`God Ding should return doG gniD`, () => {
        expect(reverseWords("God Ding")).toBe("doG gniD");
    });
});

describe("151 测试用例", () => {
    test(`the sky is blue should return blue is sky the`, () => {
        expect(reverseWords151(`the sky is blue`)).toBe(`blue is sky the`);
    });

    test(`  hello world   should return world hello`, () => {
        expect(reverseWords151("  hello world  ")).toBe("world hello");
    });

    test(`a good   example should return example good a`, () => {
        expect(reverseWords151("a good   example")).toBe("example good a");
    });

    test(` asdasd df f should return f df asdasd`, () => {
        expect(reverseWords151(" asdasd df f")).toBe("f df asdasd");
    });
});
