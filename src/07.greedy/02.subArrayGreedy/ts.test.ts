import { maxSubArray } from "./01.53";
import { canCompleteCircuit } from "./02.134";
import { findUnsortedSubarray } from "./03.581";
import { maxProduct } from "./04.152";
import { increasingTriplet } from "./05.334";
import { wiggleMaxLength } from "./06.376";
import { isPossible } from "./07.659";
import { integerBreak } from "./08.343";
import { nextGreaterElement } from "./09.496";
import { nextGreaterElements } from "./10.503";
import { find132pattern } from "./11.456";
import { removeDuplicateLetters } from "./12.316";
import { removeKdigits } from "./13.402";
import { maxNumber } from "./14.321";
import { largestRectangleArea } from "./15.84";
import { maximalRectangle } from "./16.85";

describe("53 测试用例", () => {
    test(`[-2,1,-3,4,-1,2,1,-5,4] should return 6`, () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    test(`[1] should return 1`, () => {
        expect(maxSubArray([1])).toBe(1);
    });

    test(`[5,4,-1,7,8] should return 23`, () => {
        expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    });
});

describe("134 测试用例", () => {
    test(`gas = [1,2,3,4,5], cost = [3,4,5,1,2] should return 3`, () => {
        expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
    });

    test(`gas = [2,3,4], cost = [3,4,3] should return -1`, () => {
        expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
    });
});

describe("581 测试用例", () => {
    test(`[2, 6, 4, 8, 10, 9, 15] should return 5`, () => {
        expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
    });

    test(`[1,2,3,4] should return 0`, () => {
        expect(findUnsortedSubarray([1, 2, 3, 4])).toBe(0);
    });

    test(`[1] should return 0`, () => {
        expect(findUnsortedSubarray([1])).toBe(0);
    });

    test(`[2,3,3,2,4] should return 3`, () => {
        expect(findUnsortedSubarray([2, 3, 3, 2, 4])).toBe(3);
    });

    test(`[1,2,3,3,3] should return 0`, () => {
        expect(findUnsortedSubarray([1, 2, 3, 3, 3])).toBe(0);
    });

    test(`[1,3,2,2,2] should return 4`, () => {
        expect(findUnsortedSubarray([1, 3, 2, 2, 2])).toBe(4);
    });

    test(`[1,2,4,5,3] should return 3`, () => {
        expect(findUnsortedSubarray([1, 2, 4, 5, 3])).toBe(3);
    });
});

describe("152 测试用例", () => {
    test(`[2,3,-2,4] should return 6`, () => {
        expect(maxProduct([2, 3, -2, 4])).toBe(6);
    });

    test(`[-2,0,-1] should return 0`, () => {
        expect(maxProduct([-2, 0, -1])).toBe(0);
    });

    test(`[0, 2] should return 2`, () => {
        expect(maxProduct([0, 2])).toBe(2);
    });

    test(`[-2,3,-4] should return 24`, () => {
        expect(maxProduct([-2, 3, -4])).toBe(24);
    });

    test(`[2,-5,-2,-4,3] should return 24`, () => {
        expect(maxProduct([2, -5, -2, -4, 3])).toBe(24);
    });
});

describe("334 测试用例", () => {
    test(`[1, 2, 3, 4, 5] should return true`, () => {
        expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
    });

    test(`[5, 4, 3, 2, 1] should return false`, () => {
        expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
    });

    test(`[2, 1, 5, 0, 4, 6] should return true`, () => {
        expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
    });
    test(`[20,100,10,12,5,13] should return true`, () => {
        expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toBe(true);
    });
});

describe("376 测试用例", () => {
    test(`[1,7,4,9,2,5] should return 6`, () => {
        expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).toBe(6);
    });

    test(`[1,17,5,10,13,15,10,5,16,8] should return 7`, () => {
        expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toBe(7);
    });

    test(`[1,2,3,4,5,6,7,8,9] should return 2`, () => {
        expect(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(2);
    });
});

describe("659 测试用例", () => {
    test(`[1,2,3,3,4,5] should return true`, () => {
        expect(isPossible([1, 2, 3, 3, 4, 5])).toBe(true);
    });

    test(`[1,2,3,3,4,4,5,5] should return true`, () => {
        expect(isPossible([1, 2, 3, 3, 4, 4, 5, 5])).toBe(true);
    });

    test(`[1,2,3,4,4,5] should return false`, () => {
        expect(isPossible([1, 2, 3, 4, 4, 5])).toBe(false);
    });
});

describe("343 测试用例", () => {
    test(`2 should return 1`, () => {
        expect(integerBreak(2)).toBe(1);
    });

    test(`10 should return 36`, () => {
        expect(integerBreak(10)).toBe(36);
    });

    test(`31 should return 78732`, () => {
        expect(integerBreak(31)).toBe(78732);
    });
});

describe("496 测试用例", () => {
    test(`nums1 = [4,1,2], nums2 = [1,3,4,2] should return [-1,3,-1]`, () => {
        expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([
            -1, 3, -1,
        ]);
    });

    test(`nums1 = [2,4], nums2 = [1,2,3,4] should return [3,-1]`, () => {
        expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
    });
});

describe("503 测试用例", () => {
    test(`[1,2,1] should return [2,-1,2]`, () => {
        expect(nextGreaterElements([1, 2, 1])).toEqual([2, -1, 2]);
    });

    test(`[1,2,3,4,3] should return [2,3,4,-1,4]`, () => {
        expect(nextGreaterElements([1, 2, 3, 4, 3])).toEqual([2, 3, 4, -1, 4]);
    });
});

describe("456 测试用例", () => {
    test(`[1,2,3,4] should return false`, () => {
        expect(find132pattern([1, 2, 3, 4])).toBe(false);
    });

    test(`[3,1,4,2] should return true`, () => {
        expect(find132pattern([3, 1, 4, 2])).toBe(true);
    });

    test(`[-1,3,2,0] should return true`, () => {
        expect(find132pattern([-1, 3, 2, 0])).toBe(true);
    });

    test(`[1,0,1,-4,-3] should return false`, () => {
        expect(find132pattern([1, 0, 1, -4, -3])).toBe(false);
    });
});

describe("316 测试用例", () => {
    test(`bcabc should return abc`, () => {
        expect(removeDuplicateLetters("bcabc")).toBe("abc");
    });

    test(`cbacdcbc should return acdb`, () => {
        expect(removeDuplicateLetters("cbacdcbc")).toBe("acdb");
    });
});

describe("402 测试用例", () => {
    test(`num = "1432219", k = 3 should return 1219`, () => {
        expect(removeKdigits("1432219", 3)).toBe("1219");
    });

    test(`num = "10200", k = 1 should return 200`, () => {
        expect(removeKdigits("10200", 1)).toBe("200");
    });

    test(`num = "10", k = 2 should return 0`, () => {
        expect(removeKdigits("10", 2)).toBe("0");
    });
});

describe("321 测试用例", () => {
    test(`[3, 4, 6, 5], [9, 1, 2, 5, 8, 3], k = 5 should return [9, 8, 6, 5, 3]`, () => {
        expect(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5)).toEqual([
            9, 8, 6, 5, 3,
        ]);
    });

    test(`[6, 7], [6, 0, 4], k = 5 should return [9, 8, 6, 5, 3]`, () => {
        expect(maxNumber([6, 7], [6, 0, 4], 5)).toEqual([6, 7, 6, 0, 4]);
    });

    test(`[3, 9], [8, 9], k = 3 should return [9, 8, 9]`, () => {
        expect(maxNumber([3, 9], [8, 9], 3)).toEqual([9, 8, 9]);
    });
});

describe("84 测试用例", () => {
    test(`[2,1,5,6,2,3] should return 10`, () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    });

    test(`[2,4] should return 4`, () => {
        expect(largestRectangleArea([2, 4])).toBe(4);
    });
});

describe("85 测试用例", () => {
    test(`[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]] should return 6`, () => {
        expect(
            maximalRectangle([
                ["1", "0", "1", "0", "0"],
                ["1", "0", "1", "1", "1"],
                ["1", "1", "1", "1", "1"],
                ["1", "0", "0", "1", "0"],
            ])
        ).toBe(6);
    });

    test(`[["0"]] should return 0`, () => {
        expect(maximalRectangle([["0"]])).toBe(0);
    });

    test(`[["1"]] should return 1`, () => {
        expect(maximalRectangle([["1"]])).toBe(1);
    });
});
