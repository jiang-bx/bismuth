import { isSubsequence } from "./01.392";
import { findLongestWord } from "./02.524";
import { findLUSLength } from "./03.521";
import { findLUSLength2 } from "./04.522";

describe("392 测试用例", () => {
    test("abc, ahbgdc  should return true", () => {
        expect(isSubsequence("abc", "ahbgdc")).toBe(true);
    });

    test("axc, ahbgdc  should return false", () => {
        expect(isSubsequence("axc", "ahbgdc")).toBe(false);
    });
});

describe("524 测试用例", () => {
    test(`abpcplea, ["ale","apple","monkey","plea"]  should return apple`, () => {
        expect(
            findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])
        ).toBe("apple");
    });

    test(`abpcplea, ["a","b","c"]  should return a`, () => {
        expect(findLongestWord("abpcplea", ["a", "b", "c"])).toBe("a");
    });

    test(`abpcplea, ["ale","apple","monkey","plea", "abpcplaaa","abpcllllll","abccclllpppeeaaaa"]  should return apple`, () => {
        expect(
            findLongestWord("abpcplea", [
                "ale",
                "apple",
                "monkey",
                "plea",
                "abpcplaaa",
                "abpcllllll",
                "abccclllpppeeaaaa",
            ])
        ).toBe("apple");
    });
});

describe("521 测试用例", () => {
    test(`aba, cdc  should return 3`, () => {
        expect(findLUSLength("aba", "cdc")).toBe(3);
    });

    test(`aaa, bbb  should return 3`, () => {
        expect(findLUSLength("bbb", "cdc")).toBe(3);
    });

    test(`aaa, aaa  should return -1`, () => {
        expect(findLUSLength("aaa", "aaa")).toBe(-1);
    });
});

describe("522 测试用例", () => {
    test(`["aba","cdc","eae"]  should return 3`, () => {
        expect(findLUSLength2(["aba", "cdc", "eae"])).toBe(3);
    });

    test(`["aaa","aaa","aa"]  should return -1`, () => {
        expect(findLUSLength2(["aaa", "aaa", "aa"])).toBe(-1);
    });

    test(`["aabbcc", "aabbcc","cb"]  should return 2`, () => {
        expect(findLUSLength2(["aabbcc", "aabbcc", "cb"])).toBe(2);
    });
});
