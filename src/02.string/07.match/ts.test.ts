import { licenseKeyFormatting } from "./01.482";
import { maximum69Number } from "./02.6";
import { fullJustify } from "./03.68";
import { strStr } from "./04.28";
import { repeatedStringMatch } from "./05.686";
import { repeatedSubstringPattern } from "./06.459";
import { shortestPalindrome } from "./07.214";
import { longestPalindrome } from "./08.5";

describe("482 测试用例", () => {
    test(`5F3Z-2e-9-w, 4 should return 5F3Z-2E9W`, () => {
        expect(licenseKeyFormatting("5F3Z-2e-9-w", 4)).toBe("5F3Z-2E9W");
    });

    test(`2-5g-3-J, 2 should return 2-5G-3J`, () => {
        expect(licenseKeyFormatting("2-5g-3-J", 2)).toBe("2-5G-3J");
    });
});

describe("6 测试用例", () => {
    test(`9669 should return 9969`, () => {
        expect(maximum69Number(9669)).toBe(9969);
    });

    test(`9996 should return 9999`, () => {
        expect(maximum69Number(9996)).toBe(9999);
    });

    test(`9999 should return 9999`, () => {
        expect(maximum69Number(9999)).toBe(9999);
    });
});

describe("68 测试用例", () => {
    test(`["This", "is", "an", "example", "of", "text", "justification."], 16 should return [
        "This    is    an",
        "example  of text",
        "justification.  "
     ]`, () => {
        expect(
            fullJustify(
                ["This", "is", "an", "example", "of", "text", "justification."],
                16
            )
        ).toEqual(["This    is    an", "example  of text", "justification.  "]);
    });

    test(`["What","must","be","acknowledgment","shall","be"], 16 should return [
        "What   must   be",
        "acknowledgment  ",
        "shall be        "
      ]`, () => {
        expect(
            fullJustify(
                ["What", "must", "be", "acknowledgment", "shall", "be"],
                16
            )
        ).toEqual(["What   must   be", "acknowledgment  ", "shall be        "]);
    });

    test(`["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20 should return [
        "Science  is  what we",
        "understand      well",
        "enough to explain to",
        "a  computer.  Art is",
        "everything  else  we",
        "do                  "
      ]`, () => {
        expect(
            fullJustify(
                [
                    "Science",
                    "is",
                    "what",
                    "we",
                    "understand",
                    "well",
                    "enough",
                    "to",
                    "explain",
                    "to",
                    "a",
                    "computer.",
                    "Art",
                    "is",
                    "everything",
                    "else",
                    "we",
                    "do",
                ],
                20
            )
        ).toEqual([
            "Science  is  what we",
            "understand      well",
            "enough to explain to",
            "a  computer.  Art is",
            "everything  else  we",
            "do                  ",
        ]);
    });
});

describe("28 测试用例", () => {
    test(`sadbutsad, sad should return 0`, () => {
        expect(strStr("sadbutsad", "sad")).toBe(0);
    });

    test(`leetcode, leeto should return -1`, () => {
        expect(strStr("leetcode", "leeto")).toBe(-1);
    });

    test(`hello, ll should return 2`, () => {
        expect(strStr("hello", "ll")).toBe(2);
    });

    test(`mississippi, issip should return 4`, () => {
        expect(strStr("mississippi", "issip")).toBe(4);
    });

    test(`a, a should return 0`, () => {
        expect(strStr("a", "a")).toBe(0);
    });
});

describe("686 测试用例", () => {
    test(`abcd, cdabcdab should return 3`, () => {
        expect(repeatedStringMatch("abcd", "cdabcdab")).toBe(3);
    });

    test(`a, aa should return 2`, () => {
        expect(repeatedStringMatch("a", "aa")).toBe(2);
    });

    test(`a, a should return 1`, () => {
        expect(repeatedStringMatch("a", "a")).toBe(1);
    });

    test(`aa, a should return 1`, () => {
        expect(repeatedStringMatch("aa", "a")).toBe(1);
    });

    test(`abc, wxyz should return -1`, () => {
        expect(repeatedStringMatch("abc", "wxyz")).toBe(-1);
    });
});

describe("459 测试用例", () => {
    test(`abab should return true`, () => {
        expect(repeatedSubstringPattern("abab")).toBe(true);
    });

    test(`aba should return false`, () => {
        expect(repeatedSubstringPattern("aba")).toBe(false);
    });

    test(`abcabcabcabc should return true`, () => {
        expect(repeatedSubstringPattern("abcabcabcabc")).toBe(true);
    });

    test("ababab should return true", () => {
        expect(repeatedSubstringPattern("ababab")).toBe(true);
    });

    test("ababba should return false", () => {
        expect(repeatedSubstringPattern("ababba")).toBe(false);
    });

    test("a should return false", () => {
        expect(repeatedSubstringPattern("a")).toBe(false);
    });
});

describe("214 测试用例", () => {
    test(`aacecaaa should return aaacecaaa`, () => {
        expect(shortestPalindrome("aacecaaa")).toBe("aaacecaaa");
    });

    test(`abcd should return dcbabcd`, () => {
        expect(shortestPalindrome("abcd")).toBe("dcbabcd");
    });

    test(`aaacecaaa should return aaacecaaa`, () => {
        expect(shortestPalindrome("aaacecaaa")).toBe("aaacecaaa");
    });

    test(`"" should return ""`, () => {
        expect(shortestPalindrome("")).toBe("");
    });
});

describe("5 测试用例", () => {
    expect.extend({
        toIndexOf(received, arg) {
            const pass = arg.findIndex((item) => received === item) > -1;
            return {
                pass,
                message() {
                    return `${pass ? "success" : "failed"}, ${arg.join(
                        ","
                    )} not contain ${received} `;
                },
            };
        },
    });

    test(`babad should return bab`, () => {
        // @ts-ignore
        expect(longestPalindrome("babad")).toIndexOf(["bab", "aba"]);
    });

    test(`cbbd should return bb`, () => {
        expect(longestPalindrome("cbbd")).toBe("bb");
    });

    test(`a should return a`, () => {
        expect(longestPalindrome("a")).toBe("a");
    });
});
