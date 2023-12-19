import { maxSubArray } from "./01.53";
import { canCompleteCircuit } from "./02.134";
import { findUnsortedSubarray } from "./03.581";

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
});
