import { fib } from "./01.509";
import { climbStairs } from "./02.70";
import { countBits } from "./03.338";

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
        expect(countBits(2)).toEqual([0, 1, 1, 2, 1, 2]);
    });
});
