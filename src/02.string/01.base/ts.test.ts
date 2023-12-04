import { isPalindrome } from "./02.125";
import { longestCommonPrefix } from "./03.14";
import { countSegments } from "./04.434";
import { detectCapitalUse } from "./01.520";
import { lengthOfLastWord } from "./05.58";

describe("520 测试用例", () => {
    test("USA should return true", () => {
        expect(detectCapitalUse("USA")).toBe(true);
    });

    test("FlaG should return false", () => {
        expect(detectCapitalUse("FlaG")).toBe(false);
    });
});

describe("125 测试用例", () => {
    const str1 = "A man, a plan, a canal: Panama";
    test(`${str1} should return true`, () => {
        expect(isPalindrome(str1)).toBe(true);
    });

    const str2 = "race a car";
    test(`${str2} should return false`, () => {
        expect(isPalindrome(str2)).toBe(false);
    });

    const str3 = " ";
    test(`${str3} should return true`, () => {
        expect(isPalindrome(str3)).toBe(true);
    });
});

describe("14 测试用例", () => {
    test(`['flower','flow','flight'] should return fl`, () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });

    test(`["dog","racecar","car"] should return ""`, () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });
});

describe("434 测试用例", () => {
    test("Hello, my name is John should return 5", () => {
        expect(countSegments("Hello, my name is John")).toBe(5);
    });

    test("a b should return 2", () => {
        expect(countSegments("a b ")).toBe(2);
    });

    test("     should return 0", () => {
        expect(countSegments("    ")).toBe(0);
    });

    test("Of all the gin joints in all the towns in all the world,   should return 13", () => {
        expect(
            countSegments(
                "Of all the gin joints in all the towns in all the world,   "
            )
        ).toBe(13);
    });

    test("a should return 1", () => {
        expect(countSegments("a")).toBe(1);
    });
});

describe("58 测试用例", () => {
    test("Hello World return 5", () => {
        expect(lengthOfLastWord("Hello World")).toBe(5);
    });

    test("   fly me   to   the moon   return 4", () => {
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
    });

    test("luffy is still joyboy return 6", () => {
        expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
    });

    test("a b return 1", () => {
        expect(lengthOfLastWord("a b")).toBe(1);
    });

    test(" return 1", () => {
        expect(lengthOfLastWord("")).toBe(0);
    });

    test("    return 1", () => {
        expect(lengthOfLastWord("    ")).toBe(0);
    });
});
