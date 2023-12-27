import { maxSubArray } from "./01.53";
import { canCompleteCircuit } from "./02.134";
import { findUnsortedSubarray } from "./03.581";
import { maxProduct } from "./04.152";
import { increasingTriplet } from "./05.334";
import { wiggleMaxLength } from "./06.376";
import { isPossible } from "./07.659";
import { integerBreak } from "./08.343";

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
});
