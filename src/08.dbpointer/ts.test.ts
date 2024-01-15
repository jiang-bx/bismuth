import { reverseVowels } from "./01.345";
import { validPalindrome } from "./02.680";

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
});
