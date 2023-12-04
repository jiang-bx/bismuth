import { isAnagram } from "./04.242";
import { canConstruct } from "./03.383";
import { firstUniqChar } from "./01.387";
import { findTheDifference } from "./02.389";
import { frequencySort } from "./06.451";
import { groupAnagrams } from "./05.49";
import { originalDigits } from "./07.423";
import { judgeCircle } from "./08.657";
import { checkRecord } from "./09.551";
import { countBinarySubstrings } from "./10.696";
import { findSubstringInWraproundString } from "./11.467";
import { decode, encode } from "./12.535";

describe("387 测试用例", () => {
    test(`leetcode should return 0`, () => {
        expect(firstUniqChar("leetcode")).toBe(0);
    });

    test(`loveleetcode should return 2`, () => {
        expect(firstUniqChar("loveleetcode")).toBe(2);
    });

    test(`aabb should return -1`, () => {
        expect(firstUniqChar("aabb")).toBe(-1);
    });
});

describe("389 测试用例", () => {
    test("abcd, abcde should return e", () => {
        expect(findTheDifference("abcd", "abcde")).toBe("e");
    });

    test(", y should return y", () => {
        expect(findTheDifference("", "y")).toBe("y");
    });

    test("a, aa should return a", () => {
        expect(findTheDifference("a", "aa")).toBe("a");
    });

    test("abcdabcd, abcfdabcd should return f", () => {
        expect(findTheDifference("abcdabcd", "abcfdabcd")).toBe("f");
    });
});

describe("383 测试用例", () => {
    test("a, b should return false", () => {
        expect(canConstruct("a", "b")).toBe(false);
    });

    test("aa, ab should return false", () => {
        expect(canConstruct("aa", "ab")).toBe(false);
    });

    test("aa, aab should return true", () => {
        expect(canConstruct("aa", "aab")).toBe(true);
    });
});

describe("242 测试用例", () => {
    test("anagram, nagaram should return true", () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
    });

    test("rat, car should return false", () => {
        expect(isAnagram("rat", "car")).toBe(false);
    });
});

describe("49 测试用例", () => {
    // 注意: 该测试用例有问题, 无法准确测试
    test(`["eat", "tea", "tan", "ate", "nat", "bat"] should return [["bat"],["nat","tan"],["ate","eat","tea"]]`, () => {
        const res: string[][] = groupAnagrams([
            "eat",
            "tea",
            "tan",
            "ate",
            "nat",
            "bat",
        ]);
        const arr = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
        expect(arr).toEqual(expect.arrayContaining(res));
    });

    test(`["bdddddddddd","bbbbbbbbbbc"] should return [["bbbbbbbbbbc"],["bdddddddddd"]]`, () => {
        expect(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"])).toEqual([
            ["bbbbbbbbbbc"],
            ["bdddddddddd"],
        ]);
    });

    test(`["a"] should return [["a"]]`, () => {
        expect(groupAnagrams(["a"])).toEqual([["a"]]);
    });
});

describe("451 测试用例", () => {
    test("tree should return eert or eetr", () => {
        expect(frequencySort("tree")).toBe("eert");
    });

    test("cccaaa should return cccaaa or aaaccc", () => {
        expect(frequencySort("cccaaa")).toBe("aaaccc");
    });

    test("Aabb should return bbAa or bbaA", () => {
        expect(frequencySort("Aabb")).toBe("bbAa");
    });
});

describe("423 测试用例", () => {
    test("owoztneoer should return 012", () => {
        expect(originalDigits("owoztneoer")).toBe("012");
    });

    test("fviefuro should return 45", () => {
        expect(originalDigits("fviefuro")).toBe("45");
    });

    test("zeroonetwothreefourfivesixseveneightnine should return 0123456789", () => {
        expect(originalDigits("zeroonetwothreefourfivesixseveneightnine")).toBe(
            "0123456789"
        );
    });

    test("zerozero should return 00", () => {
        expect(originalDigits("zerozero")).toBe("00");
    });
});

describe("657 测试用例", () => {
    test("UD should return true", () => {
        expect(judgeCircle("UD")).toBe(true);
    });

    test("LL should return false", () => {
        expect(judgeCircle("LL")).toBe(false);
    });
});

describe("551 测试用例", () => {
    test("PPALLP should return true", () => {
        expect(checkRecord("PPALLP")).toBe(true);
    });

    test("PPALLL should return false", () => {
        expect(checkRecord("PPALLL")).toBe(false);
    });
});

describe("696 测试用例", () => {
    test("00110011 should return 6", () => {
        expect(countBinarySubstrings("00110011")).toBe(6);
    });

    test("10101 should return 4", () => {
        expect(countBinarySubstrings("10101")).toBe(4);
    });

    test("000111000 should return 6", () => {
        expect(countBinarySubstrings("000111000")).toBe(6);
    });
});

describe("467 测试用例", () => {
    test("a should return 1", () => {
        expect(findSubstringInWraproundString("a")).toBe(1);
    });

    test("cac should return 2", () => {
        expect(findSubstringInWraproundString("cac")).toBe(2);
    });

    test("zab should return 6", () => {
        expect(findSubstringInWraproundString("zab")).toBe(6);
    });
});

describe("535 测试用例", () => {
    test("url is encode and decode 1", () => {
        let url = "https://leetcode.com/problems/design-tinyurl";
        expect(decode(encode(url))).toBe(url);
    });
});
