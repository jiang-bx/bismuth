import { reverseVowels } from "./01.345";
import { validPalindrome } from "./02.680";
import { twoSum } from "./03.167";
import { threeSum } from "./04.15";
import { threeSumClosest } from "./05.16";

describe("345 测试用例", () => {
    test(`hello should return holle`, () => {
        expect(reverseVowels("hello")).toBe("holle");
    });

    test(`leetcode should return leotcede`, () => {
        expect(reverseVowels("leetcode")).toBe("leotcede");
    });
});

describe("680 测试用例", () => {
    test(`aba should return true`, () => {
        expect(validPalindrome("aba")).toBe(true);
    });

    test(`abca should return true`, () => {
        expect(validPalindrome("abca")).toBe(true);
    });

    test(`abc should return false`, () => {
        expect(validPalindrome("abc")).toBe(false);
    });

    test(`aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga should return true`, () => {
        expect(
            validPalindrome(
                "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
            )
        ).toBe(true);
    });
});

describe("167 测试用例", () => {
    test(`numbers = [2,7,11,15], target = 9 should return [1,2]`, () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

    test(`numbers = [2,3,4], target = 6 should return [1,3]`, () => {
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    });

    test(`numbers = [-1,0], target = -1 should return [1,2]`, () => {
        expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    });
});

describe("15 测试用例", () => {
    test(`[-1,0,1,2,-1,-4] should return [[-1,-1,2],[-1,0,1]]`, () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
            [-1, -1, 2],
            [-1, 0, 1],
        ]);
    });

    test(`[0,1,1] should return []`, () => {
        expect(threeSum([0, 1, 1])).toEqual([]);
    });

    test(`[0,0,0] should return [[0, 0, 0]]`, () => {
        expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    });
});

describe("16 测试用例", () => {
    test(`nums = [-1,2,1,-4], target = 1 should return 2`, () => {
        expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    });

    test(`nums = [0,0,0], target = 1 should return 0`, () => {
        expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
    });
});
