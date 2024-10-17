import { fib } from "./01.509";
import { climbStairs } from "./02.70";
import { countBits } from "./03.338";
import { jump } from "./04.45";
import { canJump } from "./05.55";
import { rob } from "./06.198";

describe("509 测试用例", () => {
    test(`2 should return 1`, () => {
        expect(fib(2)).toBe(1);
    });

    test(`3 should return 2`, () => {
        expect(fib(3)).toBe(2);
    });

    test(`4 should return 3`, () => {
        expect(fib(4)).toBe(3);
    });
});

describe("70 测试用例", () => {
    test(`2 should return 2`, () => {
        expect(climbStairs(2)).toBe(2);
    });

    test(`3 should return 3`, () => {
        expect(climbStairs(3)).toBe(3);
    });
});

describe("338 测试用例", () => {
    test(`2 should return [0, 1, 1]`, () => {
        expect(countBits(2)).toEqual([0, 1, 1]);
    });

    test(`5 should return [0,1,1,2,1,2]`, () => {
        expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
    });
});

describe("45 测试用例", () => {
    test(`[2,3,1,1,4] should return 2`, () => {
        expect(jump([2, 3, 1, 1, 4])).toBe(2);
    });

    test(`[2,3,0,1,4] should return 2`, () => {
        expect(jump([2, 3, 0, 1, 4])).toBe(2);
    });
});

describe("55 测试用例", () => {
    test(`[2,3,1,1,4] should return true`, () => {
        expect(canJump([2, 3, 1, 1, 4])).toBe(true);
    });

    test(`[3,2,1,0,4] should return false`, () => {
        expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    });
});

describe("198 测试用例", () => {
    test(`[1,2,3,1] should return 4`, () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });

    test(`[2,7,9,3,1] should return 12`, () => {
        expect(rob([2, 7, 9, 3, 1])).toBe(12);
    });
});
