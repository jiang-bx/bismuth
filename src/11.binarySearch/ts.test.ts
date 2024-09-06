import { guessNumWrap } from "./01.374";
import { searchInsert } from "./02.35";
import { isPerfectSquare } from "./03.367";
import { arrangeCoins } from "./04.441";
import { searchRange } from "./05.34";

describe("374 测试用例", () => {
    test(`"10 should return 6`, () => {
        expect(guessNumWrap(10, 6)).toBe(6);
    });

    test(`"1 should return 1`, () => {
        expect(guessNumWrap(1, 1)).toBe(1);
    });

    test(`"2 should return 1`, () => {
        expect(guessNumWrap(2, 1)).toBe(1);
    });
});

describe("35 测试用例", () => {
    test(`[1,3,5,6], 5 should return 2`, () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });

    test(`[1,3,5,6], 2 should return 1`, () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    });

    test(`[1,3,5,6], 7 should return 4`, () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });
});

describe("367 测试用例", () => {
    test(`16 should return true`, () => {
        expect(isPerfectSquare(16)).toBe(true);
    });

    test(`14 should return false`, () => {
        expect(isPerfectSquare(14)).toBe(false);
    });
});

describe("441 测试用例", () => {
    test(`5 should return 2`, () => {
        expect(arrangeCoins(5)).toBe(2);
    });

    test(`8 should return 3`, () => {
        expect(arrangeCoins(8)).toBe(3);
    });
});

describe("34 测试用例", () => {
    test(`[5,7,7,8,8,10], target = 8 should return [3,4]`, () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    });

    test(`[5,7,7,8,8,10], target = 6 should return [-1,-1]`, () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    });

    test(`[], target = 0 should return [-1,-1]`, () => {
        expect(searchRange([], 0)).toEqual([-1, -1]);
    });
});
