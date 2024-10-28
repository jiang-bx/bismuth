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
import { checkRecord_552 } from "./11.552";
import { maxProfit_123 } from "./12.123";
import { maxProfit_188 } from "./13.188";
import { maxProfit_309 } from "./14.309";
import { longestValidParentheses } from "./15.32";
import { nthUglyNumber } from "./16.264";

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

    test(`*2 should return 11`, () => {
        expect(numDecodings_639("*2")).toBe(11);
    });

    test(`** should return 96`, () => {
        expect(numDecodings_639("**")).toBe(96);
    });

    test(`*** should return 999`, () => {
        expect(numDecodings_639("***")).toBe(999);
    });

    test(`********* should return 291868912`, () => {
        expect(numDecodings_639("*********")).toBe(291868912);
    });
});

describe("552 测试用例", () => {
    test(`2 should return 8`, () => {
        expect(checkRecord_552(2)).toBe(8);
    });

    test(`1 should return 3`, () => {
        expect(checkRecord_552(1)).toBe(3);
    });

    test(`10101 should return 183236316`, () => {
        expect(checkRecord_552(10101)).toBe(183236316);
    });
});

describe("123 测试用例", () => {
    test(`[3,3,5,0,0,3,1,4] should return 6`, () => {
        expect(maxProfit_123([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6);
    });

    test(`[1,2,3,4,5] should return 4`, () => {
        expect(maxProfit_123([1, 2, 3, 4, 5])).toBe(4);
    });

    test(`[7,6,4,3,1] should return 0`, () => {
        expect(maxProfit_123([7, 6, 4, 3, 1])).toBe(0);
    });

    test(`[1] should return 0`, () => {
        expect(maxProfit_123([1])).toBe(0);
    });
});

describe("188 测试用例", () => {
    test(`2, [2,4,1] should return 2`, () => {
        expect(maxProfit_188(2, [2, 4, 1])).toBe(2);
    });

    test(`2, [3,2,6,5,0,3] should return 7`, () => {
        expect(maxProfit_188(2, [3, 2, 6, 5, 0, 3])).toBe(7);
    });
});

describe("309 测试用例", () => {
    test(`[1,2,3,0,2] should return 3`, () => {
        expect(maxProfit_309([1, 2, 3, 0, 2])).toBe(3);
    });

    test(`[1] should return 0`, () => {
        expect(maxProfit_309([1])).toBe(0);
    });

    test(`[1,2,4] should return 3`, () => {
        expect(maxProfit_309([1, 2, 4])).toBe(3);
    });
});

describe("32 测试用例", () => {
    test(`)()()) should return 4`, () => {
        expect(longestValidParentheses(")()())")).toBe(4);
    });

    test(`(() should return 2`, () => {
        expect(longestValidParentheses("(()")).toBe(2);
    });

    test(`"" should return 0`, () => {
        expect(longestValidParentheses("")).toBe(0);
    });
});

describe("264 测试用例", () => {
    test(`10 should return 12`, () => {
        expect(nthUglyNumber(10)).toBe(12);
    });

    test(`1 should return 1`, () => {
        expect(nthUglyNumber(1)).toBe(1);
    });
});
