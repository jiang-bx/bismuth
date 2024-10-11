import { grayCode } from "./01.89";
import { singleNumber } from "./02.136";
import { singleNumber137 } from "./03.137";
import { singleNumber260 } from "./04.260";
import { missingNumber } from "./05.268";
import { getSum, getSum1 } from "./06.371";
import { maxProduct } from "./07.318";
import { rangeBitwiseAnd } from "./08.201";

describe("89 测试用例", () => {
    test(`"2 should return [0,1,3,2]`, () => {
        expect(grayCode(2)).toEqual([0, 1, 3, 2]);
    });

    test(`"1 should return [0,1]`, () => {
        expect(grayCode(1)).toEqual([0, 1]);
    });
});

describe("136 测试用例", () => {
    test(`[2,2,1] should return 1`, () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });

    test(`[4,1,2,1,2] should return 4`, () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });

    test(`[1] should return 1`, () => {
        expect(singleNumber([1])).toBe(1);
    });
});

describe("137 测试用例", () => {
    test(`[2,2,3,2] should return 3`, () => {
        expect(singleNumber137([2, 2, 3, 2])).toBe(3);
    });

    test(`[0,1,0,1,0,1,99] should return 99`, () => {
        expect(singleNumber137([0, 1, 0, 1, 0, 1, 99])).toBe(99);
    });
});

describe("260 测试用例", () => {
    test(`[1,2,1,3,2,5] should return [3, 5]`, () => {
        expect(singleNumber260([1, 2, 1, 3, 2, 5])).toEqual([5, 3]);
    });

    test(`[-1,0] should return [-1,0]`, () => {
        expect(singleNumber260([-1, 0])).toEqual([0, -1]);
    });

    test(`[0,1] should return [1,0]`, () => {
        expect(singleNumber260([0, 1])).toEqual([0, 1]);
    });
});

describe("268 测试用例", () => {
    test(`[3,0,1] should return 2`, () => {
        expect(missingNumber([3, 0, 1])).toBe(2);
    });

    test(`[0,1] should return 2`, () => {
        expect(missingNumber([0, 1])).toBe(2);
    });

    test(`[9,6,4,2,3,5,7,0,1] should return 8`, () => {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });

    test(`[0] should return 1`, () => {
        expect(missingNumber([0])).toBe(1);
    });
});

describe("371 测试用例", () => {
    test(`1, 2 should return 3`, () => {
        expect(getSum(1, 2)).toBe(3);
    });

    test(`2, 3 should return 5`, () => {
        expect(getSum(2, 3)).toBe(5);
    });

    test(`-8, -12 should return -20`, () => {
        expect(getSum1(-8, -12)).toBe(-20);
    });
});

describe("318 测试用例", () => {
    test(`["abcw","baz","foo","bar","xtfn","abcdef"] should return 16`, () => {
        expect(
            maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])
        ).toBe(16);
    });

    test(`["a","ab","abc","d","cd","bcd","abcd"] should return 4`, () => {
        expect(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"])).toBe(
            4
        );
    });

    test(`["a","aa","aaa","aaaa"] should return 0`, () => {
        expect(maxProduct(["a", "aa", "aaa", "aaaa"])).toBe(0);
    });
});

describe("201 测试用例", () => {
    test(`5, 7 should return 4`, () => {
        expect(rangeBitwiseAnd(5, 7)).toBe(4);
    });

    test(`0, 0 should return 0`, () => {
        expect(rangeBitwiseAnd(0, 0)).toBe(0);
    });

    test(`1, 2147483647 should return 0`, () => {
        expect(rangeBitwiseAnd(1, 2147483647)).toBe(0);
    });
});
