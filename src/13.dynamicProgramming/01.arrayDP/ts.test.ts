import { fib } from "./01.509";
import { climbStairs } from "./02.70";
import { countBits } from "./03.338";
import { jump } from "./04.45";
import { canJump } from "./05.55";
import { rob } from "./06.198";
import { rob_213 } from "./07.213";
import { minSteps } from "./08.650";
import { numDecodings } from "./09.91";
import { numDecodings_639 } from "./10.639";

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

    test(`[2,1,1,2] should return 4`, () => {
        expect(rob([2, 1, 1, 2])).toBe(4);
    });
});

describe("213 测试用例", () => {
    test(`[2,3,2] should return 3`, () => {
        expect(rob_213([2, 3, 2])).toBe(3);
    });

    test(`[1,2,3,1] should return 4`, () => {
        expect(rob_213([1, 2, 3, 1])).toBe(4);
    });

    test(`[1,2,3] should return 3`, () => {
        expect(rob_213([1, 2, 3])).toBe(3);
    });
});

describe("650 测试用例", () => {
    test(`3 should return 3`, () => {
        expect(minSteps(3)).toBe(3);
    });

    test(`1 should return 0`, () => {
        expect(minSteps(1)).toBe(0);
    });
});

describe("91 测试用例", () => {
    test(`12 should return 2`, () => {
        expect(numDecodings("12")).toBe(2);
    });

    test(`226 should return 3`, () => {
        expect(numDecodings("226")).toBe(3);
    });

    test(`06 should return 0`, () => {
        expect(numDecodings("06")).toBe(0);
    });
});


describe("639 测试用例", () => {
    test(`* should return 9`, () => {
        expect(numDecodings_639("*")).toBe(9);
    });

    test(`1* should return 18`, () => {
        expect(numDecodings_639("1*")).toBe(18);
    });

    test(`2* should return 15`, () => {
        expect(numDecodings_639("2*")).toBe(15);
    });
});
